import classNames from "classnames/bind";
import { useEffect, useState, useMemo, useRef } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import StepChain from "~/components/Layout/components/StepChain";
import styles from "./FourthStep.module.scss";
import BoxMessage from "~/components/Layout/components/BoxMessage";
import FooterMini from "~/components/Layout/components/FooterMini";
import Header from "~/components/Layout/components/Header";
import BookingSummary from "~/components/Layout/components/BookingSummary";
import PaymentMethods from "~/assets/imgs/grouppayment.png";

const cx = classNames.bind(styles);

function FourthStep() {
    const { idUser } = useParams();
    const route = `/order/thirdstep/confirmation/${idUser}`;
    const nextRoute = `/order/fourthstep/${idUser}`;

    const navigate = useNavigate();

    const seats = useMemo(() => {
        return JSON.parse(sessionStorage.getItem("selectedSeat"));
    }, []);

    const tickets = useMemo(() => JSON.parse(sessionStorage.getItem("train")), []);

    const paymentSuccess = () => {
        navigate("/order/success", { replace: true });
    };
    return (
        <div>
            <Header />
            <div className={cx("space")}></div>
            <StepChain route={route} done1={true} done2={true} done3={true} active4={true} />

            <div className={cx("wrapper")}>
                <div className={cx("inner-left")}>
                    <p className={cx("title")}>Payment methods</p>
                    <p className={cx("title2")}>
                        Choose one payment method below to complete your purchase.
                    </p>
                    <img
                        style={{ cursor: "pointer" }}
                        src={PaymentMethods}
                        alt="payment-method"
                        onClick={paymentSuccess}
                    ></img>
                </div>

                <div className={cx("inner-right")}>
                    <div className={cx("wrapper-box")}>
                        <BookingSummary tickets={tickets} seats={seats} nextRoute={nextRoute} />
                    </div>
                </div>
            </div>

            <FooterMini />
        </div>
    );
}

export default FourthStep;
