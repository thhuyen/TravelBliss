import React from "react";
import styles from "./AuthenHomeLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function AuthenHomeLayout({ img, children }) {
    return (
        <div className="wrapper-authen">
            <div className={cx("inner-authen")}>
                <img className={cx("inner-left")} alt="img-signup" src={img} />
                <div className={cx("inner-right")}> {children}</div>
            </div>
        </div>
    );
}

export default AuthenHomeLayout;
