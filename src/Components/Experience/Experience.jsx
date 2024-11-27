import Code from "../../assets/CODE.jpeg";
import IBytes from "../../assets/innobyte.jpeg";
import becil from "../../assets/becil.png";

const Experience = () => {
  return (
    <div className="py-24 px-6">
      <span className="relative left-3 text-xl font-semibold text-gray-800">
        MY EXPERIENCE
      </span>
      <div className="p-2">
        <div className="my-5 p-5 rounded-lg transition-transform duration-500 shadow-md hover:scale-105">
          <img
            src={Code}
            alt="Codtech IT Solutions"
            className=" w-14 rounded-md"
          />
          <h3 className="text-lg font-bold mt-4">CODTECH IT SOLUTIONS</h3>
          <h4 className="text-md font-semibold text-gray-700 mt-2">
            <span>Web Development (Front-End)</span>
          </h4>
          <p className="text-sm text-gray-600 mt-4">
            • Developed and maintained responsive web applications using HTML,
            CSS, JavaScript, and React.js, ensuring compatibility across various
            devices and browsers.
            <br />
            • Implemented interactive features using React hooks and state
            management, enhancing user experience and reducing page load times.
            <br />• Created reusable and modular React components, improving
            code maintainability and development efficiency.
          </p>
        </div>

        <div className="my-5 p-5 rounded-lg transition-transform duration-500 shadow-md hover:scale-105">
          <img
            src={IBytes}
            alt="InnoBytes Services"
            className="w-20 rounded-md"
          />
          <h3 className="text-lg font-bold mt-4">InnoBytes Services</h3>
          <h4 className="text-md font-semibold text-gray-700 mt-2">
            <span>Web Development (Back-End)</span>
          </h4>
          <p className="text-sm text-gray-600 mt-4">
            • Developed and maintained RESTful APIs using React.js, Node.js, and
            Express, enabling efficient data exchange between frontend and
            backend systems.
            <br />
            • Designed and optimized database schemas and queries for MongoDB,
            resulting in improved data retrieval performance.
            <br />• Implemented user authentication and authorization
            mechanisms, ensuring secure access to sensitive data and resources.
          </p>
        </div>

        <div className="my-5 p-5 rounded-lg transition-transform duration-500 shadow-md hover:scale-105">
          <img src={becil} alt="BECIL" className=" w-14 rounded-md" />
          <h3 className="text-lg font-bold mt-4">
            Broadcast Engineering Consultants India Limited
          </h3>
          <h4 className="text-md font-semibold text-gray-700 mt-2">
            <span>MERN STACK</span>
          </h4>
          <p className="text-sm text-gray-600 mt-4">
            • Developed full-stack web applications using the MERN stack
            (MongoDB, Express, React, Node.js), creating dynamic and responsive
            user interfaces and robust server-side logic.
            <br />
            • Implemented user authentication and authorization using JWT (JSON
            Web Tokens) and Passport.js, ensuring secure access to application
            resources.
            <br />• Participated in the deployment of applications on cloud
            platforms like AWS, Render, and Vercel, managing server
            configurations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
