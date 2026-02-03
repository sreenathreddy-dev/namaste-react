import React from "react";
import { CON_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, id } =
    resData?.info;
  console.log(resData, "resData");
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg">
      <img
        className="w-full rounded-md"
        src={CON_URL + cloudinaryImageId}
        // src={CON_URL} {cloudinaryImageId}
        alt={name}
      />
      <h3 className="text-sm font-bold py-3">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating}</h5>
      <h6>{costForTwo}</h6>
    </div>
  );
};

export const withFourPlusRating = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <p>Top rated restaurant</p>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
