import React from "react";
import Product from "../Product/Product";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img
          src="https://i.ibb.co/80PC38G/amazon-home.jpg"
          alt="home-img"
          className="home-image"
        />
        <div className="home-row">
          <Product />
          <Product />
        </div>
        <div className="home-row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home-row">
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Home;
