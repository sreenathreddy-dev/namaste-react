import React from "react";
import { CON_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, id } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CON_URL + cloudinaryImageId}
        // src={CON_URL} {cloudinaryImageId}
        alt={name}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating}</h5>
      <h6>{costForTwo}</h6>
    </div>
  );
};

export default RestaurantCard;
