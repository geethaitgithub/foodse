import React from "react";
import food from "../Images/onlinefoodorder.png";

const About = () => {
  return (
    <div className=" bg-slate-300p-3 m-5 p-5 flex">
        <div className="about-left text-lg font-serif font-semibold">
        <p>We provde quality food on time.</p>
        <br/>
          <h1>
            Welcome to <br/> The World Of <br/>
            <span>Tasty & Fresh Food</span>
          </h1>
          <h4>
            "Better you will feel if you eat a <span>FOODSE</span> healthy
            meal"
          </h4>
        </div>
        <div className="about-right">
          <img src={food} alt="foodorder"></img>
        </div>
      </div>
      
  );
};

export default About;
