import classNames from "classnames/bind";
import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import AuthenLayout from "~/components/Layout/AuthenLayout";
import styles from "./ForgetPassword.module.scss";
import BoxMessage from "~/components/BoxMessage";

const cx = classNames.bind(styles);

function ForgetPassword() {
    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Please fill out your email"),
        }),
        onSubmit: (values, actions) => {
            // actions.setSubmitting(false);
        },
    });
    const [email, setEmail] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    //get user email from local storage then compair to the email client submit
    const handleSaveClick = () => {
        localStorage.setItem("userEmail", email);
    };

    return (
        <AuthenLayout img="https://thesmartlocal.com/vietnam/wp-content/uploads/2020/09/6-danang-dong-hoi-ride-2.jpg">
            <div className={cx("inner")}>
                <div className={cx("title")}>
                    <h2>Forgot Password</h2>
                </div>
                <div className={cx("guide")}>
                    <BoxMessage
                        text={"Please enter your email address to search for your account."}
                    />
                    <div>
                        <form>
                            {/* onSubmit={handleSubmit} */}
                            <label className={cx("email-content")} htmlFor="email">
                                Email
                            </label>
                            <div>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    className={cx(styles.inputFullwidth, "border")}
                                    placeholder="example: abc@xyzmail.com"
                                    onBlur={formik.handleBlur}
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>
                            <div className={cx("button")}>
                                <Link to="/">
                                    <button className={cx("btn-left")}>Cancel</button>
                                </Link>
                                {email ? (
                                    <Link to="/verificationPassword">
                                        <button
                                            onClick={handleSaveClick}
                                            className={cx("btn-right")}
                                        >
                                            Search
                                        </button>
                                    </Link>
                                ) : (
                                    <button onClick={handleSaveClick} className={cx("btn-right")}>
                                        Search
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

export default ForgetPassword;
