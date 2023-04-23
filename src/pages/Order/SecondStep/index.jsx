import classNames from "classnames/bind";

import { Link } from "react-router-dom";

import Header from "~/components/Layout/components/Header";
import Banner from "~/components/Layout/components/Banner";
import StepChain from "~/components/Layout/components/StepChain";
import styles from "./SecondStep.module.scss";

const cx = classNames.bind(styles);

function Order() {
    return (
        <div>
            <Header />
            <StepChain route="/home" done1={true} done2={true} />
            <div>12312312</div>
        </div>
    );
}

export default Order;
