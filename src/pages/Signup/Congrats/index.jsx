import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Congrats.module.scss";
import AuthenLayout from "~/components/Layout/AuthenLayout";
import BoxMessage from "~/components/Layout/components/BoxMessage";

const cx = classNames.bind(styles);

function Congrats() {
    return (
        <AuthenLayout img="https://images.unsplash.com/photo-1588776873786-a51f317c3dbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80">
            <div className={cx("inner")}>
                <div className={cx("title")}>
                    <h2>Congrats</h2>
                </div>

                <BoxMessage
                    text={
                        "You have created account successfully. Please go back to Login page to proceed further."
                    }
                />

                <Link to="/">
                    <button className={cx(styles.btnSubmit, "btnActive")}>To Signin page</button>
                </Link>
            </div>
        </AuthenLayout>
    );
}

export default Congrats;
