import React from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const DateModal = ({ selectedDate, setSelectedDate }) => {
  let footer = <p className="text-center mt-3 text-primary">Please pick a day.</p>;
  if (selectedDate) {
    footer = <p className="text-center mt-3 text-primary">You picked {format(selectedDate, "PP")}.</p>;
  }
  return (
    <div>
      <input type="checkbox" id="date-modal" className="modal-toggle" />
      <label htmlFor="date-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label htmlFor="date-modal" className="btn btn-sm btn-circle btn-error absolute right-2 top-2">✕</label>
          <div className="flex justify-center items-center">
            <DayPicker
              mode="single"
              selectedDate={selectedDate}
              onSelect={setSelectedDate}
              footer={footer}
            // onClick={()=><label htmlFor="date-modal"></label>}
            />
          </div>
        </label>
      </label>
    </div>
  );
};

export default DateModal;
