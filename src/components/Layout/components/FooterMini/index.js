import classNames from "classnames/bind";

import stylesFooterMini from "./FooterMini.module.scss";

const cfxootermini = classNames.bind(stylesFooterMini);

function FooterMini() {
    return (
        <footer className={cfxootermini("footer")}>
            <div className={cfxootermini("inner-footer")}>
                <span>Copyright 2023 TravelBliss. All rights reserved.</span>

                <div className={cfxootermini("inner-right")}>
                    <div className={cfxootermini("terms")}>
                        <span>Privacy Policy</span>
                        <span>Data & Security</span>
                        <span>Terms of Service</span>
                        <span>About</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterMini;
