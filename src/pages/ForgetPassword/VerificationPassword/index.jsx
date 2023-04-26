import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AuthenLayout from "~/components/Layout/AuthenLayout";
import styles from "./VerificationPassword.module.scss";
import BoxMessage from "~/components/Layout/components/BoxMessage";

const cx = classNames.bind(styles);

function VerificationPassword() {
    let [count, setCount] = useState(10);
    let [codeOtp, setCodeOtp] = useState();
    let [countOTP, setCountOTP] = useState(90);
    const [OTP, setOTP] = useState(() => Math.floor(100000 + Math.random() * 900000).toString());

    const handleResend = (e) => {
        e.preventDefault();
        if (count > 0) {
            setCount(count - 1);
            setCodeOtp((codeOtp = ""));
            setCountOTP(90);
            setOTP(Math.floor(100000 + Math.random() * 900000).toString());
        }
    };

    const handlErrorCode = () => {
        alert("Your OTP is not correct");
    };
    const handleCodeChange = (e) => {
        setCodeOtp(e.target.value);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            if (countOTP > 0) {
                setCountOTP((count) => Math.max(count - 1, 0));
            }
        }, 1000);
        console.log(OTP);

        // clean up
        return () => clearInterval(interval);
    }, [OTP]);

    return (
        <AuthenLayout img="https://thesmartlocal.com/vietnam/wp-content/uploads/2020/09/6-danang-dong-hoi-ride-2.jpg">
            <div className={cx("inner")}>
                <div className={cx("title")}>
                    <h2>Verification</h2>
                </div>
                <div className={cx("guide")}>
                    <BoxMessage
                        text={
                            "Please check your e-mail account for the verification code we just sent you and enter that code in the box below. Your code is 6 numbers long."
                        }
                    />
                    <div>
                        <form>
                            <label className={cx("")} htmlFor="code">
                                Verification code
                            </label>
                            <div>
                                <input
                                    id="code"
                                    type="number"
                                    name="code"
                                    className={cx(styles.inputThirdwidth, "border")}
                                    placeholder="******"
                                    value={codeOtp || ""}
                                    onChange={handleCodeChange}
                                />
                                <button className={cx("resend")} onClick={handleResend}>
                                    Resend ({count})
                                </button>
                            </div>
                            <p className={cx("otp")}>
                                OTP valid (<span>{countOTP}</span>s)
                            </p>
                            <div className={cx("button")}>
                                <Link to="/">
                                    <button className={cx("btn-left")}>Cancel</button>
                                </Link>
                                {codeOtp === OTP ? (
                                    <Link to="/forgot/newpassword">
                                        <button className={cx("btn-right")}>Continue</button>
                                    </Link>
                                ) : (
                                    <button onClick={handlErrorCode} className={cx("btn-right")}>
                                        Continue
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenLayout>
    );
}

export default VerificationPassword;
