import React ,{useEffect,useRef} from "react";
import LocomotiveScroll from "locomotive-scroll";
import "../HomePage/Home.css"
import "remixicon/fonts/remixicon.css";
import About from "../AboutPage/About";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import Project from "../Projects/Project";
import Achievement from "../Achievement/Achievement";
import Footer from "../Footer/Footer";

function Home() {


  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el:scrollRef.current,
      smooth:true,
    })
    return () => {
      scroll.destroy();
    }
  }, []);
  
  


  return (
    <>
    <div id="main" ref={scrollRef} className="scroll-container">
      <section className="home-container">
      <div className="home-content">
         <h6 className="short-title">LET'S BUILD SOMETHING TOGETHER</h6>
         <h1>Hi, I'm  <span>Ishika Jain</span> <br></br>A Mern-Stack Web Developer</h1>
         <p className="des1">I'm focused on building responsive Mern-Stack applications <br/>  integrating back-end technologies.</p>
         </div>
         <div >
         <a href="https://www.linkedin.com/in/ishika-jain08/" className="icon"><i class="ri-linkedin-fill"></i></a>
         <a href="https://github.com/Ishika-Jain08" className="icon"><i class="ri-github-fill"></i></a>
         <a href="https://x.com/Ishika0811" className="icon"><i class="ri-twitter-fill"></i></a>
         </div>
      </section>
      <About/>
      <Experience/>
      <Skills/>
      <Project/>
      <Achievement/>
      <Footer/>
      </div>
    </>
  );
}

export default Home;
