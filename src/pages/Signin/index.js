import styles from "./Signin.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrain, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
const cx = classNames.bind(styles);

function Signin() {
    return (
        <>
            <header className={cx("header")}>
                <div className={cx("inner-header")}>
                    <div className={cx("logo")}>
                        <FontAwesomeIcon icon={faTrain} className={cx("icon-header")} />
                        <span>VietNamRailways</span>
                    </div>
                    <div className={cx("language")}>
                        <FontAwesomeIcon icon={faGlobe} className={cx("icon-header")} />
                        <p>English</p>
                    </div>
                </div>
            </header>

            <section className={cx("wrapper-signin")}>
                <div className={cx("signin_box")}>
                    <h2>Sign in</h2>
                    <form className={cx("form-signin")}>
                        <label className={cx("label-field")}>Email</label>
                        <input className={cx("input-field")} type="text" placeholder="example: abc@xyzmail.com" />

                        <label className={cx("label-field")}>Password</label>
                        <input className={cx("input-field")} type="password" />

                        <input type="checkbox" className={cx("checkbox-remember")} />
                        <label>Remember me</label>
                        <a href="/" className={cx("forget_password")}>
                            Forget password?
                        </a>

                        <button>Sign in</button>

                        <div className={cx("ask-signup")}>
                            <span>
                                Not a member? <a href="/">Sign up</a>
                            </span>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Signin;
