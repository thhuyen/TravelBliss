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
import styles from "./Success.module.scss";

const cx = classNames.bind(styles);

function Success() {
    return (
        <div>
            <Header />
            <div className={cx("wrapper")}>
                <div className={cx("inner")}>
                    <div className={cx("info")}>
                        <FontAwesomeIcon icon={faCircleCheck} className={cx("icon-infor")} />
                        <h3>Congratulations! You have Successfully booked tickets</h3>
                    </div>
                    <div className={cx("para")}>
                        <p>
                            Thank you for purchasing tickets via TravelBliss. Your transaction have
                            made Successfully. We will send your tickets to your email address:
                            vananh.tran1198@gmail.com.
                        </p>
                        <p>
                            Please also find your tickets below and in ‘Success’ page. Don’t
                            hesitate to contact our support portal if there is any concern.{" "}
                        </p>
                        <p>Enjoy your trip!</p>
                    </div>
                    <div className={cx("ticket")}>
                        <div className={cx("ticket-detail")}>
                            <div className={cx("ticket-id")}>
                                <p>
                                    <span className={cx("id")}>Ticket ID: </span>{" "}
                                    <span className={cx("id-number")}>ID260423SE04</span>
                                </p>
                                <p>
                                    <span className={cx("id")}>Booking date:</span>
                                    <span className={cx("id-number")}>10/04/2023 </span>
                                </p>
                            </div>
                            <div className={cx("route")}>
                                <div className={cx("departure")}>
                                    <span>Departure</span>
                                    <span className={cx("city")}>Sai Gon</span>
                                </div>
                                <img src={arrow} alt="" className={cx("arrow")} />
                                <div className={cx("arrival")}>
                                    <span>Arrival</span>
                                    <span className={cx("city")}>Ha Noi</span>
                                </div>
                            </div>
                            <div className={cx("information")}>
                                <span>Ticket Information:</span>
                                <div>
                                    <Row>
                                        <Col className={cx("col1")}>Departure Time: </Col>
                                        <Col className={cx("col2")}>15:30, 30/05/2023</Col>
                                        <Col className={cx("col1")}>Arrival Time:</Col>{" "}
                                        <Col className={cx("col2")}>4:30, 01/06/2023 </Col>
                                    </Row>
                                    <Row>
                                        <Col className={cx("col1")}>Train Name: </Col>
                                        <Col className={cx("col2")}>SE04</Col>
                                        <Col className={cx("col1")}>Coach:</Col>{" "}
                                        <Col className={cx("col2")}>2 </Col>
                                    </Row>
                                    <Row>
                                        <Col className={cx("col1")}> Class:</Col>
                                        <Col className={cx("col2")}>Standard Seat</Col>
                                        <Col className={cx("col1")}>Seat:</Col>{" "}
                                        <Col className={cx("col2")}>26</Col>
                                    </Row>
                                </div>
                                <span>Passenger Details</span>
                                <Row>
                                    <Col> Passenger Type:</Col>
                                    <Col className={cx("col2")}>Adult</Col>
                                    <Col>Full name:</Col>{" "}
                                    <Col className={cx("col2")}>Nguyen Van Anh</Col>
                                </Row>
                                <Row>
                                    <Col className={cx("col1")}> Identification Number:</Col>
                                    <Col className={cx("col2")}>9809103902490</Col>
                                    <Col className={cx("col1")}>Day of Birth:</Col>{" "}
                                    <Col className={cx("col2")}>16/11/1998</Col>
                                </Row>{" "}
                                <Row>
                                    <Col className={cx("col1")}> E-Ticket has been sent to</Col>
                                    <Col className={cx("col2")}>Khoa.nguyen@gmail.com</Col>
                                </Row>
                                <hr />
                                <div className={cx("price", "d-flex")}>
                                    <span>Total Price</span>
                                    <span>1.000.000 VND</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx("ticket-qr")}>
                            <img src={qr} alt="" />
                            <span className={cx("ticket-scan")}>
                                Scan the code <span>to check-in</span>{" "}
                            </span>
                            <button className={cx("up")}>Download ticket</button>
                            <button className={cx("down")}>Cancel</button>
                        </div>
                    </div>
                    <div className={cx("ticket-btn")}>
                        <button className={cx("down")}> Go to Homepage</button>
                        <button className={cx("up")}>Book another</button>
                    </div>
                    <div className={cx("term")}>
                        <span>Cancellation Policy</span>
                        <span>Terms & Conditions</span>
                        <span>Travel Insurance</span>
                    </div>
                </div>

                <FooterMini />
            </div>
        </div>
    );
}

export default Success;
