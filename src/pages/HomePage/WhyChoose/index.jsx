import React from "react";
import styles from "./WhyChoose.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLightbulb, faMoneyCheck, faTicket } from "@fortawesome/free-solid-svg-icons";

const list = [
    {
        id: 1,
        icon: faTicket,
        title: "One-click Booking",
        description:
            "You can easily and quickly purchase train tickets with access to comprehensive details such as seat availability, routes, and timings.",
    },
    {
        id: 2,
        icon: faLightbulb,
        title: "Safety",
        description:
            "Your safety is our top priority. We work with reputable train companies to ensure that you travel in a safe and secure environment.",
    },
    {
        id: 3,
        icon: faMoneyCheck,
        title: "Online Payment",
        description:
            "Our payment process is simple and straightforward, with multiple secure payment options available.",
    },
];

const cxWC = classNames.bind(styles);
function WhyChoose() {
    return (
        <div className={cxWC("wrapper")}>
            <h2 className={cxWC("title")}>Why choose TravelBliss?</h2>
            <p>
                Our first priority is to provide you with comfort by saving time and effort to
                securely book train ticket{" "}
            </p>

            <div className={cxWC("boxs")}>
                {list.map((item) => (
                    <div key={item.id} className={cxWC("box")}>
                        <FontAwesomeIcon icon={item.icon} className={cxWC("icon")} />
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WhyChoose;
