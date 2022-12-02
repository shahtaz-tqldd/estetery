import React from "react";
import SearchItems from "./components/SearchItems";
import Properties from "./properties/Properties";

const Homepage = () => {
  return (
      <div>
          <div className="mt-12 flex flex-col lg:flex-row md:flex-row justify-between items-center">
          <h1 className="text-4xl font-bold">Search Propertise to Rent</h1>
          <input type="text" placeholder="search with searchbar" className="input input-bordered w-full max-w-xs" />
          </div>
          <SearchItems />
          <Properties/>
    </div>
  );
};

export default Homepage;
