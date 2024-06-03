import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomDatePicker from "./CustomDatePicker";

type Props = {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
};

const CommonDatePicker = ({ setFieldValue }: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date: Date | null) => {
        setSelectedDate(date);
        setFieldValue("datePicker", date);
      }}
      dateFormat="MMMM d"
      minDate={new Date()}
      customInput={<CustomDatePicker />}
    />
  );
};

export default CommonDatePicker;
