import classNames from "classnames/bind";
import { useEffect, useState, useMemo } from "react";

import StepChain from "~/components/Layout/components/StepChain";
import styles from "./ThirdStep.module.scss";
import BoxMessage from "~/components/Layout/components/BoxMessage";
import FooterMini from "~/components/Layout/components/FooterMini";
import Header from "~/components/Layout/components/Header";
import BookingSummary from "~/components/Layout/components/BookingSummary";

const cx = classNames.bind(styles);

function ThirdStep() {
    // const [seats, setSeats] = useState([]);

    const seats = useMemo(() => {
        return JSON.parse(sessionStorage.getItem("selectedSeat"));
    }, []);

    const tickets = useMemo(() => JSON.parse(sessionStorage.getItem("train")), []);
    console.log(tickets);
    return (
        <div>
            <Header />
            <div className={cx("space")}></div>
            <StepChain route="/order/secondstep" done1={true} done2={true} active3={true} />

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
                    <input id="autofill" type="checkbox" className={cx("autofill-checkbox")} />
                    <label htmlFor="autofill">This ticket is for me</label>
                    <br />
                    <input
                        type="text"
                        placeholder="012345678"
                        className={cx("phone-input")}
                    ></input>

                    <h3 className={cx("title")}>Passenger(s) information</h3>

                    {seats.map((seat) => (
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
                                            <input type="date" />
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
                                            <input type="text" placeholder="076528000011" />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Fullname</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <input
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
                    <BookingSummary tickets={tickets} seats={seats} />
                </div>
            </div>

            <FooterMini />
        </div>
    );
}

export default ThirdStep;
