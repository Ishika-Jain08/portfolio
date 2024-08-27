import React from "react";
import "../Projects/Project.css";
import ImgPro from "../../assets/weatherr.avif";
import brick from "../../assets/brick.png";
import Esite from "../../assets/site.avif";
import SLA from "../../assets/loginSign.jpg";
import ECF from "../../assets/foody.jpg";
import FS from "../../assets/FMS.jpeg";
import Laza from "../../assets/lazaWeb.jpg"
const Project = () => {
  return (
    <>
      <div className="pro-container">
        <span>PROJECTS</span>
        <h1>What I've Built</h1>
        <div className="pro-con">
          <div className="pro-card">
            <img className="img-box" src={ImgPro} />

            <div className="pro-content">
              <h2>Weather Application</h2>
            </div>
            <div className="overlay">
              <p className="name">
                Weather Application
                <br />
                ReactJS
              </p>
              <a className="btn" href="https://github.com/Ishika-Jain08/Weather_AppCOD4490">
                More Info
              </a>
            </div>
          </div>

          

          <div className="pro-card">
            <img className="img-box" src={FS} />

            <div className="pro-content">
              <h2>Management System</h2>
            </div>
            <div className="overlay">
              <p className="name">
               Faculty Management System
                <br />
               MERN STACK
              </p>
              <a className="btn" href="">
                More Info
              </a>
            </div>
          </div>

          <div className="pro-card">
            <img className="img-box" src={SLA} />

            <div className="pro-content">
              <h2>Login_Signup_Authentication</h2>
            </div>
            <div className="overlay">
              <p className="name">
                Login_Signup
                <br />
                ExpressJS
              </p>
              <a className="btn" href="https://github.com/Ishika-Jain08/LoginSignup_Page">
                More Info
              </a>
            </div>
          </div>

          <div className="pro-card">
            <img className="img-box" src={ECF} />

            <div className="pro-content">
              <h2>E-commerce site</h2>
            </div>
            <div className="overlay">
              <p className="name">
                Food Delivery Website
                <br />
                MERN STACK
              </p>
              <a className="btn" href="https://github.com/Ishika-Jain08/Food_Web">
                More Info
              </a>
            </div>
          </div>


          <div className="pro-card">
            <img className="img-box" src={Laza} />

            <div className="pro-content">
              <h2>Animated Website</h2>
            </div>
            <div className="overlay">
              <p className="name">
              Lazarev. -Product Design Agency.
                <br />
               GsapJS
              </p>
              <a className="btn" href="https://ishika-jain08.github.io/LAZAREV._WEBSITE/">
                More Info
              </a>
            </div>
          </div>


          <div className="pro-card">
            <img className="img-box" src={brick} />

            <div className="pro-content">
              <h2>Gaming</h2>
            </div>
            <div className="overlay">
              <p className="name">
                Brick Breaker Game
                <br />
                Java
              </p>
              <a
                className="btn"
                href="https://github.com/Ishika-Jain08/Brick_Breaker_Game_Java"
              >
                More Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
