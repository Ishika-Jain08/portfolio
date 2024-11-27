/* eslint-disable react/no-unescaped-entities */

import my from "../../assets/socail pick.jpg";

function About() {
  return (
    <>
      <section className="w-full py-12">
        <div className="px-6">
          <span className="relative left-28 text-xl font-semibold text-gray-800">
            ABOUT
          </span>
          <h1 className="relative left-24 text-3xl font-bold my-4">
            What defines me
          </h1>
          <div className="flex items-center justify-around">
            <div>
              <p className="py-2 text-sm mb-1 text-gray-700">
                Jai Jinendra!🌟 I'm Ishika Jain, a dedicated B.Tech (Computer
                Science) student at Lakshmi Narayan
                <br />
                College of Technology and Science.
                <br />
                With a strong passion for Web Development, I've been immersing
                myself in coursework and extracurricular
                <br />
                activities that align with my career goals.
              </p>
              <p className="py-2 text-sm mb-1 text-gray-700">
                Completed comprehensive training in Full-Stack Java from
                Capgemini and MERN Stack from
                <br />
                Broadcast Engineering Consultants India (Becil), gaining
                expertise in end-to-end development
                <br />
                across multiple technology stacks.
              </p>
              <p className="py-2 text-sm mb-1 text-gray-700">
                Currently, my goal is to explore new opportunities and
                collaborate on exciting projects.
                <br />
                Feel free to connect with me at ishikajian@gmail.com.
                <br />
                I am excited about engaging in meaningful discussions and
                potential collaborations that
                <br />
                contribute to the ever-evolving landscape of technology. Let's
                connect and explore the possibilities together!
              </p>
              <button className="mt-4">
                <a
                  href="/portfolio/contact"
                  className="block w-fit bg-main-color text-second-bg-color font-bold rounded-lg px-6 py-3 transition-transform duration-500 hover:scale-105"
                >
                  Let's Talk
                </a>
              </button>
            </div>
            <img
              src={my}
              alt="Ishika Jain"
              className="w-1/5 rounded-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
