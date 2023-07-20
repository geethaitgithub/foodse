import React from "react";
import logo from "../Images/foodselogo.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className=" bg-slate-300p-3 m-2">
      <div className="about-section">
        <h1 className=" font-bold ">About Us Page</h1>
        <p>We provde quality food on time.</p>
       
      </div>

      <h2 className="text-align:center font-bold">Our Team</h2>
      <div className="card">
        <img className=" w-40" src={logo} alt="foodse"></img>
        <div className="container">
         
          <p>
            <Link to="/foodse"><button className="button">HOME</button></Link>
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default About;
