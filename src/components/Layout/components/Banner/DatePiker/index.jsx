import classNames from "classnames/bind";
import clsx from "clsx";
import { useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./Datepicker.module.scss";

import "react-datepicker/dist/react-datepicker.css";

const cx = classNames.bind(styles);
const now = new Date();
const month = now.toLocaleString("en-US", { month: "long" });
const day = now.getDate();
const currentDate = month + " " + day;
function Datepicker() {
    const [selectedDate, setSelectedDate] = useState(null);
    return (
        <div className={cx("date")}>
            <DatePicker
                className={clsx(styles.content)}
                placeholderText={currentDate}
                placeholderTextColor="black"
                selected={selectedDate}
                dateFormat="MMM dd"
                onChange={(date) => setSelectedDate(date)}
                // onSelect={handleDateSelect}
                minDate={new Date()}
            />
        </div>
    );
}

export default Datepicker;
