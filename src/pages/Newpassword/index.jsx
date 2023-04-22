import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import AuthenLayout from "~/components/Layout/AuthenLayout";
import styles from "./Newpassword.module.scss";
// import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function Newpassword() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object().shape({
            password: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .required("Please enter your password")
                .matches(
                    "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd@$!%*#?&]{8,}$",
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number",
                ),
            confirmPassword: Yup.string().required("Please confirm your password"),
        }),
    });

    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleconfirmPasswordChange = (e) => {
        setconfirmPassword(e.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage("Your passwords do not match. Please try again!");
        } else {
            navigate("/successnewpassword", { replace: true });
        }
    };
    return (
        <AuthenLayout img="https://thesmartlocal.com/vietnam/wp-content/uploads/2020/09/6-danang-dong-hoi-ride-2.jpg">
            <div className={cx("inner")}>
                <div className={cx("title")}>
                    <h2>Choose a new password</h2>
                </div>
                <div className={cx("guide")}>
                    <div className={cx("guide-box")}>
                        <FontAwesomeIcon icon={faCircleInfo} className={cx("icon-infor")} />
                        <span className={cx("guide-text")}>
                            Create a new password that has an eight-character password that contains
                            at least one uppercase, one lowercase and a number.
                        </span>
                    </div>
                    <div>
                        <label>Enter New Password </label>
                        <div>
                            <input
                                id="password"
                                name="password"
                                className={cx(styles.inputFullwidth, "border")}
                                type="password"
                                placeholder="********"
                                onChange={handlePasswordChange}
                                onBlur={formik.handleBlur}
                                value={password}
                            />

                            <p
                                className={cx("message-invalid")}
                                style={{
                                    visibility: `${
                                        formik.errors.password && formik.touched.password
                                            ? "visible"
                                            : "hidden"
                                    }`,
                                }}
                            >
                                {formik.errors.password || "nothing"}
                            </p>
                        </div>
                    </div>
                    <div>
                        <label>Confirm New Password </label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            className={cx(styles.inputFullwidth, "border")}
                            type="password"
                            placeholder="********"
                            onChange={handleconfirmPasswordChange}
                            onBlur={formik.handleBlur}
                            value={confirmPassword}
                        />
                        <p
                            className={cx("message-invalid")}
                            style={{
                                visibility: `${
                                    formik.touched.confirmPassword ? "visible" : "hidden"
                                }`,
                            }}
                        >
                            {formik.errors.confirmPassword || "nothing"}
                        </p>
                    </div>
                    {errorMessage && <div className={cx("errormessage")}>{errorMessage}</div>}

                    <div className={cx("button")}>
                        <Link to="/">
                            <button className={cx("btn-left")}>Cancel</button>
                        </Link>

                        <button className={cx("btn-right")} onClick={handleSubmit}>
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </AuthenLayout>
    );
}

export default Newpassword;
