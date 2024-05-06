import React from "react";
import AboutBackground from "../Assets/about-background.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          This is Md Tanbin Ahmmed, a Computer Engineer from Bangladesh.
        </h1>
        <p className="primary-text">
        Welcome to my corner of the web! I'm Md Tanbin Ahmmed, a passionate frontend web developer dedicated to crafting
        engaging and seamless digital experiences.I am Md Tanbin Ahmmed, a creative soul fascinated by the art and science of turning ideas into visually stunning and
        functional websites. My journey in frontend development has been shaped by HTML5, CSS, Bootstrap, Tailwind CSS, Javascript, ES6, DOM, React JS, GitHub. And a
        relentless drive to bring innovation to every project. Currently, I'm delving deeper into React JS to enhance my skill set and create
        even more robust web solutions.
        </p>
        
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
