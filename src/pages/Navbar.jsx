import React, { useState } from "react";
import { Link } from "react-scroll";


const Navbar = () => {
  
  const menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/project",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="max-w-4xl mx-auto flex justify-between p-2 md:p-4 shadow-lg items-center  text-white">
      <h1 className="animate__animated animate__flipInY text-3xl font-bold p-3 bg-gradient-to-tr from-purple-800 to-orange-600 rounded-full hover:scale-105 hover:brightness-75 ">
        Portfolio.
      </h1>
      <div className="hidden sm:flex gap-6 ">
        <ul className="flex  gap-7 ">
          {menus.map((item, index) => (
            <li
              key={index}
              className="hover:scale-110 duration-75  hover:text-pink-600 cursor-pointer"
            >
              <Link
                activeClass="active"
                to={item.link}
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="text-center animate__animated animate__zoomInRight">
        <a
          href="/aman-portfolio/Res_1aman.pdf" 
          download
          className="p-3 bg-gradient-to-tr from-blue-500 to-green-400 rounded-md text-white font-bold hover:opacity-80"
        >
         Resume
        </a>
      </div>

      
    </div>
  );
};

export default Navbar;
