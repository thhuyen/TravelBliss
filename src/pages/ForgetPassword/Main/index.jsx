import classNames from "classnames/bind";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

import AuthenLayout from "~/components/Layout/AuthenLayout";
import BoxMessage from "~/components/Layout/components/BoxMessage";
import styles from "./ForgetPassword.module.scss";

const cx = classNames.bind(styles);

function ForgetPassword() {
    const [users, setUsers] = useState([]);

    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            phone: "",
        },
        validationSchema: Yup.object({
            phone: Yup.string()
                .required("Please fill out your phone number")
                .min(10, "phone number must consist of 10 numbers")
                .matches(
                    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                    "Phone number is not valid",
                )
                .test(
                    "Exist phoneNumber",
                    "Phone number doesn't exist", // <- key, message
                    function (value) {
                        const newUsers = users.filter((acc) => acc.Username === value);
                        return newUsers.length > 0;
                    },
                ),
        }),
        onSubmit: (values, actions) => {
            const newUsers = users.filter((acc) => acc.Username === values.phone);
            navigate(`/forgot/verificationpassword/${newUsers[0].idUser}`, { replace: true });
        },
    });

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/users");
        setUsers(response.data);
    };
    useEffect(() => {
        loadData();
    }, []);

    return (
        <AuthenLayout img="https://thesmartlocal.com/vietnam/wp-content/uploads/2020/09/6-danang-dong-hoi-ride-2.jpg">
            <div className={cx("inner")}>
                <div className={cx("title")}>
                    <h2>Forgot Password</h2>
                </div>
                <div className={cx("guide")}>
                    <BoxMessage
                        text={"Please enter your email address to search for your account."}
                        bggreen={true}
                        clgreen={true}
                        icgreen={true}
                    />
                    <div>
                        <form onSubmit={formik.handleSubmit}>
                            <label className={cx("email-content")} htmlFor="email">
                                Phone number
                            </label>
                            <div>
                                <input
                                    id="phone"
                                    name="phone"
                                    className={cx(styles.inputFullwidth, "border")}
                                    placeholder="0123456789"
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                />
                                <p
                                    className={cx("message-invalid")}
                                    style={{
                                        visibility: `${
                                            formik.errors.phone && formik.touched.phone
                                                ? "visible"
                                                : "hidden"
                                        }`,
                                    }}
                                >
                                    {formik.errors.phone || "nothing"}
                                </p>
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
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenLayout>
    );
}

export default ForgetPassword;
