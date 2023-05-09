import classNames from "classnames/bind";

import Header from "~/components/Layout/components/Header";

import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./History.module.scss";

import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Footer from "~/components/Layout/components/Footer";
import { Link } from "react-router-dom";
import { InputLabel } from "@mui/material";

const cx = classNames.bind(styles);

function History() {
    const [choose, setChoose] = React.useState("");
    const handleChange = (event) => {
        setChoose(event.target.value);
        if (event.target.value === "20") {
            setTickets([...tickets].reverse());
        }
    };
    const [tickets, setTickets] = React.useState([
        {
            id: 1,
            img: "https://haycafe.vn/wp-content/uploads/2022/01/Hinh-nen-Ha-Noi-canh-thap-Rua.jpg",
            from: "Sai Gon",
            to: "Ha Noi",
            departureTime: "15:30, 30/05/2023",
            arrivalTime: "4:30, 01/06/2023",
            trainName: "SE04",
            coach: 2,
            class: "Standard Seat",
            seat: 26,
        },
        {
            id: 2,
            img: "https://bcp.cdnchinhphu.vn/uploaded/1/truonggiangthanh/2021_10_22/tth_NHCP.jpg",
            from: "Sai Gon",
            to: "Hue",
            departureTime: "3:23, 15/06/2023",
            arrivalTime: "4:30, 01/06/2023",
            trainName: "SE06",
            coach: 2,
            class: "ID200623SE05",
            seat: 4,
        },
    ]);

    return (
        <div>
            <Header />
            <div className={cx("wrapper")}>
                <div className={cx("inner")}>
                    <div>
                        <h2>History</h2>
                        <div className={cx("header", "d-flex")}>
                            <div className={cx("title", "d-flex")}>
                                <span>Upcoming</span>
                                <span>Completed</span>
                                <span>Cancelled</span>
                            </div>
                            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                <InputLabel className={cx("label")}>Sort by</InputLabel>
                                <Select
                                    className={cx("value")}
                                    id="demo-select-small"
                                    value={choose}
                                    label="Sort by"
                                    onChange={handleChange}
                                >
                                    <MenuItem value=""></MenuItem>
                                    <MenuItem value={10}>Oldest to Newest</MenuItem>
                                    <MenuItem value={20}>Newest to Oldest</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    {/* <div className={cx("ticket")}> */}
                    {tickets.map((ticket) => (
                        <div key={ticket.id} className={cx("ticket")}>
                            <div className={cx("route")}>
                                <img src={ticket.img} alt="" />
                                <div className={cx("departure")}>
                                    <p>
                                        {ticket.from} - {ticket.to}
                                    </p>
                                    <Row className={cx("row")}>
                                        <Col className={cx("col1")}>Departure Time: </Col>
                                        <Col className={cx("col2")}>{ticket.departureTime}</Col>
                                        <Col className={cx("col1")}>Arrival Time:</Col>{" "}
                                        <Col className={cx("col2")}>{ticket.arrivalTime} </Col>
                                    </Row>
                                    <Row className={cx("row")}>
                                        <Col className={cx("col1")}>Train Name: </Col>
                                        <Col className={cx("col2")}>{ticket.trainName}</Col>
                                        <Col className={cx("col1")}>Coach: </Col>
                                        <Col className={cx("col2")}>{ticket.coach}</Col>
                                    </Row>
                                    <Row className={cx("row")}>
                                        <Col className={cx("col1")}>Class: </Col>
                                        <Col className={cx("col2")}>{ticket.class}</Col>
                                        <Col className={cx("col1")}>Seat: </Col>
                                        <Col className={cx("col2")}>{ticket.seat}</Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* </div> */}
                    <div className={cx("ticket-btn")}>
                        <Link to="/">
                            {" "}
                            <button className={cx("down")}> Go to Homepage</button>
                        </Link>
                        <Link to="/order/firststep">
                            {" "}
                            <button className={cx("up")}>Book another</button>
                        </Link>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default History;
