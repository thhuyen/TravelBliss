import classNames from "classnames/bind";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrain, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Signin.module.scss";
import FooterMini from "~/components/Layout/components/FooterMini";
import { users } from "~/components/Data/users";

const cx = classNames.bind(styles);

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const [authen, setAuthen] = useState(true);

    // console.log(users);
    const handleLogin = (e) => {
        e.preventDefault();

        if (!email) {
            setValidEmail(false);
        } else {
            const validateEmail = (email) => {
                return email.match(
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                );
            };
            if (validateEmail(email)) {
                setValidEmail(true);
            } else {
                setValidEmail(false);
            }
        }

        if (!password) {
            setValidPassword(false);
        } else {
            setValidPassword(true);
        }

        const accountExist = users.filter(
            (acc) => acc.email === email && acc.password === password,
        );

        if (accountExist.length > 0) {
            window.location.href = "/home";
        } else {
            setAuthen(false);
        }
    };

    return (
        <>
            <header className={cx("header")}>
                <div className={cx("inner-header")}>
                    <div className={cx("logo")}>
                        <FontAwesomeIcon icon={faTrain} className={cx("icon-header")} />
                        <span>TravelBliss</span>
                    </div>
                    <div className={cx("language")}>
                        <FontAwesomeIcon icon={faGlobe} />
                        <p>English</p>
                    </div>
                </div>
            </header>

            <section className={cx("wrapper-signin")}>
                <div className={cx("signin_box")}>
                    <h2>Sign in</h2>
                    <form className={cx("form-signin")}>
                        <div
                            className={cx("alert-wrong-authen")}
                            style={{ visibility: `${authen ? "" : "visible"}` }}
                        >
                            <p>Wrong username or password</p>
                        </div>

                        <label className={cx("label-field")}>Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onInput={() => {
                                setValidEmail(true);
                                setAuthen(true);
                            }}
                            className={clsx(styles.inputField, "border")}
                            type="text"
                            spellCheck="false"
                            placeholder="example: abc@xyzmail.com"
                        />
                        <p
                            className={cx("message-invalid")}
                            style={{ visibility: ` ${validEmail ? "" : "visible"}` }}
                        >
                            {email === "" ? "Please fill out your email" : "Invalid email"}
                        </p>

                        <label className={cx("label-field")}>Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onInput={() => {
                                setValidPassword(true);
                                setAuthen(true);
                            }}
                            className={clsx(styles.inputField, "border")}
                            type="password"
                            placeholder="********"
                        />
                        <p
                            className={cx("message-invalid")}
                            style={{ visibility: `${validPassword ? "" : "visible"}` }}
                        >
                            {password === "" ? "Please fill out your password" : "Invalid"}
                        </p>

                        <input type="checkbox" className={cx("checkbox-remember")} />

                        <label>Remember me</label>
                        <Link to="/forget" className={cx("forget_password")}>
                            Forget password?
                        </Link>

                        <button
                            className={clsx(styles.btnSignin, "btnActive")}
                            onClick={handleLogin}
                        >
                            Sign in
                        </button>
                    </form>
                    <div className={cx("ask-signup")}>
                        <span>
                            Not a member? <Link to="/signup">Sign up</Link>
                        </span>
                    </div>
                </div>
            </section>

            <FooterMini />
        </>
    );
}

export default Signin;
