import classNames from "classnames/bind";
import { memo } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { useCallback } from "react";
import arrow from "~/assets/imgs/arrow.png";
import stylesTicket from "./InforTicket.module.scss";

const cxTicket = classNames.bind(stylesTicket);
function InforTicket({ ...props }) {
    const handleChooseTrain = useCallback((e) => {
        const infor = {
            departureTime: props.departureTime,
            arrivalTime: props.arrivalTime,
            departureDate: props.departureDate,
            arrivalDate: props.arrivalDate,
            departurePlace: props.departurePlace,
            arrivalPlace: props.arrivalPlace,
            seats: props.seats,
            train: props.train,
        };
        sessionStorage.setItem("train", JSON.stringify(infor));
    }, []);

    return (
        <table className={cxTicket("ticket")}>
            <tbody>
                <tr>
                    <td>
                        <p className={cxTicket("title")}>Departure</p>
                        <p className={cxTicket("second-text")}>{props.departureTime}</p>
                        <p>{props.departureDate}</p>
                        <p className={cxTicket("last-text")}>{props.departurePlace}</p>
                    </td>
                    <td>
                        <img src={arrow} alt="arrow" />
                    </td>
                    <td>
                        <p className={cxTicket("title")}>Arrival</p>
                        <p className={cxTicket("second-text")}>{props.arrivalTime}</p>
                        <p>{props.arrivalDate}</p>
                        <p className={cxTicket("last-text")}>{props.arrivalPlace}</p>
                    </td>
                    <td>
                        <p className={cxTicket("title")}>Train</p>
                        <p className={cxTicket("second-text")}>{props.train}</p>
                        <p className={cxTicket("last-text")}>{props.seats} available seats</p>
                        <p className={cxTicket("hide")}>nothing</p>
                    </td>
                    {props.isButton ? (
                        <>
                            <td>
                                <p className={cxTicket("title")}>Price</p>
                                <p>
                                    From <span className={cxTicket("price")}>1.000.000 VND</span>
                                </p>
                                <p className={cxTicket("hide")}>nothing</p>
                                <p className={cxTicket("hide")}>nothing</p>
                            </td>

                            <td>
                                <Link to="/order/secondstep" onClick={handleChooseTrain}>
                                    <button>Choose seat</button>
                                </Link>
                            </td>
                        </>
                    ) : null}
                </tr>
            </tbody>
        </table>
    );
}

export default memo(InforTicket);
