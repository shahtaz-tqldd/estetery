import React, { useState } from "react";
import SearchItems from "./components/SearchItems";
import Properties from "./properties/Properties";

const Homepage = () => {
  const rev = {range:'$0 - $2500', type: 'all'}
  const [gotPlace, setGotPlace] = useState(null)
  const [filter, setFilter] = useState(rev)
  // const [value, setValue] = useState(null)

  const rangeMin = parseInt(filter?.range.split(" - ")[0].split('$')[1])
  const rangeMax = parseInt(filter?.range.split(" - ")[1].split('$')[1])
  const type = filter?.type
  const value = { rangeMin, rangeMax, type }

  console.log(value)
  const properties = [
    {
      id: 1,
      title: "Palm Harbor",
      price: 2095,
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      address: "269 Green Vallye Higland Lake",
      bedrooms: "3",
      bathrooms: "2",
      size: "5x7",
      location: "New Yourk,USA"
    },
    {
      id: 2,
      title: "Palm Harbor",
      price: 2095,
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      address: "269 Green Vallye Higland Lake",
      bedrooms: "3",
      bathrooms: "2",
      size: "5x7",
      location: "New Yourk,USA"
    },
    {
      id: 3,
      title: "Palm Harbor",
      price: 2095,
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      address: "269 Green Vallye Higland Lake",
      bedrooms: "3",
      bathrooms: "2",
      size: "5x7",
      location: "California,USA"
    },
    {
      id: 4,
      title: "Palm Harbor",
      price: 2095,
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      address: "269 Green Vallye Higland Lake",
      bedrooms: "3",
      bathrooms: "2",
      size: "5x7",
      location: "California,USA"
    },
    {
      id: 5,
      title: "Palm Harbor",
      price: 2095,
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      address: "269 Green Vallye Higland Lake",
      bedrooms: "3",
      bathrooms: "2",
      size: "5x7",
      location: "Los Angels,USA"
    },
    {
      id: 6,
      title: "Palm Harbor",
      price: 2095,
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      address: "269 Green Vallye Higland Lake",
      bedrooms: "3",
      bathrooms: "2",
      size: "5x7",
      location: "Los Angels,USA"
    },
    {
      id: 7,
      title: "Palm Harbor",
      price: 2095,
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      address: "269 Green Vallye Higland Lake",
      bedrooms: "3",
      bathrooms: "2",
      size: "5x7",
      location: "New Jarsey, USA"
    },
  ];
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
