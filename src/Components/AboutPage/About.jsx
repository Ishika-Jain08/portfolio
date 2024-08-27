import React from "react";
import "../AboutPage/About.css"
import  my from "../../assets/socail pick.jpg"

function About() {
  return (
    <>
      <section className="about-container">
        <div className="about-content">
          <span className="about">ABOUT</span>
           <h1 className="defines">What defines me</h1>
          <div className="inter-content">
          <div>
            <p>
              Jai Jinendra!🌟 I'm Ishika Jain, a dedicated B.Tech (Computer
              Science)  student at Lakshmi Narayan  <br/>College of Technology and
              Science.
              
               With a strong passion for Web Development, <br/>I've been
              immersing myself in coursework and extracurricular activities that
              align with my career goals.
              </p>
               <p>
              
              Completed comprehensive training in Full-Stack Java from Capgemini and MERN Stack from <br></br> Broadcast Engineering Consultants India(Becil), gaining expertise in end-to-end development<br></br> across multiple technology stacks
              </p>
              <p>
              Currently, my goal is to explore new opportunities and collaborate on exciting
              projects. <br/>Feel free to connect with me at
              ishikajian@gmail.com. <br/>I am excited about engaging in meaningful
              discussions and potential collaborations that<br/> contribute to the
              ever-evolving landscape of technology. Let's connect and explore
              the possibilities together!
            </p>
            <button><a href="/contact" className="talk">Let's Talk</a></button>
            </div>
            <img src={my} alt="" className="img" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
