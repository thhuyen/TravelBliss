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

const cx = classNames.bind(styles);

function History() {
    const [choose, setChoose] = React.useState("");
    const handleChange = (event) => {
        setChoose(event.target.value);
    };
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
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <Select placeholder="Sort" value={choose} onChange={handleChange}>
                                    <MenuItem>Oldest to Newest</MenuItem>
                                    <MenuItem>Newest to Oldest</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className={cx("ticket")}>
                        <div className={cx("route")}>
                            <img
                                src="https://haycafe.vn/wp-content/uploads/2022/01/Hinh-nen-Ha-Noi-canh-thap-Rua.jpg"
                                alt=""
                            />
                            <div className={cx("departure")}>
                                <p>Sai Gon -Ha Noi</p>

                                <Row className={cx("row")}>
                                    <Col className={cx("col1")}>Departure Time: </Col>
                                    <Col className={cx("col2")}>15:30, 30/05/2023</Col>
                                    <Col className={cx("col1")}>Arrival Time:</Col>{" "}
                                    <Col className={cx("col2")}>4:30, 01/06/2023 </Col>
                                </Row>
                                <Row className={cx("row")}>
                                    <Col className={cx("col1")}>Train Name: </Col>
                                    <Col className={cx("col2")}>SE04</Col>
                                    <Col className={cx("col1")}>Coach:</Col>{" "}
                                    <Col className={cx("col2")}>2 </Col>
                                </Row>
                                <Row className={cx("row")}>
                                    <Col className={cx("col1")}> Class:</Col>
                                    <Col className={cx("col2")}>Standard Seat</Col>
                                    <Col className={cx("col1")}>Seat:</Col>{" "}
                                    <Col className={cx("col2")}>26</Col>
                                </Row>

                                <hr />
                                <Link to="/order/ticketdetail">
                                    <span>View ticket details</span>
                                </Link>
                            </div>
                        </div>{" "}
                    </div>
                </div>
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
            </div>

            <Footer />
        </div>
    );
}

export default History;
