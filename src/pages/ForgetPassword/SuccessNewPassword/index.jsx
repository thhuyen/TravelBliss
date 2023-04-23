import classNames from "classnames/bind";

import { Link } from "react-router-dom";
import AuthenLayout from "~/components/Layout/AuthenLayout";
import styles from "./SuccessNewPassword.module.scss";
import BoxMessage from "~/components/Layout/components/BoxMessage";

const cx = classNames.bind(styles);

function SuccessNewPassword() {
    return (
        <AuthenLayout img="https://thesmartlocal.com/vietnam/wp-content/uploads/2020/09/6-danang-dong-hoi-ride-2.jpg">
            <div className={cx("inner")}>
                <div className={cx("title")}>
                    <h2>Congrats!</h2>
                </div>
                <div className={cx("guide")}>
                    <BoxMessage
                        text={
                            "Your password have been changed successfully. Please go back to Sign-in page to proceed further."
                        }
                    />

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
