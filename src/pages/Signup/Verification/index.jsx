import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./Vertification.module.scss";
import AuthenLayout from "~/components/Layout/AuthenLayout";
import BoxMessage from "~/components/BoxMessage";

const cx = classNames.bind(styles);

function Vertification() {
    const [count, setCount] = useState(10);
    const [countOTP, setCountOTP] = useState(90);
    const [code, setCode] = useState("");
    const [valid, setValid] = useState(true);
    const [OTP, setOTP] = useState(() => Math.floor(100000 + Math.random() * 900000).toString());

    useEffect(() => {
        const interval = setInterval(() => {
            if (count > 0) {
                setCount((count) => count - 1);
            }
            if (countOTP > 0) {
                setCountOTP((count) => count - 1);
            }
        }, 1000);

        // clean up
        return () => clearInterval(interval);
    }, [count, countOTP]);

    // set time out valid OTP
    useEffect(() => {
        const timeoutOTP = setTimeout(() => {
            setValid(false);
        }, 90000);

        console.log(OTP);

        // clean up
        return () => clearInterval(timeoutOTP);
    }, [OTP]);

    // events
    const handleResend = () => {
        if (count === 0) {
            setCount(10);
            setValid(true);
            setCountOTP(90);
            setOTP(Math.floor(100000 + Math.random() * 900000).toString());
        }
    };

    return (
        <AuthenLayout img="https://images.unsplash.com/photo-1588776873786-a51f317c3dbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80">
            <div className={cx("inner")}>
                <div className={cx("title")}>
                    <h2>Verification</h2>
                </div>
                <div className={cx("sign-in-button")}></div>
                <BoxMessage
                    text={
                        "Please check your e-mail account for the verification code we just sent you and enter that code in the box below."
                    }
                />

                <p>Verification code</p>
                <div className={cx("box-code")}>
                    <input
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        type="text"
                        className={cx(styles.inputCode, "border")}
                        placeholder="123456"
                    />

                    <button className={cx("btn-resend")} onClick={handleResend}>
                        Resend (<span>{count}</span>)
                    </button>
                </div>

                <p className={cx("otp")}>
                    OTP valid (<span>{countOTP}</span>s)
                </p>

                {code === OTP && valid ? (
                    <Link to="/congrats">
                        <button className={cx(styles.btnSubmit, "btnActive")}>SUBMIT</button>
                    </Link>
                ) : (
                    <button className={cx(styles.btnSubmit, "btnActive")}>SUBMIT</button>
                )}
            </div>
        </AuthenLayout>
    );
}

export default Vertification;
