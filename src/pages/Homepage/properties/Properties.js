import React from "react";
import PropertyCard from "./PropertyCard";

const Properties = ({ properties, gotPlace, value }) => {
  const { rangeMin, rangeMax, type } = value
  const filterProperties = properties.filter(p => p.price >= rangeMin && p.price <= rangeMax && (type==='All'? p.type==="Houses" ||"Apartment" || "Duplex" : p.type === type) )
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      { filterProperties.length ?
        filterProperties.map((property) => (gotPlace ? property.location === gotPlace &&
          <PropertyCard key={property.id} property={property} />
          : <PropertyCard key={property.id} property={property} />
        ))
        : <h1 className="text-3xl font-bold">No items found!</h1>
      }
    </div>
  );
};

export default Properties;
