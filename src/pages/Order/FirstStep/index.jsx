import classNames from "classnames/bind";

import { Link } from "react-router-dom";

import Header from "~/components/Layout/components/Header";
import Banner from "~/components/Layout/components/Banner";
import StepChain from "~/components/Layout/components/StepChain";
import styles from "./FirstStep.module.scss";
import InforTicker from "~/components/Layout/components/InforTicker";
import FooterMini from "~/components/Layout/components/FooterMini";

const cx = classNames.bind(styles);

function FirstStep() {
    return (
        <div>
            <Header />
            <Banner />
            <StepChain route="/home" active1={true} />
            <InforTicker />
            <InforTicker />
            <InforTicker />
            <InforTicker />
            <InforTicker />

            <FooterMini />
        </div>
    );
}

export default FirstStep;
