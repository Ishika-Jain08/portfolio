import logo from "../../assets/Ishika Jain.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="w-screen h-16 flex items-center justify-around rounded-lg py-1.5 sticky top-0 z-30 bg-second-bg-color">
        <h5 className="flex items-center gap-2 text-main-color font-semibold text-xl font-impact">
          <img src={logo} alt="" className="w-11 rounded-full object-cover" />
          ISHIKA
        </h5>
        <div className="hidden md:flex">
          <Link
            to="/"
            className="mx-4 cursor-pointer transition-transform duration-500 hover:scale-105 hover:text-main-color font-semibold pb-2 border-b-3 border-transparent hover:border-main-color"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="mx-4 cursor-pointer transition-transform duration-500 hover:scale-105 hover:text-main-color font-semibold pb-2 border-b-3 border-transparent hover:border-main-color"
          >
            About
          </Link>
          <Link
            to="/experience"
            className="mx-4 cursor-pointer transition-transform duration-500 hover:scale-105 hover:text-main-color font-semibold pb-2 border-b-3 border-transparent hover:border-main-color"
          >
            Experience
          </Link>
          <Link
            to="/skills"
            className="mx-4 cursor-pointer transition-transform duration-500 hover:scale-105 hover:text-main-color font-semibold pb-2 border-b-3 border-transparent hover:border-main-color"
          >
            Skills
          </Link>
          <Link
            to="/project"
            className="mx-4 cursor-pointer transition-transform duration-500 hover:scale-105 hover:text-main-color font-semibold pb-2 border-b-3 border-transparent hover:border-main-color"
          >
            Projects
          </Link>
          <Link
            to="/achievement"
            className="mx-4 cursor-pointer transition-transform duration-500 hover:scale-105 hover:text-main-color font-semibold pb-2 border-b-3 border-transparent hover:border-main-color"
          >
            Achievements
          </Link>
        </div>
        <Link
          to="/contact"
          className="bg-main-color px-4 py-3 rounded-lg text-second-bg-color font-bold transition-transform duration-500 hover:scale-105"
        >
          Contact
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
