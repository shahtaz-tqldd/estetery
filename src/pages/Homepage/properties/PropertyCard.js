import React, { useState } from "react";
import { FaBed } from "react-icons/fa";
import { TbBath, TbResize } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import toast from "react-hot-toast";

const PropertyCard = ({ property }) => {
  const { title, price, img, address, bedrooms, bathrooms, size } = property;
  const [clickedFav, setClickedFav] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    if (!clickedFav) {
      setClickedFav(!clickedFav)
      toast.success("Added to Favourite")
    } else {
      setClickedFav(!clickedFav)
      toast.error("Remove from Favourite")
    }
  }
  return (
    <div className="card bg-base-100 shadow-xl rounded-xl">
      <figure className="h-56">
        <img src={img} alt={address} className="min-h-full w-full" />
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
            <h2 className="card-title mt-2">{title}</h2>
          </div>
          <div onClick={handleClick} className={`border-2 rounded-full h-9 w-9 flex justify-center items-center mt-2 text-primary ${clickedFav && 'bg-primary text-white'} cursor-pointer`}>
            <AiOutlineHeart />
          </div>
        </div>
        <p className="text-sm mb-3">{address}</p>
        <div className="divider -my-2"></div>
        <div className="flex justify-between text-xs">
          <div className="flex items-center">
            <FaBed className="text-primary" /> &nbsp;&nbsp;
            {bedrooms} Beds
          </div>
          <div className="flex items-center">
            <TbBath className="text-primary" /> &nbsp;&nbsp;
            {bathrooms} Bathrooms
          </div>
          <div className="flex items-center">
            <TbResize className="text-primary" /> &nbsp;&nbsp;
            {size}m<sup>2</sup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
