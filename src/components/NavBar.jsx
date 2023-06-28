import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { Link } from "react-scroll";

const NavBar = ({ darkMode, setDarkMode }) => {
  const [nav, setNav] = useState(false);
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
  return (
    <div className="flex bg-white justify-between items-center w-full h-20 text-gray-800 dark:bg-black dark:text-white fixed px-4">
      <div>
        <h1 className="text-5xl font-signature ml-2">Arif</h1>
      </div>

      <ul className="hidden md:flex items-center">
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer capitalize text-gray-400 hover:scale-105 duration-200">
            <Link to={link} spy={true} smooth={true} duration={500}>
              {link}
            </Link>
          </li>
        ))}
        <li className="mx-8 " onClick={() => setDarkMode(!darkMode)}>{darkMode ? <MdWbSunny size={30} /> : <MdNightsStay size={30} />}</li>
        
      </ul>
      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400">
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
