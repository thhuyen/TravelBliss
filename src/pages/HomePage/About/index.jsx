import classNames from "classnames/bind";
import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthenHomeLayout from "~/components/Layout/AuthenHomeLayout";
import styles from "./About.module.scss";
const cxAbout = classNames.bind(styles);

function About() {
    return (
        <AuthenHomeLayout img="https://thesmartlocal.com/vietnam/wp-content/uploads/2020/09/3-Da-Lat-Trai-Mat-3.jpg">
            <h2 className={cxAbout("header")}>About TravelBliss</h2>
            <div className={cxAbout("content")}>
                <p>
                    TravelBliss was established for the purpose of operating the national passenger
                    rail services on behalf of the government of Vietnam. Currently TravelBliss
                    operates in 35 provinces across Vietnam, with 3 main routes covering a distance
                    of over 2,600 kilometers.
                </p>
                <p>
                    With the vision of connecting and uniting Vietnam's cities and people, we offer
                    the service which is reliable, efficient, sustainable, and environmentally
                    friendly, thus meeting the needs of all tourists.
                </p>
                <p>
                    Traveling across Vietnam by train with TravelBliss is a pleasure with
                    comfortable seats and a pleasant atmosphere. Electrical outlets and Wi-Fi
                    Internet access are available on most fleet vehicles. The type of equipment
                    varies, and it depends on availability.
                </p>
            </div>
            <span className={cxAbout("btn")}>
                READ MORE <FontAwesomeIcon className={cxAbout("icon")} icon={faArrowRight} />
            </span>
        </AuthenHomeLayout>
    );
}

export default About;
