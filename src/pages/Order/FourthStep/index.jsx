import classNames from "classnames/bind";
import { useEffect, useState, useMemo, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import StepChain from "~/components/Layout/components/StepChain";
import styles from "./FourthStep.module.scss";
import BoxMessage from "~/components/Layout/components/BoxMessage";
import FooterMini from "~/components/Layout/components/FooterMini";
import Header from "~/components/Layout/components/Header";
import BookingSummary from "~/components/Layout/components/BookingSummary";

const cx = classNames.bind(styles);

function FourthStep() {
    const { idUser } = useParams();
    const route = `/order/thirdstep/confirmation/${idUser}`;

    return (
        <div>
            <Header />
            <div className={cx("space")}></div>
            <StepChain route={route} done1={true} done2={true} done3={true} active4={true} />

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

export default FourthStep;
