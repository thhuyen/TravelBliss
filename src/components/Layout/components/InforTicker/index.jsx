import classNames from "classnames/bind";
import { memo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import clsx from "clsx";

import { useCallback } from "react";
import arrow from "~/assets/imgs/arrow.png";
import stylesTicket from "./InforTicket.module.scss";

const cxTicket = classNames.bind(stylesTicket);
function InforTicket({ ...props }) {
    const { idUser } = useParams();
    const navigate = useNavigate();

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
            price: props.price,
        };
        sessionStorage.setItem("train", JSON.stringify(infor));
        navigate(`/order/secondstep/${idUser}`, { replace: true });
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
                                    From{" "}
                                    <span className={cxTicket("price")}>{props.price} VND</span>
                                </p>
                                <p className={cxTicket("hide")}>nothing</p>
                                <p className={cxTicket("hide")}>nothing</p>
                            </td>

                            <td>
                                <button onClick={handleChooseTrain}>Choose seat</button>
                            </td>
                        </>
                    ) : null}
                </tr>
            </tbody>
        </table>
    );
}

export default memo(InforTicket);
