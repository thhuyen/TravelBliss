import classNames from "classnames/bind";
import { useFormik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import * as Yup from "yup";
import AuthenLayout from "~/components/Layout/AuthenLayout";
import styles from "./Newpassword.module.scss";
import BoxMessage from "~/components/Layout/components/BoxMessage";
import { useEffect } from "react";

const cx = classNames.bind(styles);

function Newpassword() {
    const { idUser } = useParams();

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object().shape({
            password: Yup.string()
                .required("Please fill out your password")
                .min(8, "Password must be at least 8 characters")
                .max(20, "Password must be less than 20 characters")
                .matches(/[0-9]/, "Password requires a number")
                .matches(/[a-z]/, "Password requires a lowercase letter")
                .matches(/[A-Z]/, "Password requires an uppercase letter")
                .matches(/[^\w]/, "Password requires a symbol"),
            confirmPassword: Yup.string()
                .required("Please confirm password")
                .oneOf([Yup.ref("password"), null], "Passwords doesn't match"),
        }),
        onSubmit: (values) => {
            const Password = values.password;

            axios.put(`http://localhost:5000/api/putUsers/password/${idUser}`, {
                Password,
            });
            navigate("/forgot/successnewpassword", { replace: true });
        },
    });

    return (
        <AuthenLayout img="https://thesmartlocal.com/vietnam/wp-content/uploads/2020/09/6-danang-dong-hoi-ride-2.jpg">
            <div className={cx("inner")}>
                <div className={cx("title")}>
                    <h2>Choose a new password</h2>
                </div>
                <div className={cx("guide")}>
                    <BoxMessage
                        text={
                            "Create a new password that has an eight-character password that contains at least one uppercase, one lowercase and a number."
                        }
                        bggreen={true}
                        clgreen={true}
                        icgreen={true}
                    />

                    <form onSubmit={formik.handleSubmit}>
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

                            <button
                                type="submit"
                                disabled={formik.isSubmitting || !formik.isValid}
                                className={cx("btn-right")}
                            >
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
