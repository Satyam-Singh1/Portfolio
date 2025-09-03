import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function SocialLink() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/satyam-singh-85b79b258/",
      style: "rounded-tr-md",
      bgColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Satyam-Singh1",
      bgColor: "bg-gray-800 hover:bg-gray-900"
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:satyamrajput9956@gmail.com",
      bgColor: "bg-red-600 hover:bg-red-700"
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Satyam_Resume.pdf",
      style: "rounded-br-md",
      download: true,
      bgColor: "bg-green-600 hover:bg-green-700"
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-[60] p-2">
      <ul>
        {links.map(({ id, child, href, style, download, bgColor }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] ${bgColor} hover:ml-[-10px] hover:rounded-md duration-300 transform transition-all hover:shadow-lg border border-slate-600/50 ${style || ''}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white hover:text-gray-100 transition-colors duration-200"
              download={download}
              target="_blank"
              rel="noopener noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}