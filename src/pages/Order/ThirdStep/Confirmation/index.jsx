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
                <div className={cx("inner-left")}></div>

                <div className={cx("inner-right")}>
                    {/* <BookingSummary tickets={tickets} seats={seats} /> */}
                </div>
            </div>

            <FooterMini />
        </div>
    );
}

export default Confirmation;
