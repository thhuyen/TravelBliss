import classNames from "classnames/bind";
import stylesSummary from "./BookingSummary.module.scss";
import { useMemo } from "react";

const cx1 = classNames.bind(stylesSummary);

function BookingSummary({ tickets, seats }) {
    const count = useMemo(() => {
        const standard = seats.filter((seat) => seat.coach === 1);
        const cabin = seats.filter((seat) => seat.coach === 2);

        return {
            standard: standard.length,
            cabin: cabin.length,
        };
    }, []);

    return (
        <div className={cx1("booking-summary")}>
            <div className={cx1("title")}>Booking Summary</div>

            <div className={cx1("wrapper")}>
                <div className={cx1("part1")}>
                    <span>One way trip - Ha Noi to Sai Gon</span> <br />
                    Train {tickets.train}
                    <br />
                    Departs at {tickets.departureTime} {tickets.departureDate}, 2023
                </div>

                <div className={cx1("part2")}>
                    Booking items <br />
                    {count.standard > 0 ? (
                        <div>
                            <span>Standard Seat x {count.standard} </span>
                            <span className={cx1("price")}>1.000.000 VND</span>
                        </div>
                    ) : null}
                    {count.cabin > 0 ? (
                        <div>
                            <span>4 cabins Seat x {count.cabin} </span>
                            <span className={cx1("price")}>2.000.000 VND</span>
                        </div>
                    ) : null}
                </div>

                <div className={cx1("part3")}>
                    <span>Total</span>
                    <span className={cx1("total")}>
                        {(count.standard * 1000000 + count.cabin * 2000000)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                        VND
                    </span>
                </div>
                <button className={cx1("btn-continue")}>Continue</button>
            </div>
        </div>
    );
}

export default BookingSummary;
