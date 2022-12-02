import React, { useState } from "react";
import { FaBed } from "react-icons/fa";
import { TbBath } from "react-icons/tb";
import { SlSizeActual } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";

const PropertyCard = ({ property }) => {
    const { title, price, img, address, bedrooms, bathrooms, size } = property;
    const [clickedFav, setClickedFav] = useState(false)
  return (
    <div className="card bg-base-100 shadow-xl rounded-xl">
      <figure>
        <img src={img} alt={address} />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <div>
            <h2 className="text-primary text-2xl font-bold">
              ${price}
              <span className="text-lg font-normal text-neutral">
                /per month
              </span>
            </h2>
            <h2 className="card-title">{title}</h2>
          </div>
                  <div onClick={()=>setClickedFav(!clickedFav)} className={`border-2 rounded-full h-9 w-9 flex justify-center items-center mt-2 text-primary ${clickedFav && 'bg-primary text-white'} cursor-pointer`}>
            <AiOutlineHeart />
          </div>
        </div>
        <p>{address}</p>
        <div className="divider -my-2"></div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <FaBed className="text-primary" /> &nbsp;
            {bedrooms} Beds
          </div>
          <div className="flex items-center">
            <TbBath className="text-primary" /> &nbsp;
            {bathrooms} Bathrooms
          </div>
          <div className="flex items-center">
            <SlSizeActual className="text-primary" /> &nbsp;
            {size}m<sup>2</sup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
