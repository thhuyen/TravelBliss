import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
                .min(8, "Password must be 8 characters long")
                .matches(/[0-9]/, "Password requires a number")
                .matches(/[a-z]/, "Password requires a lowercase letter")
                .matches(/[A-Z]/, "Password requires an uppercase letter"),

            confirmPassword: Yup.string().oneOf([Yup.ref("pass"), null], "Password is not matched"),
        }),
    });

    // const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/successnewpassword", { replace: true });
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

                    <form>
                        <div>
                            <label>Enter New Password </label>
                            <div>
                                <input
                                    id="password"
                                    name="password"
                                    className={cx(styles.inputFullwidth, "border")}
                                    type="password"
                                    placeholder="********"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                                {formik.errors.password && formik.touched.password && (
                                    <p className={cx("errormessage")}>{formik.errors.password}</p>
                                )}
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
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                            />
                            {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                                <p className={cx("errormessage")}>
                                    {formik.errors.confirmPassword}
                                </p>
                            )}
                        </div>

                        <div className={cx("button")}>
                            <Link to="/">
                                <button className={cx("btn-left")}>Cancel</button>
                            </Link>

                            <button onClick={handleSubmit} className={cx("btn-right")}>
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenLayout>
    );
}

export default Newpassword;
