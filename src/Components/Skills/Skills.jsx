import expIMG from "../../assets/express.webp";
import javaIMG from "../../assets/java.svg";
import mongoDB from "../../assets/mongodb.svg";
import mySql from "../../assets/mysql.svg";
import html from "../../assets/html5.svg";
import javaScript from "../../assets/javascript.svg";
import react from "../../assets/react.svg";
import node from "../../assets/nodejs.svg";
import next from "../../assets/nextjs-icon.svg";
import sql from "../../assets/sql.svg";
import tailwind from "../../assets/tailwind.svg";
import redux from "../../assets/redux.png";
import TS from "../../assets/ts.png";
import postman from "../../assets/postman.svg";
import neon from "../../assets/neon.png";
import orm from "../../assets/orm.png";
import postsql from "../../assets/postsql.svg";

function Skills() {
  return (
    <>
      <section className="w-full p-4 mt-5">
        <div className="text-center">
          <span className="text-lg font-semibold text-gray-700">SKILLS</span>
          <h1 className="text-2xl font-bold text-gray-800 mt-2">
            What I Can Do
          </h1>
        </div>
        <ul className="relative flex flex-wrap items-center justify-start gap-4 mt-10 px-4">
          <li className="w-[15%] h-16 flex justify-center items-center gap-5 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:text-blue-500">
            <img src={html} className="w-10" alt="HTML" />
            HTML
          </li>
          <li className="w-[15%] h-16 flex justify-center items-center gap-5 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:text-blue-500">
            <img src={tailwind} className="w-10" alt="Tailwind" />
            Tailwind
          </li>
          <li className="w-[15%] h-16 flex justify-center items-center gap-5 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:text-blue-500">
            <img src={javaScript} className="w-10" alt="JavaScript" />
            JavaScript
          </li>
          <li className="w-[15%] h-16 flex justify-center items-center gap-5 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:text-blue-500">
            <img src={TS} className="w-10" alt="TypeScript" />
            TypeScript
          </li>
          <li className="w-[15%] h-16 flex justify-center items-center gap-5 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:text-blue-500">
            <img src={react} className="w-10" alt="ReactJS" />
            ReactJS
          </li>
          <li className="w-[15%] h-16 flex justify-center items-center gap-5 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:text-blue-500">
            <img src={redux} className="w-10" alt="Redux" />
            Redux
          </li>
          <li className="w-[15%] h-16 flex justify-center items-center gap-5 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:text-blue-500">
            <img src={next} className="w-10" alt="NextJS" />
            NextJS
          </li>
          <li className="w-[15%] h-16 flex justify-center items-center gap-5 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:text-blue-500">
            <img src={node} className="w-14" alt="NodeJS" />
            NodeJS
          </li>
          <li className="w-[15%] h-16 flex justify-center items-center gap-5 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:text-blue-500">
            <img src={expIMG} className="w-10" alt="ExpressJS" />
            ExpressJS
          </li>
          <li className="w-[15%] h-16 flex justify-center items-center gap-5 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:text-blue-500">
            <img src={javaIMG} className="w-14" alt="Java" />
            Java
          </li>
          <li className="w-[15%] h-16 flex justify-center items-center gap-5 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:text-blue-500">
            <img src={mongoDB} className="w-20" alt="MongoDB" />
            MongoDB
          </li>
          <li className="w-[15%] h-16 flex justify-center items-center gap-5 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:text-blue-500">
            <img src={neon} className="w-8" alt="Neon" />
            Neon
          </li>
          <li className="w-[15%] h-16 flex justify-center items-center gap-5 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:text-blue-500">
            <img src={orm} className="w-8" alt="Drizzle ORM" />
            Drizzle ORM
          </li>
          <li className="w-[15%] h-16 flex justify-center items-center gap-5 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:text-blue-500">
            <img src={sql} className="w-10" alt="SQL" />
            SQL
          </li>
          <li className="w-[15%] h-16 flex justify-center items-center gap-5 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:text-blue-500">
            <img src={mySql} className="w-14" alt="MySQL" />
            MySQL
          </li>
          <li className="w-[15%] h-16 flex justify-center items-center gap-5 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:text-blue-500">
            <img src={postsql} className="w-10" alt="PostgreSQL" />
            PostgreSQL
          </li>
          <li className="w-[15%] h-16 flex justify-center items-center gap-5 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:text-blue-500">
            <img src={postman} className="w-10" alt="Postman" />
            Postman
          </li>
        </ul>
      </section>
    </>
  );
}

export default Skills;
