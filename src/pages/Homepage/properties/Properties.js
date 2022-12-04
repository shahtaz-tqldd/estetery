import React, { useState } from "react";
import PropertyCard from "./PropertyCard";

const Properties = ({ properties, gotPlace, value }) => {

  const { rangeMin, rangeMax, type } = value
  const propert = properties.filter(p=> p.price >= rangeMin && p.price <= rangeMax)

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      {
        // properties.filter(p=> (p.price >= rangeMin && p.price <= rangeMax) && <PropertyCard key={p.id} property={p} />)   

        propert.map((property) => (gotPlace ? property.location === gotPlace &&
          <PropertyCard key={property.id} property={property} />
          : <PropertyCard key={property.id} property={property} />
        ))
      }
    </div>
  );
};

export default Properties;
