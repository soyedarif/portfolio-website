import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/soyedarif",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/soyedarif",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:soyedarif@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/arif-resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className=" lg:block lg:top-[35%] lg:left-0 bottom-3 lg:transform-none -translate-x-1/2 left-1/2 fixed">
      <ul className="flex sm:justify-center sm:items-center lg:block sm:gap-1">
        {links.map(({ id, child, href, style, download }) => (
          <li key={id} className={"sm:flex lg:justify-between items-center  md:w-40 w-24 h-14 px-4 bg-gradient-to-b from-cyan-500 to-blue-500 lg:ml-[-6.25rem] hover:rounded-sm lg:hover:ml-[-0.7rem] duration-300" + " " + style}>
            <a href={href} className="lg:flex lg:justify-between lg:items-center w-full text-white" download={download} target="_blank" rel="noopener noreferrer">
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
