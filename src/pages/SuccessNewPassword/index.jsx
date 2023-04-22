import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import AuthenLayout from "~/components/Layout/AuthenLayout";
import styles from "./SuccessNewPassword.module.scss";

const cx = classNames.bind(styles);

function SuccessNewPassword() {
    return (
        <AuthenLayout img="https://thesmartlocal.com/vietnam/wp-content/uploads/2020/09/6-danang-dong-hoi-ride-2.jpg">
            <div className={cx("inner")}>
                <div className={cx("title")}>
                    <h2>Congrats!</h2>
                </div>
                <div className={cx("guide")}>
                    <div className={cx("guide-box")}>
                        <FontAwesomeIcon icon={faCircleInfo} className={cx("icon-infor")} />
                        <span className={cx("guide-text")}>
                            Your password have been changed successfully. Please go back to Sign-in
                            page to proceed further.
                        </span>
                    </div>
                    <Link to="/">
                        <button className={cx(styles.btnSubmit, "btnActive")}>
                            {" "}
                            TO SIGN-IN PAGE{" "}
                        </button>
                    </Link>
                </div>
            </div>
        </AuthenLayout>
    );
}

export default SuccessNewPassword;
