import React, { useEffect } from "react";

const RestaurantMenu = () => {
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4862292&lng=78.40621680000001&restaurantId=932238&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json, "Some random text");
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <div>
      <h1>Restaurant name</h1>
      <h3>Menu</h3>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
