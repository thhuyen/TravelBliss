import { memo } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrain, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import stylesHeader from "./Header.module.scss";

const cxHeader = classNames.bind(stylesHeader);

function Header() {
    return (
        <header className={cxHeader("header")}>
            <div className={cxHeader("inner-header", "d-flex")}>
                <Link to="/home" className={cxHeader("logo")}>
                    <div>
                        <FontAwesomeIcon icon={faTrain} className={cxHeader("icon-header")} />
                        <span>TravelBliss</span>
                    </div>
                </Link>

                <div className={cxHeader("inner-right", "d-flex")}>
                    <Link to="/home">Home</Link>
                    <Link to="/guide">Guide</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About</Link>
                    <FontAwesomeIcon
                        icon={faGlobe}
                        className={cxHeader("icon-header", "icon-header-global")}
                    />

                    <div className={cxHeader("box-navigate", "d-flex")}>
                        <span>Hello, Anh</span>
                        <img
                            src="https://www.cartonionline.com/immagini/lo_straordinario_mondo_di_gumball/lo_straordinario_mondo_di_gumball_gumball_02.jpg"
                            alt="avatar"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default memo(Header);
