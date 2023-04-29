import classNames from "classnames/bind";
import { memo } from "react";
import map from "~/assets/imgs/mapVN.jpg";
import maplogo from "~/assets/imgs/logo.png";

import stylesFooter from "./Footer.module.scss";

const cxfooter = classNames.bind(stylesFooter);

function FooterMini() {
    return (
        <footer className={cxfooter("footer")}>
            <div className={cxfooter("inner")}>
                <div className={cxfooter("footer-left")}>
                    <h2>hello@travelbliss.com</h2>
                    <img src={map} alt="" />
                </div>

                <div className={cxfooter("footer-right")}>
                    <div className={cxfooter("information")}>
                        <h4>Information</h4>
                        <span>About</span>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>{" "}
                    <div className={cxfooter("support")}>
                        <h4>Support</h4>

                        <span>FAQs</span>
                        <span>Train map</span>
                        <span>News</span>
                        <span>Regulations</span>
                    </div>
                    <img src={maplogo} alt="" />
                </div>
            </div>
            <span className={cxfooter("copyright")}>
                Copyright 2023 TravelBliss. All rights reserved.
            </span>
        </footer>
    );
}

export default memo(FooterMini);
