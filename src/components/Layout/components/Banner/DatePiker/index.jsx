import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
function DatePiker() {
    const [selectedDate, setSelectedDate] = useState([]);

    return (
        <div>
            <div onClick={() => console.log("Button clicked!")}>{selectedDate}</div>
            <DatePicker label="Basic date picker" />
        </div>
    );
}

export default DatePiker;
