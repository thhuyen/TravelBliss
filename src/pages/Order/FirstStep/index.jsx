import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useMemo, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";

import Header from "~/components/Layout/components/Header";
import Banner from "~/components/Layout/components/Banner";
import StepChain from "~/components/Layout/components/StepChain";
import styles from "./FirstStep.module.scss";
import InforTicker from "~/components/Layout/components/InforTicker";
import FooterMini from "~/components/Layout/components/FooterMini";

const cx = classNames.bind(styles);

function FirstStep() {
    const { idUser } = useParams();
    const route = useMemo(() => `/home/${idUser}`, []);

    const tickets = useMemo(
        () => [
            {
                departureTime: "6:10",
                arrivalTime: "17:58",
                departureDate: "May 10",
                arrivalDate: "May 11",
                departurePlace: "Hanoi",
                arrivalPlace: "Saigon",
                seats: 231,
                train: "SE07",
                isButton: true,
                price: 895000,
            },
            {
                departureTime: "15:30",
                arrivalTime: "4:25",
                departureDate: "May 10",
                arrivalDate: "May 12",
                departurePlace: "Hanoi",
                arrivalPlace: "Saigon",
                seats: 187,
                train: "SE05",
                isButton: true,
                price: 1060000,
            },
            {
                departureTime: "19:20",
                arrivalTime: "5:40",
                departureDate: "May 10",
                arrivalDate: "May 12",
                departurePlace: "Hanoi",
                arrivalPlace: "Saigon",
                seats: 51,
                train: "SE03",
                isButton: true,
                price: 1064000,
            },
            {
                departureTime: "22:00",
                arrivalTime: "6:30",
                departureDate: "May 10",
                arrivalDate: "May 12",
                departurePlace: "Hanoi",
                arrivalPlace: "Saigon",
                seats: 154,
                train: "SE01",
                isButton: true,
                price: 1063000,
            },
        ],
        [],
    );

    const ticketsAfter = useMemo(
        () => [
            {
                departureTime: "6:10",
                arrivalTime: "17:58",
                departureDate: "May 11",
                arrivalDate: "May 11",
                departurePlace: "Hanoi",
                arrivalPlace: "Saigon",
                seats: 231,
                train: "SE07",
                isButton: true,
                price: 917000,
            },
            {
                departureTime: "15:30",
                arrivalTime: "4:25",
                departureDate: "May 11",
                arrivalDate: "May 12",
                departurePlace: "Hanoi",
                arrivalPlace: "Saigon",
                seats: 187,
                train: "SE05",
                isButton: true,
                price: 1060000,
            },
            {
                departureTime: "19:20",
                arrivalTime: "5:40",
                departureDate: "May 11",
                arrivalDate: "May 12",
                departurePlace: "Hanoi",
                arrivalPlace: "Saigon",
                seats: 51,
                train: "SE03",
                isButton: true,
                price: 1064000,
            },
            {
                departureTime: "22:00",
                arrivalTime: "6:30",
                departureDate: "May 11",
                arrivalDate: "May 12",
                departurePlace: "Hanoi",
                arrivalPlace: "Saigon",
                seats: 154,
                train: "SE01",
                isButton: true,
                price: 1063000,
            },
            {
                departureTime: "6:10",
                arrivalTime: "17:58",
                departureDate: "May 12",
                arrivalDate: "May 12",
                departurePlace: "Hanoi",
                arrivalPlace: "Saigon",
                seats: 231,
                train: "SE07",
                isButton: true,
                price: 917000,
            },
            {
                departureTime: "15:30",
                arrivalTime: "4:25",
                departureDate: "May 12",
                arrivalDate: "May 13",
                departurePlace: "Hanoi",
                arrivalPlace: "Saigon",
                seats: 187,
                train: "SE05",
                isButton: true,
                price: 1060000,
            },
            {
                departureTime: "19:20",
                arrivalTime: "5:40",
                departureDate: "May 12",
                arrivalDate: "May 13",
                departurePlace: "Hanoi",
                arrivalPlace: "Saigon",
                seats: 51,
                train: "SE03",
                isButton: true,
                price: 1064000,
            },
            {
                departureTime: "22:00",
                arrivalTime: "6:30",
                departureDate: "May 12",
                arrivalDate: "May 13",
                departurePlace: "Hanoi",
                arrivalPlace: "Saigon",
                seats: 154,
                train: "SE01",
                isButton: true,
                price: 1063000,
            },
            {
                departureTime: "6:10",
                arrivalTime: "17:58",
                departureDate: "May 13",
                arrivalDate: "May 13",
                departurePlace: "Hanoi",
                arrivalPlace: "Saigon",
                seats: 231,
                train: "SE07",
                isButton: true,
                price: 917000,
            },
            {
                departureTime: "15:30",
                arrivalTime: "6:30",
                departureDate: "May 13",
                arrivalDate: "May 14",
                departurePlace: "Hanoi",
                arrivalPlace: "Saigon",
                seats: 187,
                train: "SE05",
                isButton: true,
                price: 1063000,
            },
            {
                departureTime: "19:20",
                arrivalTime: "5:40",
                departureDate: "May 13",
                arrivalDate: "May 14",
                departurePlace: "Hanoi",
                arrivalPlace: "Saigon",
                seats: 51,
                train: "SE03",
                isButton: true,
                price: 1064000,
            },
            {
                departureTime: "22:30",
                arrivalTime: "6:30",
                departureDate: "May 13",
                arrivalDate: "May 14",
                departurePlace: "Hanoi",
                arrivalPlace: "Saigon",
                seats: 154,
                train: "SE01",
                isButton: true,
                price: 1063000,
            },
        ],
        [],
    );

    const [filter, setFilter] = useState("Earliest");

    const showFilter = () => {
        if (filter === "Earliest") {
            tickets.sort((a, b) => a.arrivalDate.slice(3, 6) - b.arrivalDate.slice(3, 6));
            tickets.sort((a, b) => a.departureTime.slice(0, 2) - b.departureTime.slice(0, 2));
            tickets.sort((a, b) => a.arrivalTime.slice(0, 2) - b.arrivalTime.slice(0, 2));
        } else if (filter === "Latest") {
            tickets.sort((a, b) => b.arrivalDate.slice(3, 6) - a.arrivalDate.slice(3, 6));
            tickets.sort((a, b) => b.departureTime.slice(0, 2) - a.departureTime.slice(0, 2));
            tickets.sort((a, b) => b.arrivalTime.slice(0, 2) - a.arrivalTime.slice(0, 2));
        } else if (filter === "Cheapest") {
            tickets.sort((a, b) => a.price - b.price);
        } else {
            tickets.sort((a, b) => b.price - a.price);
        }
        return tickets;
    };

    showFilter();
    return (
        <div>
            <Header />
            <Banner />
            <StepChain route={route} active1={true} />

            <div className={cx("filter")}>
                We have found 4 trains departs on <b>May 11th:</b>
                <Dropdown>
                    <Dropdown.Toggle
                        className={cx("filter-box")}
                        style={{
                            color: "var(--primary-orange-500)",
                            background: "white",
                            border: "1px solid var(--primary-orange-500)",
                        }}
                    >
                        <FontAwesomeIcon icon={faFilter} className={cx("icon-filter")} />
                        {filter.includes("Earliest") || filter.includes("Latest")
                            ? "Departure time (" + filter + " first)"
                            : "Price (" + filter + " first)"}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className={cx("sub-dropdown")}>
                        <Dropdown.Item
                            className={cx("sub-dropdown-item")}
                            onClick={() => {
                                setFilter("Earliest");
                            }}
                        >
                            Departure time (Earliest first)
                        </Dropdown.Item>
                        <Dropdown.Item
                            className={cx("sub-dropdown-item")}
                            onClick={() => {
                                setFilter("Latest");
                            }}
                        >
                            Departure time (Latest first)
                        </Dropdown.Item>
                        <Dropdown.Item
                            className={cx("sub-dropdown-item")}
                            onClick={() => {
                                setFilter("Cheapest");
                            }}
                        >
                            Price (Cheapest first)
                        </Dropdown.Item>
                        <Dropdown.Item
                            className={cx("sub-dropdown-item")}
                            onClick={() => {
                                setFilter("price-highest");
                            }}
                        >
                            Price (Highest first)
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            {tickets.map((ticket, index) => (
                <InforTicker
                    key={index}
                    departureTime={ticket.departureTime}
                    arrivalTime={ticket.arrivalTime}
                    departureDate={ticket.departureDate}
                    arrivalDate={ticket.arrivalDate}
                    departurePlace={ticket.departurePlace}
                    arrivalPlace={ticket.arrivalPlace}
                    seats={ticket.seats}
                    train={ticket.train}
                    isButton={ticket.isButton}
                    price={ticket.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                />
            ))}

            <div className={cx("filter")}>
                You can find other trains departs on 3 days later below as well:
            </div>
            {ticketsAfter.map((ticket, index) => (
                <InforTicker
                    key={index}
                    departureTime={ticket.departureTime}
                    arrivalTime={ticket.arrivalTime}
                    departureDate={ticket.departureDate}
                    arrivalDate={ticket.arrivalDate}
                    departurePlace={ticket.departurePlace}
                    arrivalPlace={ticket.arrivalPlace}
                    seats={ticket.seats}
                    train={ticket.train}
                    isButton={ticket.isButton}
                    price={ticket.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                />
            ))}
            <div className={cx("space")}></div>
            <FooterMini />
        </div>
    );
}

export default FirstStep;
