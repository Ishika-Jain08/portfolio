/* eslint-disable react/no-unescaped-entities */
import logo from "../../assets/Ishika Jain.png";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-800 text-gray-300 flex flex-col items-center gap-5 p-5 sm:pt-12 mt-28 min-h-[70vh]">
        <div className="w-full grid grid-cols-1 sm:grid-cols-[1.5fr_2fr_1fr] gap-12">
          {/* Left Section */}
          <div className="flex flex-col items-center gap-5">
            <div className="text-center">
              <p className="italic text-lg">
                "Your Vision, My Code—Together, We Build Success."
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/ishika-jain08/"
                className="text-xl hover:text-blue-500 transition"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
              <a
                href="https://github.com/Ishika-Jain08"
                className="text-xl hover:text-gray-400 transition"
              >
                <i className="ri-github-fill"></i>
              </a>
              <a
                href="https://x.com/Ishika0811"
                className="text-xl hover:text-blue-400 transition"
              >
                <i className="ri-twitter-fill"></i>
              </a>
            </div>
          </div>

          {/* Center Section */}
          <div className="flex flex-col items-center gap-2">
            <img
              src={logo}
              alt="Ishika Jain Logo"
              className="w-20 rounded-full"
            />
            <h3 className="text-xl font-bold text-gray-200 font-impact">
              ISHIKA JAIN
            </h3>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center gap-5 text-center">
            <h2 className="text-lg font-semibold text-gray-200">
              Get in Touch
            </h2>
            <ul className="space-y-2">
              <li>Call: 8269017967</li>
              <li>Email: ishikajian@gmail.com</li>
            </ul>
          </div>
        </div>

        <hr className="w-full h-[2px] bg-gray-600 border-none my-5" />

        <p className="text-center text-gray-400 font-bold">
          Copyright 2024 @ personal_portfolio_Ishika_Jain.com - All Right
          Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
