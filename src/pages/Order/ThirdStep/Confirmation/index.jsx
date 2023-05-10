import classNames from "classnames/bind";
import { useEffect, useState, useMemo, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import StepChain from "~/components/Layout/components/StepChain";
import styles from "./Confirmation.module.scss";
import BoxMessage from "~/components/Layout/components/BoxMessage";
import FooterMini from "~/components/Layout/components/FooterMini";
import Header from "~/components/Layout/components/Header";
import BookingSummary from "~/components/Layout/components/BookingSummary";

const cx = classNames.bind(styles);

function Confirmation() {
    const { idUser } = useParams();
    const route = `/order/thirdstep/passengerinfo/${idUser}`;
    const nextRoute = `/order/fourthstep`;

    const seats = useMemo(() => {
        return JSON.parse(sessionStorage.getItem("selectedSeat"));
    }, []);

    const tickets = useMemo(() => JSON.parse(sessionStorage.getItem("train")), []);

    return (
        <div>
            <Header />
            <div className={cx("space")}></div>
            <StepChain route={route} done1={true} done2={true} active3={true} />

            <div className={cx("message")}>
                <BoxMessage
                    text="Please check Passenger(s) and Ticket(s) Information carefully. Notice that once the payment is done, you cannot change these information. In case there is any mistake, you need to contact our Support Department to receive further guidance in order to change your information."
                    bgblue={true}
                    clblue={true}
                    icblue={true}
                />
            </div>

            <div className={cx("wrapper")}>
                <div className={cx("inner-left")}>
                    <div className={cx("ticket")}>
                        <p className={cx("title")}>Passenger Details</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Passenger Type:</td>
                                    <td>Adult</td>
                                    <td>Fullname:</td>
                                    <td>Tran Anh</td>
                                </tr>
                                <tr>
                                    <td>Id Number:</td>
                                    <td>076528000011</td>
                                    <td>Day of Birth:</td>
                                    <td>16/11/1998</td>
                                </tr>
                            </tbody>
                        </table>

                        <p className={cx("title")}>Ticket Information:</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Departure Time:</td>
                                    <td>19:20, 10/05/2023</td>
                                    <td>Arrival Time:</td>
                                    <td>5:40, 12/05/2023 </td>
                                </tr>
                                <tr>
                                    <td>Train Name:</td>
                                    <td>SE03</td>
                                    <td>Coach:</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Class:</td>
                                    <td>Standard Seat</td>
                                    <td>Seat:</td>
                                    <td>26</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={cx("inner-right")}>
                    <div className={cx("wrapper-box")}>
                        <BookingSummary
                            tickets={tickets}
                            seats={seats}
                            title="Checkout"
                            nextRoute={nextRoute}
                        />
                    </div>
                </div>
            </div>

            <FooterMini />
        </div>
    );
}

export default Confirmation;
