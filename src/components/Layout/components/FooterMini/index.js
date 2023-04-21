import styles from "./FooterMini.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

import { Fragment, useState } from "react";

const cx = classNames.bind(styles);

function FooterMini() {
    return (
        <footer className={cx("footer")}>
            <div className={cx("inner-footer")}>
                <span>Copyright 2023 VietnamRailways. All rights reserved.</span>

                <div className={cx("inner-right")}>
                    <FontAwesomeIcon className={cx("icon-media")} icon={faLinkedin} />
                    <FontAwesomeIcon className={cx("icon-media")} icon={faTwitterSquare} />

                    <div className={cx("terms")}>
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
