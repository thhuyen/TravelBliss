import classNames from "classnames/bind";
import { Formik, Form, Field, useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import styles from "./Signup.module.scss";
import AuthenLayout from "~/components/Layout/AuthenLayout";
import { useState } from "react";

const cx = classNames.bind(styles);
function Signup() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            fullname: "",
            birthday: "",
            phone: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Please fill out your email"),
            password: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .required("Please fill out your password"),
            fullname: Yup.string()
                .min(5, "Full name must be at least 5 characters")
                .required("Please fill out your full name"),

            phone: Yup.string()
                .required("Please fill out your phone number")
                .matches(
                    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                    "Phone number is not valid",
                ),
        }),
        onSubmit: (values, actions) => {
            window.location.href = "/vertification";
        },
    });
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // };

    return (
        <AuthenLayout img="https://images.unsplash.com/photo-1588776873786-a51f317c3dbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80">
            <div className={cx("title")}>
                <h2>Welcome to</h2>
                <h2>Vietnam Railways</h2>
            </div>

            <form onSubmit={formik.handleSubmit}>
                <label>Full name *</label>
                <input
                    id="fullname"
                    name="fullname"
                    className={cx(styles.inputFullwidth, "border")}
                    type="text"
                    placeholder="Tran Huynh Van Anh"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullname}
                />
                <p
                    className={cx("message-invalid")}
                    style={{
                        visibility: `${
                            formik.errors.fullname && formik.touched.fullname ? "visible" : "hidden"
                        }`,
                    }}
                >
                    {formik.errors.fullname || "nothing"}
                </p>

                <label>Day of birth *</label>
                <input
                    id="birthday"
                    name="birthday"
                    className={cx(styles.inputFullwidth, "border")}
                    type="date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.birthday}
                />

                <p
                    className={cx("message-invalid")}
                    style={{
                        visibility: `${
                            formik.errors.date && formik.touched.date ? "visible" : "hidden"
                        }`,
                    }}
                >
                    {formik.errors.date || "nothing"}
                </p>

                <label>Email *</label>
                <input
                    id="email"
                    name="email"
                    className={cx(styles.inputFullwidth, "border")}
                    type="text"
                    placeholder="Khoa.nguyen@gmail.com"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                <p
                    className={cx("message-invalid")}
                    style={{
                        visibility: `${
                            formik.errors.email && formik.touched.email ? "visible" : "hidden"
                        }`,
                    }}
                >
                    {formik.errors.email || "nothing"}
                </p>
                <label>Phone number *</label>
                <input
                    id="phone"
                    name="phone"
                    className={cx(styles.inputFullwidth, "border")}
                    type="text"
                    placeholder="0123456789"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                />
                <p
                    className={cx("message-invalid")}
                    style={{
                        visibility: `${
                            formik.errors.phone && formik.touched.phone ? "visible" : "hidden"
                        }`,
                    }}
                >
                    {formik.errors.phone || "nothing"}
                </p>

                <label>Password *</label>
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
                <p
                    className={cx("message-invalid")}
                    style={{
                        visibility: `${
                            formik.errors.password && formik.touched.password ? "visible" : "hidden"
                        }`,
                    }}
                >
                    {formik.errors.password || "nothing"}
                </p>

                <input type="checkbox" />
                <label className={cx("ask-agree")}>
                    I agree to the <a href="/">Terms and Conditions</a>.
                </label>

                <button
                    type="submit"
                    disabled={formik.isSubmitting || !formik.isValid}
                    className={cx(styles.btnSignup, "btnActive")}
                >
                    SIGN UP
                </button>
            </form>

            <div className={cx("ask-signin")}>
                <span>
                    Already have an account? <Link to="/">Sign in</Link>
                </span>
            </div>
        </AuthenLayout>
    );
}

export default Signup;
