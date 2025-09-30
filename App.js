import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          height={125}
          src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-134749604.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img className="res-logo" src={props?.resImg} alt="Raja rani Ruchulu" />
      <h3>{props?.resName}</h3>
      <h4>{props?.cuisine}</h4>
      <h5>{props?.rating}</h5>
      <h6>{props?.deliveryTime}</h6>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resImg="https://b.zmtcdn.com/data/pictures/2/97362/e99a1c0b5c8543afe74eccd35737facb_o2_featured_v2.jpg"
          resName="Raja rani Ruchulu"
          cuisine="Biryani, South indian, Asian"
          rating="4.1 Stars"
          deliveryTime="25 minutes"
        />
        <RestaurantCard
          resImg="https://b.zmtcdn.com/data/pictures/chains/5/90195/24697b617bb8aaf5b1c7df9a7074a662.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
          resName="KFC"
          cuisine="Chicken wings, Burgers"
          rating="3.8 Stars"
          deliveryTime="30 minutes"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
