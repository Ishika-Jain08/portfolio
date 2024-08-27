import React from "react";
import "../Experience/Experience.css"
import Code from "../../assets/CODE.jpeg";
import IEd from  "../../assets/Innvo.jpeg"
import IBytes from "../../assets/innobyte.jpeg"
import becil from "../../assets/becil.png"


const Experience = () => {
  return (
    <div className="exp-container">
    <span className="exp">MY EXPERIENCE</span>
      <div className="exp-content">
        <div className="exp-list">
        <img src={Code} />
                <h3>CODTECH IT SOLUTIONS</h3>
                <h4>
                    <span>
                       Web Development(Front-End)
                    </span>
                </h4>
              
                <p>
                • Developed and maintained responsive web applications using HTML, CSS, JavaScript, and React.js, ensuring compatibility across various devices and browsers.
                   <br/>
                    • Implemented interactive features using React hooks and state management, enhancing user experience and reducing page load times.
                   <br/>
                    • Created reusable and modular React components, improving code maintainability and development efficiency.
                </p>
        </div>



        <div className="exp-list">
        <img src={IBytes} />
                <h3>InnoBytes Services</h3>
                <h4>
                    <span>
                       Web Development(Back-End)
                    </span>
                </h4>
              
                <p>
                    • Developed and maintained RESTful APIs using [programming language or framework, e.g., react.js, Node.js, express, etc.], enabling efficient data exchange between the frontend and backend systems.
                   <br/>
                    • Designed and optimized database schemas and queries for [database technology, e.g., MongoDB, PostgreSQL], resulting in improved data retrieval performance.
                   <br/>
                   • Implemented user authentication and authorization mechanisms, ensuring secure access to sensitive data and resources.
                </p>
        </div>
       

        <div className="exp-list">
        <img src={IEd} />
                <h3>InnovateEd Solutions</h3>
                <h4>
                    <span>
                       Java Programming
                    </span>
                </h4>
              
                <p>
                    • Developed and maintained Java-based applications, utilizing frameworks such as Spring and Hibernate for efficient data management and application structure.
                   <br/>
                    • Implemented object-oriented programming principles to design and develop scalable and maintainable code, following best practices and design patterns.
                </p>
        </div>


        <div className="exp-list">
        <img src={becil} />
                <h3>Broadcast Engineering Consultants India Limited</h3>
                <h4>
                    <span>
                       MERN STACK
                    </span>
                </h4>
              
                <p>
                    • Developed full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js), creating dynamic and responsive user interfaces and robust server-side logic.
                   <br/>
                    • Implemented user authentication and authorization using JWT (JSON Web Tokens) and Passport.js, ensuring secure access to application resources.
                   <br/>
                    • Participated in the deployment of applications on cloud platforms like AWS, Heroku, or DigitalOcean, automating deployment pipelines and managing server configurations.
                </p>
        </div>



      </div>
    </div>
  );
};

export default Experience;
