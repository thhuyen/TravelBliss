import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import axios from "axios";

import Header from "~/components/Layout/components/Header";
import StepChain from "~/components/Layout/components/StepChain";
import styles from "./SecondStep.module.scss";
import InforTicker from "~/components/Layout/components/InforTicker";
import head_coach from "~/assets/imgs/head_coach.png";
import coach from "~/assets/imgs/coach.png";
import FooterMini from "~/components/Layout/components/FooterMini";

const cx = classNames.bind(styles);

function Order() {
    const [standardSeats, setStandardSeats] = useState([]);
    const [four_cabins, setFourCabins] = useState([]);
    const [active, setActive] = useState(1);
    const [train, setTrain] = useState({});
    // get value from first step
    useEffect(() => {
        const train = JSON.parse(sessionStorage.getItem("train"));
        setTrain(train);
    }, []);

    const handleCoach = (number) => {
        setActive(number);
    };

    const loadData = async () => {
        const standardSeats = await axios.get("http://localhost:5000/api/seats/standard");
        setStandardSeats(standardSeats.data);

        const four_cabins = await axios.get("http://localhost:5000/api/seats/four_cabins");
        setFourCabins(four_cabins.data);
    };
    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <Header />
            <div className={cx("space")}></div>
            <StepChain route="/order/firststep" done1={true} active2={true} />
            <div className={cx("ticket")}>
                <InforTicker
                    departureTime={train.departureTime}
                    arrivalTime={train.arrivalTime}
                    departureDate={train.departureTime}
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
                    <div className={cx("circle", "circle-red")}></div> Selected
                </div>
                <div className={cx("explaination-item")}>
                    <div className={cx("circle", "circle-green")}></div> Available
                </div>
                <div className={cx("explaination-item")}>
                    <div className={cx("circle")}></div> Reserved
                </div>
            </div>

            {active === 1 ? (
                <div className={cx("seats-standard")}>
                    <table className={cx("table-left")}>
                        <tbody>
                            <tr>
                                {standardSeats
                                    .filter((seat) => seat.SeatNumber <= 7)
                                    .map((seat) => (
                                        <td
                                            key={seat.SeatId}
                                            style={{
                                                background: `${
                                                    seat.Status === 1 ? "var(--selected)" : "white"
                                                }`,
                                                color: `${seat.Status === 1 ? "white" : "black"}`,
                                                border: `${
                                                    seat.Status === 1
                                                        ? "none"
                                                        : "1px solid var(--grey-300)"
                                                }`,
                                            }}
                                        >
                                            {seat.SeatNumber}
                                        </td>
                                    ))}
                            </tr>
                            <tr>
                                {standardSeats
                                    .filter(
                                        (seat) => +seat.SeatNumber >= 8 && +seat.SeatNumber <= 14,
                                    )
                                    .map((seat) => (
                                        <td
                                            key={seat.SeatId}
                                            style={{
                                                background: `${
                                                    seat.Status === 1 ? "var(--selected)" : "white"
                                                }`,
                                                color: `${seat.Status === 1 ? "white" : "black"}`,
                                                border: `${
                                                    seat.Status === 1
                                                        ? "none"
                                                        : "1px solid var(--grey-300)"
                                                }`,
                                            }}
                                        >
                                            {seat.SeatNumber}
                                        </td>
                                    ))}
                            </tr>
                            <tr className={cx("space-table")}></tr>
                            <tr>
                                {standardSeats
                                    .filter(
                                        (seat) => +seat.SeatNumber > 14 && +seat.SeatNumber <= 21,
                                    )
                                    .map((seat) => (
                                        <td
                                            key={seat.SeatNumber}
                                            style={{
                                                background: `${
                                                    seat.Status === 1 ? "var(--selected)" : "white"
                                                }`,
                                                color: `${seat.Status === 1 ? "white" : "black"}`,
                                                border: `${
                                                    seat.Status === 1
                                                        ? "none"
                                                        : "1px solid var(--grey-300)"
                                                }`,
                                            }}
                                        >
                                            {seat.SeatNumber}
                                        </td>
                                    ))}
                            </tr>
                            <tr>
                                {standardSeats
                                    .filter(
                                        (seat) => +seat.SeatNumber > 21 && +seat.SeatNumber <= 28,
                                    )
                                    .map((seat) => (
                                        <td
                                            key={seat.SeatNumber}
                                            style={{
                                                background: `${
                                                    seat.Status === 1 ? "var(--selected)" : "white"
                                                }`,
                                                color: `${seat.Status === 1 ? "white" : "black"}`,
                                                border: `${
                                                    seat.Status === 1
                                                        ? "none"
                                                        : "1px solid var(--grey-300)"
                                                }`,
                                            }}
                                        >
                                            {seat.SeatNumber}
                                        </td>
                                    ))}
                            </tr>
                        </tbody>
                    </table>

                    <table className={cx("table-right")}>
                        <tbody>
                            <tr>
                                {standardSeats
                                    .filter(
                                        (seat) => +seat.SeatNumber > 28 && +seat.SeatNumber <= 35,
                                    )
                                    .map((seat) => (
                                        <td
                                            key={seat.SeatNumber}
                                            style={{
                                                background: `${
                                                    seat.Status === 1 ? "var(--selected)" : "white"
                                                }`,
                                                color: `${seat.Status === 1 ? "white" : "black"}`,
                                                border: `${
                                                    seat.Status === 1
                                                        ? "none"
                                                        : "1px solid var(--grey-300)"
                                                }`,
                                            }}
                                        >
                                            {seat.SeatNumber}
                                        </td>
                                    ))}
                            </tr>
                            <tr>
                                {standardSeats
                                    .filter(
                                        (seat) => +seat.SeatNumber > 35 && +seat.SeatNumber <= 42,
                                    )
                                    .map((seat) => (
                                        <td
                                            key={seat.SeatNumber}
                                            style={{
                                                background: `${
                                                    seat.Status === 1 ? "var(--selected)" : "white"
                                                }`,
                                                color: `${seat.Status === 1 ? "white" : "black"}`,
                                                border: `${
                                                    seat.Status === 1
                                                        ? "none"
                                                        : "1px solid var(--grey-300)"
                                                }`,
                                            }}
                                        >
                                            {seat.SeatNumber}
                                        </td>
                                    ))}
                            </tr>

                            <tr className={cx("space-table")}></tr>

                            <tr>
                                {standardSeats
                                    .filter(
                                        (seat) => +seat.SeatNumber > 42 && +seat.SeatNumber <= 49,
                                    )
                                    .map((seat) => (
                                        <td
                                            key={seat.SeatNumber}
                                            style={{
                                                background: `${
                                                    seat.Status === 1 ? "var(--selected)" : "white"
                                                }`,
                                                color: `${seat.Status === 1 ? "white" : "black"}`,
                                                border: `${
                                                    seat.Status === 1
                                                        ? "none"
                                                        : "1px solid var(--grey-300)"
                                                }`,
                                            }}
                                        >
                                            {seat.SeatNumber}
                                        </td>
                                    ))}
                            </tr>
                            <tr>
                                {standardSeats
                                    .filter(
                                        (seat) => +seat.SeatNumber > 49 && +seat.SeatNumber <= 56,
                                    )
                                    .map((seat) => (
                                        <td
                                            key={seat.SeatNumber}
                                            style={{
                                                background: `${
                                                    seat.Status === 1 ? "var(--selected)" : "white"
                                                }`,
                                                color: `${seat.Status === 1 ? "white" : "black"}`,
                                                border: `${
                                                    seat.Status === 1
                                                        ? "none"
                                                        : "1px solid var(--grey-300)"
                                                }`,
                                            }}
                                        >
                                            {seat.SeatNumber}
                                        </td>
                                    ))}
                            </tr>
                        </tbody>
                    </table>

                    <div className={cx("confirm-box")}>
                        Selected <span className={cx("quantity")}>2</span> tickets &nbsp; &nbsp;
                        &nbsp; &nbsp; Subtotal: &nbsp;
                        <span className={cx("subtotal")}>2.000.000</span> VND
                    </div>

                    <button className={cx("btn-continue")}>Continue</button>
                </div>
            ) : (
                <div className={cx("seats-four_cabins")}>
                    <table>
                        <tr>
                            <td colSpan={2}>Cabin 1</td>
                        </tr>
                        <tr>
                            <td>Level 2</td>
                            {four_cabins
                                .filter((seat) => seat.Level === 1)
                                .map((seat) => (
                                    <td key={seat.SeatId}>{seat.SeatNumber}</td>
                                ))}
                        </tr>
                        <tr>
                            <td>Level 1</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>

                    <div className={cx("confirm-box")}>
                        Selected <span className={cx("quantity")}>2</span> tickets &nbsp; &nbsp;
                        &nbsp; &nbsp; Subtotal: &nbsp;
                        <span className={cx("subtotal")}>2.000.000</span> VND
                    </div>

                    <button className={cx("btn-continue")}>Continue</button>
                </div>
            )}

            <FooterMini />
        </div>
    );
}

export default Order;
