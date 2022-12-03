import React, { useState } from "react";
import DateModal from "./DateModal";
import { AiOutlineCalendar, AiFillDownCircle } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { format } from "date-fns";

const SearchItems = ({ properties }) => {
  const [selected, setSelected] = useState(null);
  const [locate, setLocate] = useState([])
  const [search, setSearch] = useState(false)
  const [searchPress, setSearchPress] = useState(false)
  const [gotPlace, setGotPlace] = useState(null)
  let location = []
  properties.map(p => !location.includes(p.location) && location.push(p.location))
  const handleSearch = (e) => {
    e.preventDefault()
    const form = e.target
    const gotPlace = form.textContent
    if (gotPlace) {
      setGotPlace(gotPlace)
      setSearch(false)
      setSearchPress(false)
    }

  }
  let location2 = [];
  const handleGet = (e) => {
    e.preventDefault()
    const searchPress = e.target.value.toLowerCase()
    if (searchPress.length >= 2) {
      location.map(p => p.toLowerCase().includes(`${searchPress}`) && location2.push(p))
      setLocate(location2)
      setSearchPress(true)
    } else {
      setSearchPress(false)
      setSearch(false)
    }
    if (gotPlace) {
      e.target.reset()
    }
  }
  console.log(gotPlace)
  const handleClick = () => {
    setSearch(!search)
    setLocate(location)
  }
  return (
    <div>
      <div className="mt-12 flex flex-col lg:flex-row md:flex-row justify-between items-center relative">
        <h1 className="text-4xl font-bold">Search Propertise to Rent</h1>
        <form onClick={handleSearch} className="flex items-center">
          <input onKeyUp={handleGet} name="location" type="text" placeholder="search with searchbar" className="input input-bordered w-full max-w-xs" />
          <AiFillDownCircle onClick={handleClick} />
          <div className={`bg-white absolute right-0 top-12 w-full max-w-xs rounded p-3 ${(search || searchPress) ? 'block' : 'hidden'}`}>
            {locate.length ? locate.map(p => <div className="cursor-pointer p-2 hover:bg-primary hover:text-white">{p}</div>)
              : location.map(p => <div className="cursor-pointer p-2 hover:bg-primary hover:text-white">{p}</div>)
            }
          </div>
        </form>

      </div>
      <div className="flex flex-col w-full lg:flex-row justify-between my-16 bg-base-100 p-6 rounded-lg">
        <div>
          <p className="text-neutral">Location</p>
          <h2 className="font-bold text-lg">{gotPlace ? gotPlace : 'All Place'}</h2>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div>
          <p className="text-neutral">When</p>
          <h2 className="font-bold text-lg flex items-center">
            {selected ? format(selected, "PP") : 'Select to Move in Date'} &nbsp;
            <label htmlFor="date-modal" className="cursor-pointer">
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
    </div>
  );
};

export default SearchItems;
