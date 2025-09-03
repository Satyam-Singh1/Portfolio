import React from "react";
import img from "../assets/heroimage.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 h-full md:flex-row">
        <div className="flex flex-col justify-center h-full md:w-1/2">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-5 max-w-md">
            Goal-driven Computer Science student with a solid foundation in web
            development, object-oriented programming, and data structures &
            algorithms. Proficient in Java and JavaScript with hands-on
            experience in React.js, Node.js, Express.js, MongoDB, and Tailwind
            CSS. Passionate about building scalable, high-performance
            applications and contributing to impactful software projects.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={400}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="mx-2 group-hover:rotate-90 duration-300">
                <FaArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <img
            src={img}
            alt="My profile pic"
            className="rounded-2xl w-64 h-64 object-cover md:w-80 md:h-80 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
