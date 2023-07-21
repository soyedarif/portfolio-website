
import foodies from "../assets/portfolio/foodies.png";
import toyinvasion from "../assets/portfolio/toy-invasion.png";
import ralphcrafts from "../assets/portfolio/ralph-crafts.png";
import Modal from "./Modal";
import { useState } from "react";



const Portfolio = () => {
  const [modalProject,setModalProject]= useState({})
  const portfolios = [
    {
      id: 1,
      src: ralphcrafts,
      projectName:"Ralph’s Craft",
      features:['MERN stack website for Summer Course.','Dedicated Dashboard Route based on user.','JWT Authentication on Data fetch.'],
      liveLink:'https://ralph-crafts-auth.web.app/',
      clientGit:'https://github.com/soyedarif/Ralph-s-Craft-Client',
      serverGit: 'https://github.com/soyedarif/ralph-s-crafts-server',
    },
    {
      id: 2,
      src: toyinvasion,
      projectName:"Toys Invasion",
      features:[' MERN stack website for Action Figures','Implemented Crud Operation.','Shows result by Category.','Search and Sort implemented from backend.'],
      liveLink:'https://toy-invasion-auth.web.app/',
      clientGit:'https://github.com/soyedarif/toys-invasion-client.git',
      serverGit: 'https://github.com/soyedarif/toys-invasion-server',
    },
    {
      id: 3,
      src: foodies,
      projectName:"Foodies Heaven",
      features:['Display recipes by chefs.','User Authentication on view details page.','Add recipe as your favorite.'],
      liveLink:'https://foodies-heaven-auth.web.app/',
      clientGit:'https://github.com/soyedarif/foodies-heaven-client.git',
      serverGit: 'https://github.com/soyedarif/foodies-heaven-server',
    },
  ];

  return (
    <div name="portfolio" className="w-full h-full pb-20 p-4 bg-gradient-to-b dark:from-black dark:to-gray-900 from-white to-slate-300 dark:text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>




        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 portfolios">
          {portfolios?.map((project) => (
            <div data-aos="zoom-in-up" data-aos-duration="1000" key={project.id} className="shadow-md  shadow-gray-600 rounded-lg">
              <div className="overflow-hidden h-80 group rounded-md  hover:scale-105 duration-200 relative">
                <img src={project.src} alt="" className="" />
                <div className="absolute flex justify-center items-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm top-0 w-full h-full -right-[100%] group-hover:right-0 duration-700">
                  <label onClick={()=>setModalProject(project)} htmlFor="my_modal_7" className="bg-gradient-to-b text-white from-cyan-500 to-blue-500 px-4 py-2 rounded-md hover:scale-110 duration-300">
                    Show Details
                  </label>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <a href={project.liveLink} rel="noreferrer" target="_blank"><button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">Demo</button></a>
                <a href={project.clientGit} rel="noreferrer" target="_blank"><button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">Code</button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal modalProject={modalProject}></Modal>
    </div>
  );
};

export default Portfolio;
