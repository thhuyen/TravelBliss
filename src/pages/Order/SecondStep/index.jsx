import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import Header from "~/components/Layout/components/Header";
import StepChain from "~/components/Layout/components/StepChain";
import styles from "./SecondStep.module.scss";
import InforTicker from "~/components/Layout/components/InforTicker";
import head_coach from "~/assets/imgs/head_coach.png";
import coach from "~/assets/imgs/coach.png";

const cx = classNames.bind(styles);

function Order() {
    const [active, setActive] = useState(1);
    const [train, setTrain] = useState({});
    // get value from first step
    useEffect(() => {
        const train = JSON.parse(sessionStorage.getItem("train"));
        setTrain(train);
    }, []);

    const handleCoach = (number) => {
        setActive(number);
    };
    return (
        <div>
            <Header />
            <div className={cx("space")}></div>
            <StepChain route="/order/firststep" done1={true} active2={true} />
            <div className={cx("ticket")}>
                <InforTicker
                    departureTime={train.departureTime}
                    arrivalTime={train.arrivalTime}
                    departureDate={train.departureTime}
                    arrivalDate={train.arrivalDate}
                    departurePlace={train.departurePlace}
                    arrivalPlace={train.arrivalPlace}
                    seats={train.seats}
                    train={train.train}
                />
            </div>

            <div className={cx("train")}>
                <img className={cx("body-train", "full")} src={coach} alt="coach" />
                <img className={cx("body-train", "full")} src={coach} alt="coach" />
                <img
                    className={cx("body-train")}
                    src={coach}
                    alt="coach"
                    style={{ background: `${active === 2 ? "#5DAA8F" : ""}` }}
                    onClick={() => handleCoach(2)}
                />
                <img
                    className={cx("body-train")}
                    src={coach}
                    alt="coach"
                    style={{ background: `${active === 1 ? "#5DAA8F" : ""}` }}
                    onClick={() => handleCoach(1)}
                />
                <img src={head_coach} alt="head_coach" />
            </div>

            <div className={cx("coach-name")}>
                <p>Coach No. {active === 1 ? "1 - 4 sleeper cabins" : "2 - Standard seat"}</p>
            </div>
        </div>
    );
}

export default Order;
