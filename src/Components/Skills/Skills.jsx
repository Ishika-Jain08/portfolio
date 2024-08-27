import React from 'react'
import "../Skills/Skills.css"
import expIMG from "../../assets/express.webp"
import javaIMG from "../../assets/java.svg"
import mongoDB from "../../assets/mongodb.svg"
import mySql from "../../assets/mysql.svg"
import html from "../../assets/html5.svg"
import css from "../../assets/css3.svg"
import javaScript from "../../assets/javascript.svg"
import react from "../../assets/react.svg"
import node from "../../assets/nodejs.svg"
import next from "../../assets/nextjs-icon.svg"
import bootstrap from "../../assets/bootstrap.svg"
import sql from "../../assets/sql.svg"
import tailwind from "../../assets/tailwind.svg"
import redux from "../../assets/redux.png";
import sass from "../../assets/sass.png";
import TS from "../../assets/ts.png";
import  postman from "../../assets/postman.svg";
import postsql from "../../assets/postsql.svg";
function Skills() {
  return (
    <>
       <section className='skill-container'>
       <div className='skill-content'>
       <span className="about">SKILLS</span>
           <h1 className="defines">What I Can Do</h1>
        <ul>
          <li><img  src={html}/>HTML</li>
          <li><img src={css}/>CSS</li>
          <li><img  src={tailwind}/>Tailwind</li>
          <li><img  src={sass}/>SASS</li>
          <li><img  src={javaScript}/>JavaScript</li>
          <li><img  src={TS}/>TypeScript</li>
          <li><img  src={react}/>ReactJS</li>
          <li><img  src={bootstrap}/>Bootstrap</li>
          <li><img  src={redux}/>Redux</li>
          <li><img  src={next}/>NextJS</li>
          <li><img className='skill' src={node}/>NodeJS</li>
          <li><img  src={expIMG}/>ExpressJS</li>
          <li><img className='skill' src={javaIMG}/>Java </li>
          <li><img className='skill' src={mongoDB}/> MongoDB</li>
          <li><img  src={sql}/>SQL</li>
          <li><img className='skill' src={mySql}/>MySQL</li>
          <li><img  src={postsql}/>postgreSQL</li>
          <li><img  src={postman}/>postman</li>
        </ul>
       </div>

       </section>
    </>
  )
}

export default Skills