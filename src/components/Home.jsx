import heroImg from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-900">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I&apos;m a Full Stack Web Developer</h2>
          <p className="text-gray-400 py-4 max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quaerat ad natus est placeat voluptates maiores commodi voluptate aliquam qui.</p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
              </span>
            </button>
          </div>
        </div>
        <div>
          <img src={heroImg} alt="my profile" className="rounded-2xl w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
