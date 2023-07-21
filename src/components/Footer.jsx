import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";
const Footer = () => {
    const links = [
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
        }
      ];
 
    return (
        <>
            <footer className="footer bg-gradient-to-b from-cyan-500 to-blue-500  footer-center p-10 bg-base-200 pb-20 text-white rounded">
  <ul className="grid grid-flow-col gap-4">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className={`px-4 cursor-pointer capitalize  duration-200 `}
          >
            <Link
              to={link}
              spy={true}
              smooth={true}
              duration={500}
            >
              {link}
            </Link>
          </li>
        ))}
        
      </ul>
  <div>
    <div className="grid grid-flow-col gap-4">
     <a href="" className="hover:scale-x-110 duration-150"><FaFacebookF size={25}/></a>
     <a href="" className="hover:scale-x-110 duration-150"><FaInstagram size={25}/></a>
     <a href="" className="hover:scale-x-110 duration-150"><FaTwitter size={25}/></a>
    </div>
  </div> 
  <div>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Soyed Ariful Alam</p>
  </div>
</footer>
        </>
    );
};

export default Footer;