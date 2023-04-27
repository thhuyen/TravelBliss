import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

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
            <InforTicker
                departureTime="6:10"
                arrivalTime="17:58"
                departureDate="May 11"
                arrivalDate="May 12"
                departurePlace="Hanoi"
                arrivalPlace="Saigon"
                seats="231"
                train="SE07"
                isButton={true}
            />
            <InforTicker
                departureTime="15:30"
                arrivalTime="4:25"
                departureDate="May 11"
                arrivalDate="May 13"
                departurePlace="Hanoi"
                arrivalPlace="Saigon"
                seats="187"
                train="SE05"
                isButton={true}
            />
            <InforTicker
                departureTime="19:20"
                arrivalTime="5:40"
                departureDate="May 11"
                arrivalDate="May 13"
                departurePlace="Hanoi"
                arrivalPlace="Saigon"
                seats="51"
                train="SE03"
                isButton={true}
            />
            <InforTicker
                departureTime="22:00"
                arrivalTime="6:30"
                departureDate="May 11"
                arrivalDate="May 13"
                departurePlace="Hanoi"
                arrivalPlace="Saigon"
                seats="154"
                train="SE01"
                isButton={true}
            />

            <div className={cx("space")}></div>
            <FooterMini />
        </div>
    );
}

export default FirstStep;
