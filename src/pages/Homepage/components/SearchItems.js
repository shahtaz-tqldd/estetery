import React, { useState } from "react";
import DateModal from "./DateModal";
import { AiOutlineCalendar, AiFillDownCircle } from "react-icons/ai";
import { format } from "date-fns";

const SearchItems = ({ properties, gotPlace, setGotPlace, setFilter }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [location, setLocation] = useState([])
  const [search, setSearch] = useState(false)
  const [searchPress, setSearchPress] = useState(false)
  let allLocation = []
  properties.map(p => !allLocation.includes(p.location) && allLocation.push(p.location))
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
  let searchedLocation = [];
  const handleGet = (e) => {
    e.preventDefault()
    const searchPress = e.target.value.toLowerCase()
    if (searchPress.length >= 2) {
      allLocation.map(p => p.toLowerCase().includes(`${searchPress}`) && searchedLocation.push(p))
      setLocation(searchedLocation)
      setSearchPress(true)
    } else {
      setSearchPress(false)
      setSearch(false)
    }
    if (gotPlace) {
      e.target.value.reset()
    }
  }
  const handleClick = () => {
    setSearch(!search)
    setLocation(allLocation)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const range = form.range.value
    const type = form.type.value
    const filter = {range, type}
    setFilter(filter)
  }
  return (
    <div>
      <div className="mt-12 flex flex-col lg:flex-row md:flex-row justify-between items-center relative">
        <h1 className="text-4xl font-bold">Search Propertise to Rent</h1>
        <form onClick={handleSearch} className="flex items-center">
          <input onKeyUp={handleGet} name="location" type="text" placeholder="Search with searchbar" className="input input-bordered w-full max-w-xs focus:outline-none" />
          <AiFillDownCircle className="-ml-8 text-primary text-lg cursor-pointer" onClick={handleClick} />
          <div className={`bg-white absolute right-0 top-12 w-full max-w-xs rounded p-3 ${(search || searchPress) ? 'block' : 'hidden'}`}>
            {location.length ? location.map(p => <div className="cursor-pointer p-2 hover:bg-primary hover:text-white">{p}</div>)
              : allLocation.map(p => <div className="cursor-pointer p-2 hover:bg-primary hover:text-white">{p}</div>)
            }
          </div>
          <input type="submit" value="Search" className="btn btn-primary ml-2" />
        </form>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-full lg:flex-row justify-between my-16 bg-base-100 p-6 rounded-lg">
          <div>
            <p className="text-neutral">Location</p>
            <h2 className="font-bold text-lg">{gotPlace ? gotPlace : 'All Place'}</h2>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div>
            <p className="text-neutral">When</p>
            <h2 className="font-bold text-lg flex items-center">
              {selectedDate ? format(selectedDate, "PP") : 'Select to Move in Date'} &nbsp;
              <label htmlFor="date-modal" className="cursor-pointer">
                <AiOutlineCalendar className="text-primary" />
              </label>
            </h2>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div>
            <p className="text-neutral">Price</p>
            <div className="flex flex-row items-center justify-between">
              <select name="range" className="select select-sm font-bold text-lg focus:outline-none pl-0">
                <option>$0 - $2500</option>
                <option>$500 - $1000</option>
                <option>$1000 - $1500</option>
                <option>$1500 - $2500</option>
              </select>
            </div>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div>
            <p className="text-neutral">Property Type</p>
            <div className="w-sm">
              <select name="type" className="select select-sm font-bold text-lg focus:outline-none pl-0">
                <option>Houses</option>
                <option>Apartment</option>
                <option>Duplex</option>
              </select>
            </div>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <button className="btn btn-primary px-12">Search</button>
        </div>
      </form>
      <DateModal selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </div>
  );
};

export default SearchItems;
