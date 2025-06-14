import React from "react";
import img from "../assets/heroImage.png";
import { FaArrowRight } from "react-icons/fa";
import {Link} from "react-scroll"
export default function Home() {
  return (
    <div
      name="home"
      className=" w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto  flex flex-col justify-center items-center px-4  h-full md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white ">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-5 max-w-md">
            i have lot of experiences and projects in building cool react and
            react native projects i have lot of experiences and projects in
            building cool react and react native projects i have lot of
            experiences and projects in building cool react and react native
            projects
          </p>

          <div>
            <Link to="portfolio" smooth duration={400} className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="mx-2 group-hover:rotate-90 duration-300">
                <FaArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src="abc"
            alt="My profile pic"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}
