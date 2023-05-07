import { faCircleCheck, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

import arrow from "~/assets/imgs/arrow.png";
import qr from "~/assets/imgs/QR.png";
import FooterMini from "~/components/Layout/components/FooterMini";
import Header from "~/components/Layout/components/Header";

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./History.module.scss";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Footer from "~/components/Layout/components/Footer";

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
                                <Select
                                    aria-placeholder="Sort by"
                                    value={choose}
                                    onChange={handleChange}
                                >
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
                                <span>View ticket details</span>
                            </div>
                        </div>{" "}
                    </div>
                </div>
                <div className={cx("ticket-btn")}>
                    <button className={cx("down")}> Go to Homepage</button>
                    <button className={cx("up")}>Book another</button>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default History;
