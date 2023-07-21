import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import node from "../assets/node.png";
import expressjs from "../assets/expressjs.png";
import mongodb from "../assets/mongodb.png";
import firebase from "../assets/firebase.png";



const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: node,
      title: "NODEJS",
      style: "shadow-lime-500",
    },
    {
      id: 4,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: reactImage,
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: expressjs,
      title: "EXPRESS JS",
      style: "shadow-gray-500",
    },
    {
      id: 8,
      src: mongodb,
      title: "MONGODB",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: firebase,
      title: "FIREBASE",
      style: "shadow-amber-400",
    },
  ];
  return (
    <div name="experience" className="w-full pb-20 h-full bg-gradient-to-b dark:from-gray-900 dark:to-black from-slate-300 dark:text-white">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Experience</p>
          <p className="py-6">These are the technologies I&apos;ve worked with</p>
        </div>
        <div className=" w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 md:px-0">
          {techs.map(({ id, style, src, title }) => (
            <div data-aos="zoom-out" data-aos-duration="1500" key={id} className={"shadow-md hover:scale-105 duration-500 py-2 rounded-lg" + " " + style}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Experience;
