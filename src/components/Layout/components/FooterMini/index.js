import classNames from "classnames/bind";
import { memo } from "react";

import stylesFooterMini from "./FooterMini.module.scss";

const cxfootermini = classNames.bind(stylesFooterMini);

function FooterMini() {
    return (
        <footer className={cxfootermini("footer")}>
            <div className={cxfootermini("inner-footer")}>
                <span>Copyright 2023 TravelBliss. All rights reserved.</span>

                <div className={cxfootermini("inner-right")}>
                    <div className={cxfootermini("terms")}>
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

export default memo(FooterMini);
