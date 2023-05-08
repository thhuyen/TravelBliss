import classNames from "classnames/bind";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrain, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./Signin.module.scss";
import FooterMini from "~/components/Layout/components/FooterMini";
// import { users } from "~/components/Data/users";

const cx = classNames.bind(styles);

function Signin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [validPhone, setValidPhone] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const [authen, setAuthen] = useState(true);
    const [users, setUsers] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/users");
        setUsers(response.data);
    };
    useEffect(() => {
        loadData();
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();

        if (!username) {
            setValidPhone(false);
        } else {
            const validatePhone = (number) => {
                return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
            };
            if (validatePhone(username)) {
                setValidPhone(true);
            } else {
                setValidPhone(false);
            }
        }

        if (!password) {
            setValidPassword(false);
        } else {
            setValidPassword(true);
        }

        const accountExist = users.filter(
            (acc) => acc.Username === username && acc.Password === password,
        );

        if (accountExist.length > 0) {
            navigate("/home", { replace: true });
        } else {
            setAuthen(false);
        }
    };

    return (
        <div className={cx("inner-body")}>
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

                        <label className={cx("label-field")}>Phone number</label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onInput={() => {
                                setValidPhone(true);
                                setAuthen(true);
                            }}
                            className={clsx(styles.inputField, "border")}
                            type="text"
                            spellCheck="false"
                            placeholder="example: 0988111829"
                        />
                        <p
                            className={cx("message-invalid")}
                            style={{ visibility: ` ${validPhone ? "" : "visible"}` }}
                        >
                            {username === ""
                                ? "Please fill out your username"
                                : "Invalid phone number"}
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
                        <Link to="/forgot" className={cx("forget_password")}>
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

            <div className={cx("wrapper-footer")}>
                <FooterMini />
            </div>
        </div>
    );
}

export default Signin;
