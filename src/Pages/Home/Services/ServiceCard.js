import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, price, img } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between">
          <span className="text-sm font-bold text-orange-600">
            Price: ${price}
          </span>
          <Link to={`/services/${_id}`}>
            <FaArrowRightLong className="text-orange-600"></FaArrowRightLong>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
