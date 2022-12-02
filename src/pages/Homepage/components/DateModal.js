import React from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const DateModal = ({ selected, setSelected }) => {
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <div>
      <input type="checkbox" id="date-modal" className="modal-toggle" />
      <label htmlFor="date-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={footer}
            // onClick={()=><label htmlFor="date-modal"></label>}
          />
        </label>
      </label>
    </div>
  );
};

export default DateModal;
