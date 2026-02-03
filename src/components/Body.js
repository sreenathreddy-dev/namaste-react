import React, { useEffect } from "react";
import RestaurantCard, { withFourPlusRating } from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const { resId } = useParams();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4862292&lng=78.40621680000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const topRestaurants = await data.json();
    // console.log(topRestaurants);
    const latestResObj =
      topRestaurants?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(latestResObj);
    setFilteredRestaurants(latestResObj);
  };

  const TopRatedRestaurants = withFourPlusRating(RestaurantCard);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="flex">
          <input
            className="border border-solid border-black p-4 mx-4 rounded-md"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-orange-400 text-white rounded-md m-2"
            onClick={() => {
              setSearchText(searchText);
              // console.log(searchText);
              const filterRes = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setFilteredRestaurants(filterRes);
            }}
          >
            Search
          </button>
          <button
            className="bg-cyan-400 text-black rounded-md m-2 px-4 py-2"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res?.info?.avgRating > 4
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) =>
          restaurant?.info?.avgRating >= 4 ? (
            <TopRatedRestaurants
              key={restaurant?.info?.id}
              resData={restaurant}
            />
          ) : (
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
