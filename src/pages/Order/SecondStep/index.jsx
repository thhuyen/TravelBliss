import classNames from "classnames/bind";

import { Link } from "react-router-dom";

import Header from "~/components/Layout/components/Header";
import Banner from "~/components/Layout/components/Banner";
import StepChain from "~/components/Layout/components/StepChain";
import styles from "./SecondStep.module.scss";
import InforTicker from "~/components/Layout/components/InforTicker";

const cx = classNames.bind(styles);

function Order() {
    return (
        <div>
            <Header />
            <div className={cx("space")}></div>
            <StepChain route="/order/firststep" done1={true} active2={true} />
            <InforTicker />
        </div>
    );
}

export default Order;
