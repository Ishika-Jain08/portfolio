/* eslint-disable react/no-unescaped-entities */
import job from "../../assets/job_portal_about.svg";
import brick from "../../assets/brick.png";
import FS from "../../assets/FMS.jpeg";
import Laza from "../../assets/lazaWeb.jpg";
import code from "../../assets/code.png";
import ai from "../../assets/ai.png";

const Project = () => {
  return (
    <>
      <div className="mb-8 p-20 mt-4 h-[650px]">
        <span className="block text-lg font-semibold text-gray-700">
          PROJECTS
        </span>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          What I've Built
        </h1>
        <div className="flex flex-wrap gap-12 ml-36">
          {/* Project Cards */}
          <div className="relative w-[28%] h-[204px] rounded-lg shadow-md transition-transform duration-500 hover:scale-105">
            <img
              className="w-full h-[160px] object-cover rounded-lg object-top"
              src={job}
              alt="Job Portal Application"
            />
            <div className="text-center font-bold text-sm mt-2">
              Job Portal Application
            </div>
            <div className="absolute top-[12%] left-0 w-[70%] h-[50%] bg-black/70 text-white opacity-0 transition-opacity duration-500 p-2 rounded-lg text-center ml-10 hover:opacity-100">
              <p className="font-medium">
                Job Portal Application
                <br />
                MERN STACK
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://job-portal-jr9p.onrender.com"
                className="block mt-2 bg-blue-600 text-white rounded px-3 py-1"
              >
                More Info
              </a>
            </div>
          </div>

          <div className="relative w-[28%] h-[204px] rounded-lg shadow-md transition-transform duration-500 hover:scale-105">
            <img
              className="w-full h-[160px] object-cover rounded-lg object-top"
              src={ai}
              alt="AI-Mocker-Interview"
            />
            <div className="text-center font-bold text-sm mt-2">
              AI-Mocker-Interview
            </div>
            <div className="absolute top-[12%] left-0 w-[80%] h-[50%] bg-black/70 text-white opacity-0 transition-opacity duration-500 p-2 rounded-lg text-center ml-10 hover:opacity-100">
              <p className="font-medium">
                AI-Mocker-Interview
                <br />
                NextJS, Neon, Drizzle ORM
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://ai-mocker-interview-two.vercel.app/"
                className="block mt-2 bg-blue-600 text-white rounded px-3 py-1"
              >
                More Info
              </a>
            </div>
          </div>

          <div className="relative w-[28%] h-[204px] rounded-lg shadow-md transition-transform duration-500 hover:scale-105">
            <img
              className="w-full h-[160px] object-cover rounded-lg object-top"
              src={code}
              alt="Realtime Code Editor"
            />
            <div className="text-center font-bold text-sm mt-2">
              Realtime Code Editor
            </div>
            <div className="absolute top-[12%] left-0 w-[70%] h-[50%] bg-black/70 text-white opacity-0 transition-opacity duration-500 p-2 rounded-lg text-center ml-10 hover:opacity-100">
              <p className="font-medium">
                Realtime Code Editor
                <br />
                Socket.io
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://realtime-code-editor-2-nhwj.onrender.com/"
                className="block mt-2 bg-blue-600 text-white rounded px-3 py-1"
              >
                More Info
              </a>
            </div>
          </div>

          <div className="relative w-[28%] h-[204px] rounded-lg shadow-md transition-transform duration-500 hover:scale-105">
            <img
              className="w-full h-[160px] object-cover rounded-lg object-top"
              src={Laza}
              alt="Animated Website"
            />
            <div className="text-center font-bold text-sm mt-2">
              Animated Website
            </div>
            <div className="absolute top-[12%] left-0 w-[70%] h-[50%] bg-black/70 text-white opacity-0 transition-opacity duration-500 p-2 rounded-lg text-center ml-10 hover:opacity-100">
              <p className="font-medium">
                Lazarev - Product Design Agency
                <br />
                GsapJS
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://ishika-jain08.github.io/LAZAREV._WEBSITE/"
                className="block mt-2 bg-blue-600 text-white rounded px-3 py-1"
              >
                More Info
              </a>
            </div>
          </div>

          <div className="relative w-[28%] h-[204px] rounded-lg shadow-md transition-transform duration-500 hover:scale-105">
            <img
              className="w-full h-[160px] object-cover rounded-lg object-top"
              src={FS}
              alt="Management System"
            />
            <div className="text-center font-bold text-sm mt-2">
              Management System
            </div>
            <div className="absolute top-[12%] left-0 w-[80%] h-[50%] bg-black/70 text-white opacity-0 transition-opacity duration-500 p-2 rounded-lg text-center ml-10 hover:opacity-100">
              <p className="font-medium">
                Faculty Management System
                <br />
                MERN STACK
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Ishika-Jain08/Fav-app"
                className="block mt-2 bg-blue-600 text-white rounded px-3 py-1"
              >
                More Info
              </a>
            </div>
          </div>

          <div className="relative w-[28%] h-[204px] rounded-lg shadow-md transition-transform duration-500 hover:scale-105">
            <img
              className="w-full h-[160px] object-cover rounded-lg object-top"
              src={brick}
              alt="Brick Breaker Game"
            />
            <div className="text-center font-bold text-sm mt-2">Gaming</div>
            <div className="absolute top-[12%] left-0 w-[70%] h-[50%] bg-black/70 text-white opacity-0 transition-opacity duration-500 p-2 rounded-lg text-center ml-10 hover:opacity-100">
              <p className="font-medium">
                Brick Breaker Game
                <br />
                Java
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Ishika-Jain08/Brick_Breaker_Game_Java"
                className="block mt-2 bg-blue-600 text-white rounded px-3 py-1"
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
