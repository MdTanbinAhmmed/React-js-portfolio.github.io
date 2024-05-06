import React from "react";
import { AiFillStar } from "react-icons/ai";

const Skills = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Skills</p>
        <h1 className="primary-heading">Frontend web development</h1>
        <p className="primary-text">
          HTML5, CSS3, BOOTSTRAP5, TAILWIND CSS3, JAVASCRIPT, ES6, DOM, JSON, REACT JS, VIRTUAL DOM, COMPONENT, HOOKS, PROPS, GITHUB.
        </p>
        <h1 className="primary-heading">Digital marketing</h1>
        <p className="primary-text">
          Facebook marketing, Youtube Marketing, Google ads, Meta ads marketing, keyword research, Content writing, Google Drive.
        </p>
        <h1 className="primary-heading">Graphics design</h1>
        <p className="primary-text">
          Adobe photoshop, Adobe Illustrator, Photo Editing, Logo Design, Visiting card, Flyer design, Book, Calender, Poster, Baner.
        </p>
        <h1 className="primary-heading">Operating System</h1>
        <p className="primary-text">
          Windows 7/8/10/11.
        </p>
        <h1 className="primary-heading">Data entry</h1>
        <p className="primary-text">
          Microsoft Word, Microsoft Exell, Microsoft Power Point, Google Sheet, Google Docs.
        </p>
        
      </div>
      <div className="skills-section-bottom">
      
        
        <div className="skills-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Tanbin</h2>
      </div>
    </div>
  );
};

export default Skills;
