import classNames from "classnames/bind";
// import { Formik, Form, Field, useFormik, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import styles from "./Vertification.module.scss";
import AuthenLayout from "~/components/Layout/AuthenLayout";
import { useState, useEffect, useMemo } from "react";

const cx = classNames.bind(styles);

function Vertification() {
    const randomCode = () => Math.floor(100000 + Math.random() * 900000);

    const [count, setCount] = useState(10);
    const [countOTP, setCountOTP] = useState(10);
    const [code, setCode] = useState("");
    const [OTP, setOTP] = useState(randomCode);

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

    useEffect(() => {
        const timeoutOTP = setTimeout(() => {
            setOTP(undefined);
        }, 10000);

        // clean up
        return () => clearInterval(timeoutOTP);
    }, [OTP]);

    // events
    const handleResend = () => {
        if (count === 0) {
            setCount(10);
            setCountOTP(90);
            setOTP(randomCode);
        }
    };

    return (
        <AuthenLayout img="https://images.unsplash.com/photo-1588776873786-a51f317c3dbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80">
            <div className={cx("inner")}>
                <div className={cx("title")}>
                    <h2>Verification</h2>
                </div>
                <div className={cx("guide-box")}>
                    <FontAwesomeIcon icon={faCircleInfo} className={cx("icon-infor")} />
                    <span className={cx("guide-text")}>
                        Please check your e-mail account for the verification code we just sent you
                        and enter that code in the box below.
                    </span>
                </div>

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

                {code === OTP ? (
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
