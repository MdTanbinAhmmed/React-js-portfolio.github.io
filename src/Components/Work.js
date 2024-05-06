import React from "react";
import Practice1 from "../Assets/work1.jpg";
import Practice2 from "../Assets/work2.jpg";
import Practice3 from "../Assets/work3.jpg";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";


const Work = () => {
  const workInfoData = [
    {
      image: Practice1,
      title: "Choose How Often",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: Practice2,
      title: "Portfolio",
      text: "Made by HTML5,CSS3,Tailwind CSS3",
    },
    {
      image: Practice3,
      title: "TO-DO Web Application",
      text: "Made by HTML5, CSS3, JavaScript",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">My Projects</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
