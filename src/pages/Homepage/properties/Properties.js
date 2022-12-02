import React from "react";
import PropertyCard from "./PropertyCard";

const Properties = () => {
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
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default Properties;
