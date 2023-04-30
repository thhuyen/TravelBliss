import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useMemo, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "~/components/Layout/components/Header";
import Banner from "~/components/Layout/components/Banner";
import StepChain from "~/components/Layout/components/StepChain";
import styles from "./FirstStep.module.scss";
import InforTicker from "~/components/Layout/components/InforTicker";
import FooterMini from "~/components/Layout/components/FooterMini";

const cx = classNames.bind(styles);

function FirstStep() {
    const tickets = useMemo(
        () => [
            {
                departureTime: "6:10",
                arrivalTime: "17:58",
                departureDate: "May 11",
                arrivalDate: "May 12",
                departurePlace: "Hanoi",
                arrivalPlace: "Saigon",
                seats: 231,
                train: "SE07",
                isButton: true,
                price: "895.000",
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
                price: "1.060.000",
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
                price: "1.064.000",
            },
            {
                departureTime: "22:00",
                arrivalTime: "6:30",
                departureDate: "May 14",
                arrivalDate: "May 15",
                departurePlace: "Hanoi",
                arrivalPlace: "Saigon",
                seats: 154,
                train: "SE01",
                isButton: true,
                price: "1.063.000",
            },
        ],
        [],
    );

    const [filter, setFilter] = useState("Earliest");

    const showFilter = () => {
        if (filter === "Earliest") {
            tickets.sort((a, b) => a.departureDate.slice(3, 6) - b.departureDate.slice(3, 6));
        } else if (filter === "Latest") {
            tickets.sort((a, b) => b.departureDate.slice(3, 6) - a.departureDate.slice(3, 6));
        }
        return tickets;
    };

    showFilter();
    return (
        <div>
            <Header />
            <Banner />
            <StepChain route="/home" active1={true} />

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
                        Departure time ({filter} first)
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
                                setFilter("price-cheapest");
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
                    departurePlace={ticket.arrivalPlace}
                    arrivalPlace={ticket.arrivalPlace}
                    seats={ticket.seats}
                    train={ticket.train}
                    isButton={ticket.isButton}
                    price={ticket.price}
                />
            ))}

            <div className={cx("filter")}>
                You can find other trains departs on 3 days later below as well:
            </div>
            <div className={cx("space")}></div>
            <FooterMini />
        </div>
    );
}

export default FirstStep;
