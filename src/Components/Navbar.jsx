import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll"
export default function Navbar() {
  const [nav, setNav] = useState(false);

  //Array of links
  const links = [
    {
      id: 1,
      links: "Home",
    },
    {
      id: 2,
      links: "About",
    },
    {
      id: 3,
      links: "Experience",
    },
    {
      id: 4,
      links: "Portfolio",
    },
    {
      id: 5,
      links: "Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center  w-full h-20 px-4 bg-black text-white fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Satyam Singh</h1>
      </div>
      <ul className=" hidden md:flex">
        {links.map(({ id, links }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium  text-gray-500 hover:scale-105 duration-100"
          >
            <Link to={links} smooth duration={500}>{links}</Link>
          </li>
        ))}
        {/* Instead of creating multiple li(List items) we simply create an array of all links and map it.
         <li className="px-4 cursor-pointer capitalize font-medium  text-gray-500 hover:scale-105 duration-100">
          links
        </li> */}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-slate-300 text-red-600">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize text-4xl py-4"
            >
              <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>{link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
