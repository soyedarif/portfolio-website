import heroImg from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div name="home" className="lg:h-screen h-[58rem] w-full bg-gradient-to-b dark:from-black from-white dark:via-black via:white dark:to-gray-900 to-slate-300 relative">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center w-full md:w-1/2 h-full">
          <h1 className="text-gray-500">Hi, I&apos;m Soyed Ariful Alam</h1>
          <h2 className="text-4xl md:text-6xl  text-black dark:text-white">
            I&apos;m a MERN Stack <br /> Web
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              {/* Style will be inherited from the parent element */}
              <Typewriter words={["Developer", "Coder", "Warrior"]} loop={false} cursor cursorStyle="_" typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
            </span>
          </h2>
          <p className="text-gray-500 py-4 max-w-md">Driven junior web developer with MERN stack expertise. Passionate about coding, creativity, and innovation. Actively contributes to cutting-edge online applications, while seeking growth opportunities. Committed to high-quality solutions and staying up-to-date with web development advancements.</p>
          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="hero-imgdiv bg-gradient-to-r mt-12 from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500 w-[25rem] h-[25rem] overflow-hidden">
            <img  data-aos="fade-up" data-aos-duration="1500" src={heroImg} alt="my profile" className="mx-auto md:w-[20rem] h-[25rem] object-cover" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
