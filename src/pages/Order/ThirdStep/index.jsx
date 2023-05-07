import classNames from "classnames/bind";

import StepChain from "~/components/Layout/components/StepChain";
import styles from "./ThirdStep.module.scss";
import BoxMessage from "~/components/Layout/components/BoxMessage";

const cx = classNames.bind(styles);

function ThirdStep() {
    return (
        <div>
            <StepChain route="/order/secondstep" done1={true} done2={true} active3={true} />
            <div className={cx("message")}>
                <BoxMessage
                    text="Please fill fully, exactly all the information about the passenger(s) as in your paper, including: Full Name, ID Number or Passport Number, Day of Birth. For the safety, transparency during buying ticket process, this information will be checked by the ticket inspector before getting aboard according to Travel Bliss's regulations."
                    bgblue={true}
                    clblue={true}
                    icblue={true}
                />
            </div>
        </div>
    );
}

export default ThirdStep;
