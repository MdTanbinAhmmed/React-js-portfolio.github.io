import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import My from "../Assets/my.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
          
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            This is Md Tanbin Ahmmed,
          </h1>
          <p className="primary-text">
            A passionate Frontend Web Developer from Bangladesh.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
        <img className="my" src={My} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
