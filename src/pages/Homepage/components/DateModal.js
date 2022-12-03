import React from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const DateModal = ({ selected, setSelected }) => {
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p className="text-center mt-3">You picked {format(selected, "PP")}.</p>;
  }
  return (
    <div>
      <input type="checkbox" id="date-modal" className="modal-toggle" />
      <label htmlFor="date-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h2 className="text-2xl font-normal text-center">Please Pick a date to move in</h2>
          <div className="flex justify-center items-center">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
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
