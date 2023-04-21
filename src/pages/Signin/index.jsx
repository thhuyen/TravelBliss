import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrain, faGlobe } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { Fragment, useEffect, useState, useMemo } from "react";
import { useNavigate, Link, Routes, Route } from "react-router-dom";

import styles from "./Signin.module.scss";
import FooterMini from "~/components/Layout/components/FooterMini";
import Signup from "../Signup";
import ForgetPassword from "../ForgetPassword";

const cx = classNames.bind(styles);

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const [authen, setAuthen] = useState(true);

    useEffect(() => {
        const user = {
            username: "anhtran@gmail.com",
            password: "Anhtran@123",
        };
        localStorage.setItem("user", JSON.stringify(user));
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("user"));

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

        if (email === user.username && password === user.password) {
            window.location.href = "/signup";
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
                        <span>VietnamRailways</span>
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
                            className={cx("input-field")}
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
                            className={cx("input-field")}
                            type="password"
                        />
                        <p
                            className={cx("message-invalid")}
                            style={{ visibility: `${validPassword ? "" : "visible"}` }}
                        >
                            {password === "" ? "Please fill out your password" : "Invalid password"}
                        </p>

                        <input type="checkbox" className={cx("checkbox-remember")} />

                        <label>Remember me</label>
                        <Link to="/forget" className={cx("forget_password")}>
                            Forget password?
                        </Link>

                        <button onClick={handleLogin}>Sign in</button>

                        <div className={cx("ask-signup")}>
                            <span>
                                Not a member? <Link to="/signup">Sign up</Link>
                            </span>
                        </div>
                    </form>
                </div>
            </section>

            <FooterMini />
        </>
    );
}

export default Signin;
