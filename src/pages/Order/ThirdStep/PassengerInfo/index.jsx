import classNames from "classnames/bind";
import { useEffect, useState, useMemo, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import StepChain from "~/components/Layout/components/StepChain";
import styles from "./PassengerInfo.module.scss";
import BoxMessage from "~/components/Layout/components/BoxMessage";
import FooterMini from "~/components/Layout/components/FooterMini";
import Header from "~/components/Layout/components/Header";
import BookingSummary from "~/components/Layout/components/BookingSummary";

const cx = classNames.bind(styles);

function PassengerInfo() {
    const { idUser } = useParams();
    const route = `/order/secondstep/${idUser}`;
    const nextRoute = `/order/thirdstep/Confirmation/${idUser}`;

    const [users, setUsers] = useState([]);
    const [checked, setChecked] = useState(false);
    const [email, setEmail] = useState("");
    const [cccd, setCCCD] = useState("");
    const [fullname, setFullname] = useState("");
    const [birthday, setBirthday] = useState(new Date());
    const [autofill, setAutoFill] = useState({});

    const seats = useMemo(() => {
        return JSON.parse(sessionStorage.getItem("selectedSeat"));
    }, []);

    const tickets = useMemo(() => JSON.parse(sessionStorage.getItem("train")), []);
    const accRef = useRef();

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/users");
        accRef.current = response.data.filter((acc) => acc.idUser === +idUser)[0];
        setUsers(response.data);
    };
    useEffect(() => {
        loadData();
    }, []);

    const handleAutoFill = () => {
        setChecked((prev) => (prev ? false : true));

        if (!checked) {
            setAutoFill((prev) => {
                function formatDate(input) {
                    var datePart = input.match(/\d+/g),
                        year = datePart[0], // get only two digits
                        month = datePart[1],
                        day = datePart[2];

                    return year + "-" + month + "-" + day;
                }

                return {
                    ...prev,
                    email: accRef.current.Email,
                    fullname: accRef.current.Fullname,
                    cccd: accRef.current.Identity_number,
                    birthday: formatDate(accRef.current.Birthday.slice(0, 10)),
                };
            });
        } else {
            setAutoFill({});
        }
    };

    return (
        <div>
            <Header />
            <div className={cx("space")}></div>
            <StepChain route={route} done1={true} done2={true} active3={true} />

            <div className={cx("message")}>
                <BoxMessage
                    text="Please fill fully, exactly all the information about the passenger(s) as in your paper, including: Full Name, ID Number or Passport Number, Day of Birth. For the safety, transparency during buying ticket process, this information will be checked by the ticket inspector before getting aboard according to Travel Bliss's regulations."
                    bgblue={true}
                    clblue={true}
                    icblue={true}
                />
            </div>

            <div className={cx("wrapper")}>
                <div className={cx("inner-left")}>
                    <p>
                        Please provide a valid email address where we will send your electronic
                        tickets.
                    </p>
                    <input
                        onChange={handleAutoFill}
                        id="autofill"
                        type="checkbox"
                        className={cx("autofill-checkbox")}
                    />
                    <label htmlFor="autofill">This ticket is for me</label>
                    <br />
                    <input
                        value={checked ? autofill.email : email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="vananh@gmail.com"
                        className={cx("phone-input")}
                    ></input>

                    <h3 className={cx("title")}>Passenger(s) information</h3>

                    {seats.map((seat, index) => (
                        <div className={cx("infor-box")} key={seat.seatNumber}>
                            <div className={cx("seat")}>
                                Coach No.{seat.coach}, Seat No.{+seat.seatNumber + 1}
                            </div>

                            <table>
                                <tbody>
                                    <tr>
                                        <td>Passenger Type</td>
                                        <td>Day of birth</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <select>
                                                <option defaultValue="adult">Adult</option>
                                                <option value="children">Children</option>
                                            </select>
                                        </td>
                                        <td>
                                            <input
                                                value={
                                                    index === 0 && checked
                                                        ? autofill.birthday
                                                        : birthday.getFullYear().toString() +
                                                          "-" +
                                                          (birthday.getMonth() + 1)
                                                              .toString()
                                                              .padStart(2, 0) +
                                                          "-" +
                                                          birthday
                                                              .getDate()
                                                              .toString()
                                                              .padStart(2, 0)
                                                }
                                                onChange={(e) =>
                                                    setBirthday(new Date(e.target.value))
                                                }
                                                type="date"
                                            />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Identification number</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <select>
                                                <option defaultValue="idnumber">ID number</option>
                                            </select>
                                        </td>
                                        <td>
                                            <input
                                                value={
                                                    index === 0 && checked ? autofill.cccd : cccd
                                                }
                                                onChange={(e) => setCCCD(e.target.value)}
                                                type="text"
                                                placeholder="076528000011"
                                            />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Fullname</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <input
                                                value={
                                                    index === 0 && checked
                                                        ? autofill.fullname
                                                        : fullname
                                                }
                                                onChange={(e) => setFullname(e.target.value)}
                                                className={cx("fullname")}
                                                type="text"
                                                placeholder="Tran Anh"
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>

                <div className={cx("inner-right")}>
                    <div className={cx("wrapper_box")}>
                        <BookingSummary
                            tickets={tickets}
                            seats={seats}
                            idUser={idUser}
                            nextRoute={nextRoute}
                            title="Continue"
                        />
                    </div>
                </div>
            </div>

            <FooterMini />
        </div>
    );
}

export default PassengerInfo;
