import classNames from "classnames/bind";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import Header from "~/components/Layout/components/Header";
import StepChain from "~/components/Layout/components/StepChain";
import styles from "./SecondStep.module.scss";
import InforTicker from "~/components/Layout/components/InforTicker";
import head_coach from "~/assets/imgs/head_coach.png";
import coach from "~/assets/imgs/coach.png";
import FooterMini from "~/components/Layout/components/FooterMini";
import { replace } from "formik";

const cx = classNames.bind(styles);

function Order() {
    const [standardSeats, setStandardSeats] = useState([]);
    const [four_cabins, setFourCabins] = useState([]);
    const [active, setActive] = useState(1);
    const [train, setTrain] = useState({});
    const [subtotal, setSubTotal] = useState(0);
    const [countTicket, setCountTicket] = useState(0);
    const [backgroundStandard, setBackgroundStandard] = useState([]);
    const [backgroundCabin, setBackgroundCabin] = useState([]);
    const [select, setSelect] = useState([]);

    // get value from first step
    useEffect(() => {
        const train = JSON.parse(sessionStorage.getItem("train"));
        setTrain(train);
    }, []);

    // click to change coach
    const handleCoach = (number) => {
        setActive(number);
    };

    // get data seats
    const loadData = async () => {
        const standardSeats = await axios.get("http://localhost:5000/api/seats/standard");
        setStandardSeats(standardSeats.data);

        const four_cabins = await axios.get("http://localhost:5000/api/seats/four_cabins");
        setFourCabins(four_cabins.data);
    };
    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        for (let i in standardSeats) {
            if (standardSeats[i].Status === 0) {
                setBackgroundStandard((prev) => [
                    ...prev,
                    {
                        number: i,
                        background: "white",
                        color: "black",
                        border: "1px solid var(--grey-300)",
                    },
                ]);
            } else {
                setBackgroundStandard((prev) => [
                    ...prev,
                    {
                        number: i,
                        background: "var(--selected)",
                        color: "white",
                        border: "none",
                    },
                ]);
            }
        }
    }, [standardSeats]);

    useEffect(() => {
        for (let i in four_cabins) {
            if (four_cabins[i].Status === 0) {
                setBackgroundCabin((prev) => [
                    ...prev,
                    {
                        number: i,
                        background: "white",
                        color: "black",
                        border: "1px solid var(--grey-300)",
                        level: four_cabins[i].Level,
                    },
                ]);
            } else {
                setBackgroundCabin((prev) => [
                    ...prev,
                    {
                        number: i,
                        background: "var(--selected)",
                        color: "white",
                        border: "none",
                        level: four_cabins[i].Level,
                    },
                ]);
            }
        }
    }, [four_cabins]);

    const handleChoose = (seatNumber) => {
        const price = standardSeats[0].CoachPrice;

        backgroundStandard.forEach((seat) => {
            if (seat.number === seatNumber) {
                if (seat.background === "white") {
                    seat.background = "#5daa8f";
                    seat.color = "white";
                    setSubTotal((prev) => prev + price);
                    setCountTicket((prev) => prev + 1);
                    setSelect((prev) => [
                        ...prev,
                        {
                            seatNumber: seatNumber,
                            coach: 1,
                        },
                    ]);
                } else {
                    seat.background = "white";
                    seat.color = "black";
                    setSubTotal((prev) => prev - price);
                    setCountTicket((prev) => prev - 1);

                    const newSelect = [...select];
                    const index = newSelect.indexOf(seatNumber);
                    newSelect.splice(index, 1);
                    setSelect(newSelect);
                }
            }
        });
        setBackgroundStandard([...backgroundStandard]);
    };

    const handleChoose1 = (seatNumber) => {
        backgroundCabin.forEach((seat) => {
            const price1 = four_cabins[0].CoachPrice;

            if (seat.number === seatNumber) {
                if (seat.background === "white") {
                    seat.background = "#5daa8f";
                    seat.color = "white";
                    setSubTotal((prev) => prev + price1);
                    setCountTicket((prev) => prev + 1);
                    setSelect((prev) => [
                        ...prev,
                        {
                            seatNumber: seatNumber,
                            coach: 2,
                        },
                    ]);
                } else {
                    seat.background = "white";
                    seat.color = "black";
                    setSubTotal((prev) => prev - price1);
                    setCountTicket((prev) => prev - 1);

                    const newSelect = [...select];
                    const index = newSelect.indexOf(seatNumber);
                    newSelect.splice(index, 1);
                    setSelect(newSelect);
                }
            }
        });
        setBackgroundCabin([...backgroundCabin]);
    };

    const navigate = useNavigate();
    const { idUser } = useParams();
    const route = `/order/firststep/${idUser}`;

    const handleContinue = () => {
        if (subtotal > 0) {
            sessionStorage.setItem("selectedSeat", JSON.stringify(select));
            navigate(`/order/thirdstep/passengerinfo/${idUser}`, { replace: true });
        } else alert("Please choose one seat at least!");
    };

    return (
        <div>
            <Header />
            <div className={cx("space")}></div>

            <StepChain route={route} done1={true} active2={true} />

            <div className={cx("ticket")}>
                <InforTicker
                    departureTime={train.departureTime}
                    arrivalTime={train.arrivalTime}
                    departureDate={train.departureDate}
                    arrivalDate={train.arrivalDate}
                    departurePlace={train.departurePlace}
                    arrivalPlace={train.arrivalPlace}
                    seats={train.seats}
                    train={train.train}
                />
            </div>

            <div className={cx("train")}>
                <img className={cx("body-train", "full")} src={coach} alt="coach" />
                <img className={cx("body-train", "full")} src={coach} alt="coach" />
                <img
                    className={cx("body-train")}
                    src={coach}
                    alt="coach"
                    style={{ background: `${active === 2 ? "#5DAA8F" : ""}` }}
                    onClick={() => handleCoach(2)}
                />
                <img
                    className={cx("body-train")}
                    src={coach}
                    alt="coach"
                    style={{ background: `${active === 1 ? "#5DAA8F" : ""}` }}
                    onClick={() => handleCoach(1)}
                />
                <img src={head_coach} alt="head_coach" />
            </div>

            <div className={cx("coach-name")}>
                <p>Coach No. {active === 1 ? "1 - Standard seat" : "2 - 4 sleeper cabins"}</p>
            </div>

            <div className={cx("explaination")}>
                <div className={cx("explaination-item")}>
                    <div className={cx("circle", "circle-red")}></div>Reserved
                </div>
                <div className={cx("explaination-item")}>
                    <div className={cx("circle", "circle-green")}></div>Selected
                </div>
                <div className={cx("explaination-item")}>
                    <div className={cx("circle")}>Available</div>
                </div>
            </div>

            {active === 1 ? (
                <div className={cx("seats-standard")}>
                    <table className={cx("table-left")}>
                        <tbody>
                            <tr>
                                {backgroundStandard
                                    .filter((seat, index) => index < 7)
                                    .map((seat) => (
                                        <td
                                            key={seat.number}
                                            style={{
                                                background: `${seat.background}`,

                                                color: `${seat.color}`,
                                                border: `${seat.border}`,
                                            }}
                                            onClick={
                                                seat.background !== "var(--selected)"
                                                    ? () => handleChoose(seat.number)
                                                    : undefined
                                            }
                                        >
                                            {+seat.number + 1}
                                        </td>
                                    ))}
                            </tr>
                            <tr>
                                {backgroundStandard
                                    .filter((seat, index) => index >= 7 && index < 14)
                                    .map((seat) => (
                                        <td
                                            key={seat.number}
                                            style={{
                                                background: `${seat.background}`,

                                                color: `${seat.color}`,
                                                border: `${seat.border}`,
                                            }}
                                            onClick={
                                                seat.background !== "var(--selected)"
                                                    ? () => handleChoose(seat.number)
                                                    : undefined
                                            }
                                        >
                                            {+seat.number + 1}
                                        </td>
                                    ))}
                            </tr>
                            <tr className={cx("space-table")}></tr>
                            <tr>
                                {backgroundStandard
                                    .filter((seat, index) => index >= 14 && index < 21)
                                    .map((seat) => (
                                        <td
                                            key={seat.number}
                                            style={{
                                                background: `${seat.background}`,

                                                color: `${seat.color}`,
                                                border: `${seat.border}`,
                                            }}
                                            onClick={
                                                seat.background !== "var(--selected)"
                                                    ? () => handleChoose(seat.number)
                                                    : undefined
                                            }
                                        >
                                            {+seat.number + 1}
                                        </td>
                                    ))}
                            </tr>
                            <tr>
                                {backgroundStandard
                                    .filter((seat, index) => index >= 21 && index < 28)
                                    .map((seat) => (
                                        <td
                                            key={seat.number}
                                            style={{
                                                background: `${seat.background}`,

                                                color: `${seat.color}`,
                                                border: `${seat.border}`,
                                            }}
                                            onClick={
                                                seat.background !== "var(--selected)"
                                                    ? () => handleChoose(seat.number)
                                                    : undefined
                                            }
                                        >
                                            {+seat.number + 1}
                                        </td>
                                    ))}
                            </tr>
                        </tbody>
                    </table>

                    <table className={cx("table-right")}>
                        <tbody>
                            <tr>
                                {backgroundStandard
                                    .filter((seat, index) => index >= 28 && index < 35)
                                    .map((seat) => (
                                        <td
                                            key={seat.number}
                                            style={{
                                                background: `${seat.background}`,

                                                color: `${seat.color}`,
                                                border: `${seat.border}`,
                                            }}
                                            onClick={
                                                seat.background !== "var(--selected)"
                                                    ? () => handleChoose(seat.number)
                                                    : undefined
                                            }
                                        >
                                            {+seat.number + 1}
                                        </td>
                                    ))}
                            </tr>
                            <tr>
                                {backgroundStandard
                                    .filter((seat, index) => index >= 35 && index < 42)
                                    .map((seat) => (
                                        <td
                                            key={seat.number}
                                            style={{
                                                background: `${seat.background}`,

                                                color: `${seat.color}`,
                                                border: `${seat.border}`,
                                            }}
                                            onClick={
                                                seat.background !== "var(--selected)"
                                                    ? () => handleChoose(seat.number)
                                                    : undefined
                                            }
                                        >
                                            {+seat.number + 1}
                                        </td>
                                    ))}
                            </tr>

                            <tr className={cx("space-table")}></tr>

                            <tr>
                                {backgroundStandard
                                    .filter((seat, index) => index >= 42 && index < 49)
                                    .map((seat) => (
                                        <td
                                            key={seat.number}
                                            style={{
                                                background: `${seat.background}`,

                                                color: `${seat.color}`,
                                                border: `${seat.border}`,
                                            }}
                                            onClick={
                                                seat.background !== "var(--selected)"
                                                    ? () => handleChoose(seat.number)
                                                    : undefined
                                            }
                                        >
                                            {+seat.number + 1}
                                        </td>
                                    ))}
                            </tr>
                            <tr>
                                {backgroundStandard
                                    .filter((seat, index) => index >= 49 && index < 56)
                                    .map((seat) => (
                                        <td
                                            key={seat.number}
                                            style={{
                                                background: `${seat.background}`,

                                                color: `${seat.color}`,
                                                border: `${seat.border}`,
                                            }}
                                            onClick={
                                                seat.background !== "var(--selected)"
                                                    ? () => handleChoose(seat.number)
                                                    : undefined
                                            }
                                        >
                                            {+seat.number + 1}
                                        </td>
                                    ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className={cx("seats-four_cabins")}>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th colSpan={2}>Cabin 1</th>
                                <th colSpan={2}>Cabin 2</th>
                                <th colSpan={2}>Cabin 3</th>
                                <th colSpan={2}>Cabin 4</th>
                                <th colSpan={2}>Cabin 5</th>
                                <th colSpan={2}>Cabin 6</th>
                                <th colSpan={2}>Cabin 7</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th>Level 2</th>
                                {backgroundCabin
                                    .filter((seat) => seat.level === 2)
                                    .map((seat) => (
                                        <td
                                            key={seat.number}
                                            style={{
                                                background: `${seat.background}`,

                                                color: `${seat.color}`,
                                                border: `${seat.border}`,
                                            }}
                                            onClick={
                                                seat.background !== "var(--selected)"
                                                    ? () => handleChoose1(seat.number)
                                                    : undefined
                                            }
                                        >
                                            {+seat.number + 1}
                                        </td>
                                    ))}
                            </tr>
                            <tr>
                                <th>Level 2</th>
                                {backgroundCabin
                                    .filter((seat) => seat.level === 1)
                                    .map((seat) => (
                                        <td
                                            key={seat.number}
                                            style={{
                                                background: `${seat.background}`,

                                                color: `${seat.color}`,
                                                border: `${seat.border}`,
                                            }}
                                            onClick={
                                                seat.background !== "var(--selected)"
                                                    ? () => handleChoose1(seat.number)
                                                    : undefined
                                            }
                                        >
                                            {+seat.number + 1}
                                        </td>
                                    ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            <div className={cx("confirm-box-wrapper")}>
                <div className={cx("confirm-box")}>
                    Selected <span className={cx("quantity")}>{countTicket}</span> tickets &nbsp;
                    &nbsp; &nbsp; &nbsp; Subtotal: &nbsp;
                    <span className={cx("subtotal")}>
                        {subtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </span>{" "}
                    VND
                </div>
                <button className={cx("btn-continue")} onClick={handleContinue}>
                    Continue
                </button>
            </div>

            <FooterMini />
        </div>
    );
}

export default Order;
