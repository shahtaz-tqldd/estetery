import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SearchItems from "./components/SearchItems";
import Properties from "./properties/Properties";

const Homepage = () => {
  // get properties data from backend api
  const properties = useLoaderData()
  
  // get selected place from search items
  const [gotPlace, setGotPlace] = useState(null)
  
  // get Filter result from search items
  const noFilter = { range: '$0 - $2500', type: 'All' }
  const [filter, setFilter] = useState(noFilter)
  const rangeMin = parseInt(filter?.range.split(" - ")[0].split('$')[1])
  const rangeMax = parseInt(filter?.range.split(" - ")[1].split('$')[1])
  const type = filter?.type
  const value = { rangeMin, rangeMax, type }

  return (
    <div>
      <SearchItems
        properties={properties}
        gotPlace={gotPlace}
        setGotPlace={setGotPlace}
        filter={filter}
        setFilter={setFilter}
      />
      <Properties properties={properties}
        gotPlace={gotPlace}
        value={value}
      />
    </div>
  );
};

export default Homepage;
