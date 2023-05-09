import classNames from "classnames/bind";

import arrow from "~/assets/imgs/arrow.png";
import qr from "~/assets/imgs/QR.png";
import Header from "~/components/Layout/components/Header";

import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Footer from "~/components/Layout/components/Footer";
import styles from "./TicketDetail.module.scss";

const cx = classNames.bind(styles);

function TicketDetail() {
    return (
        <div>
            <Header />
            <div className={cx("wrapper")}>
                <div className={cx("inner")}>
                    <div className={cx("ticket")}>
                        <h2>Ticket Details</h2>
                        <div className={cx("ticket-info")}>
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
                                    </div>
                                    <span>Passenger Details</span>
                                    <Row className={cx("row")}>
                                        <Col className={cx("col1")}> Passenger Type:</Col>
                                        <Col className={cx("col2")}>Adult</Col>
                                        <Col className={cx("col1")}>Full name:</Col>{" "}
                                        <Col className={cx("col2")}>Nguyen Van Anh</Col>
                                    </Row>
                                    <Row className={cx("row")}>
                                        <Col className={cx("col1")}> Identification Number:</Col>
                                        <Col className={cx("col2")}>9809103902490</Col>
                                        <Col className={cx("col1")}>Day of Birth:</Col>{" "}
                                        <Col className={cx("col2")}>16/11/1998</Col>
                                    </Row>{" "}
                                    <Row className={cx("row", "row-sub")}>
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
        </div>
    );
}

export default TicketDetail;
