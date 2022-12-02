import React, { useState } from "react";
import DateModal from "./DateModal";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";

const SearchItems = () => {
  const [selected, setSelected] = useState(new Date());
  return (
    <>
      <div className="flex flex-col w-full lg:flex-row justify-between my-16 bg-base-100 p-6 rounded-lg">
        <div>
          <p className="text-neutral">Location</p>
          <h2 className="font-bold text-lg">New York, USA</h2>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div>
          <p className="text-neutral">When</p>
          <h2 className="font-bold text-lg flex items-center">
            Select to Move in Date &nbsp;
            <label htmlFor="date-modal">
              <AiOutlineCalendar className="text-primary" />
            </label>
          </h2>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div>
          <p className="text-neutral">Price</p>
          <div className="flex flex-row items-center justify-between">
            <h2 className="font-bold text-lg">$200 - $500</h2>&nbsp;&nbsp;
            <span>
              <FiChevronDown className="bg-primary text-white rounded-full" />
            </span>
          </div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div>
          <p className="text-neutral">Property Type</p>
          <div className="flex flex-row items-center justify-between">
            <h2 className="font-bold text-lg">Houses</h2>&nbsp;&nbsp;
            <span>
              <FiChevronDown className="bg-primary text-white rounded-full" />
            </span>
          </div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <button className="btn btn-primary">Search</button>
      </div>
      <DateModal selected={selected} setSelected={setSelected} />
    </>
  );
};

export default SearchItems;
