import classNames from "classnames/bind";
import { memo } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import arrow from "~/assets/imgs/arrow.png";
import stylesTicket from "./InforTicket.module.scss";

const cxTicket = classNames.bind(stylesTicket);
function InforTicket() {
    return (
        <div className={cxTicket("ticket")}>
            <div className={cxTicket("inner")}>
                <div>
                    <p className={cxTicket("title")}>Departure</p>
                    <p className={cxTicket("second-text")}>15:30</p>
                    <p>Apr 16</p>
                    <p>Ha Noi</p>
                </div>
                <div>
                    <img src={arrow} alt="arrow" />
                </div>
                <div>
                    <p className={cxTicket("title")}>Arrival</p>
                    <p className={cxTicket("second-text")}>4:25</p>
                    <p>Apr 18</p>
                    <p>Sai Gon</p>
                </div>
                <div>
                    <p class={cxTicket("title")}>Train</p>
                    <p className={cxTicket("second-text")}>SE05</p>
                    <p>51 available seats</p>
                </div>
                <div>
                    <p className={cxTicket("title")}>Price</p>
                    <p>From 1.000.000 VND</p>
                </div>
                <div>
                    <button>Choose seat</button>
                </div>
            </div>
        </div>
    );
}

export default memo(InforTicket);
