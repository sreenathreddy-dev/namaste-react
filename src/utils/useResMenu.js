import { useState, useEffect } from "react";
const useResMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4862292&lng=78.40621680000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const topRestaurants = await data.json();
    setResInfo(topRestaurants);

    // const latestResObj =
    //   topRestaurants?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants;
  };
  return resInfo;
};

export default useResMenu;
