/* eslint-disable react/no-unescaped-entities */

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
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
      el: scrollRef.current,
      smooth: true,
    });
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <>
      <div id="main" ref={scrollRef} className="scroll-container">
        <section className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] w-full">
          <div className="text-center p-5">
            <h6 className="text-lg font-semibold tracking-wider">
              LET'S BUILD SOMETHING TOGETHER
            </h6>
            <h1 className="py-2 text-4xl font-bold">
              Hi, I'm <span className="text-main-color">Ishika Jain</span>{" "}
              <br />A Mern-Stack Web Developer
            </h1>
            <p className="text-base text-gray-700">
              I'm focused on building responsive Mern-Stack applications <br />{" "}
              integrating back-end technologies.
            </p>
          </div>
          <div className="flex gap-3 mt-4">
            <a
              href="https://www.linkedin.com/in/ishika-jain08/"
              className="bg-bg-color shadow-md rounded-full p-4 transition-transform duration-300 hover:scale-105"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
            <a
              href="https://github.com/Ishika-Jain08"
              className="bg-bg-color shadow-md rounded-full p-4 transition-transform duration-300 hover:scale-105"
            >
              <i className="ri-github-fill"></i>
            </a>
            <a
              href="https://x.com/Ishika0811"
              className="bg-bg-color shadow-md rounded-full p-4 transition-transform duration-300 hover:scale-105"
            >
              <i className="ri-twitter-fill"></i>
            </a>
          </div>
        </section>
        <About />
        <Experience />
        <Skills />
        <Project />
        <Achievement />
        <Footer />
      </div>
    </>
  );
}

export default Home;
