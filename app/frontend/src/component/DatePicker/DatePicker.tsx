import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomDatePicker from "./CustomDatePicker";

const CommonDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  type CustomInputProps = {
    value: string;
    onClick: () => void;
  };

  const ExampleCustomInput = forwardRef<HTMLDivElement, CustomInputProps>(
    ({ value, onClick }, ref) => (
      <CustomDatePicker value={value} onClick={onClick} ref={ref} />
    )
  );

  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        dateFormat="MMMM d"
        minDate={new Date()}
        customInput={<ExampleCustomInput value={""} onClick={() => {}} />}
      />
    </>
  );
};

export default CommonDatePicker;
