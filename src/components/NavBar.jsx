import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import {  Link, animateScroll as scroll } from "react-scroll";

const NavBar = ({ darkMode, setDarkMode }) => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  const handleClick = link => {
    setActiveLink(link);
    setNav(false);
    scrollToSection(link);
  };

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    const sections = document.querySelectorAll("[name]");
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (currentPosition >= sectionTop - sectionHeight / 2) {
        currentSection = section.getAttribute("name");
      }
    });

    setActiveLink(currentSection);
  };

  const scrollToSection = link => {
    scroll.scrollTo(link, {
      duration: 500,
      smooth: true,
      offset: -50, // Adjust this value to set the scroll offset if needed
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex z-10 bg-white justify-between items-center w-full h-16 text-gray-800 dark:bg-black dark:text-white fixed px-4">
      <div>
        <h1 className="text-5xl font-signature ml-2">Arif</h1>
      </div>

      <ul className="hidden md:flex items-center">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className={`px-4 cursor-pointer capitalize text-gray-400 hover:scale-105 duration-200 ${
              activeLink === link ? "text-transparent font-bold bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500" : ""
            }`}
          >
            <Link
              to={link}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50} // Adjust this value to set the scroll offset if needed
              onClick={() => handleClick(link)}
            >
              {link}
            </Link>
          </li>
        ))}
        <li className="mx-8 " onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <MdWbSunny size={30} /> : <MdNightsStay size={30} />}
        </li>
      </ul>
      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b text-white from-cyan-500 to-blue-500">
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <Link onClick={() => setNav(!nav)} to={link} spy={true} smooth={true} duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    )}
  </div>
);
};

export default NavBar;

