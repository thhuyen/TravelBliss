import classNames from "classnames/bind";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import styles from "./Signup.module.scss";
import AuthenLayout from "~/components/Layout/AuthenLayout";

const cx = classNames.bind(styles);
function Signup() {
    // get user
    const [users, setUsers] = useState([]);
    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/users");
        setUsers(response.data);
    };
    useEffect(() => {
        loadData();
    }, []);

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
            fullname: "",
            phone: "",
            accept: false,
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Please fill out your email"),
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
            fullname: Yup.string()
                .min(5, "Full name must be at least 5 characters")
                .required("Please fill out your full name"),

            phone: Yup.string()
                .required("Please fill out your phone number")
                .min(10, "phone number must consist of 10 numbers")
                .matches(
                    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                    "Phone number is not valid",
                )
                .test(
                    "Unique phoneNumber",
                    "Phone number already used in another account", // <- key, message
                    function (value) {
                        const newUsers = users.filter((acc) => acc.Username === value);
                        return newUsers.length < 1;
                    },
                ),
            accept: Yup.bool().oneOf([true], "The terms and conditions must be accepted."),
        }),
        onSubmit: (values) => {
            const id = "3";
            const Username = values.phone;
            const Password = values.password;
            const Email = values.email;
            const Fullname = values.fullname;

            axios.post("http://localhost:5000/api/postUsers", {
                id,
                Username,
                Password,
                Email,
                Fullname,
            });

            navigate("/signup/vertification", { replace: true });
        },
    });

    return (
        <AuthenLayout img="https://images.unsplash.com/photo-1588776873786-a51f317c3dbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80">
            <div className={cx("title")}>
                <h2>
                    Welcome to <span>TravelBliss</span>
                </h2>
            </div>

            <form onSubmit={formik.handleSubmit} className={cx("form-singup")}>
                <label htmlFor="fullname">Full name *</label>
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

                <label htmlFor="email">Email *</label>
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
                <label htmlFor="phone">Phone number *</label>
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

                <label htmlFor="password">Password *</label>
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

                <label htmlFor="password">Confirm password *</label>
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
                <p
                    className={cx("message-invalid")}
                    style={{
                        visibility: `${
                            formik.errors.confirmPassword && formik.touched.confirmPassword
                                ? "visible"
                                : "hidden"
                        }`,
                    }}
                >
                    {formik.errors.confirmPassword || "nothing"}
                </p>

                <div className={cx("ask-agree")}>
                    <input
                        id="accept"
                        type="checkbox"
                        name="accept"
                        onChange={formik.handleChange}
                    />
                    <label htmlFor="accept">
                        I agree to the <Link to="*">Terms and Conditions</Link>.
                    </label>
                </div>

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
