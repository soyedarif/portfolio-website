const Modal = ({ modalProject }) => {
  const { src, projectName, features, liveLink, serverGit, clientGit } = modalProject;
  const links = [
    { label: "Live Site", href: liveLink },
    { label: "Client Side", href: clientGit },
    { label: "Server Side", href: serverGit },
  ];
  return (
    <>

      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box dark:bg-slate-700 w-11/12 max-w-5xl">
          <div className="flex flex-col md:flex-row">
            {/* <div className="w-1/2 h-72 overflow-hidden scrolling-image">
              <img src={src} alt="" className="hover:translate-y-full" />
            </div> */}
            <div className="w-full md:w-1/2 h-72 ease-in-out overflow-hidden ">
              <img src={src} alt="" className="duration-[3s]  hover:-translate-y-full hover:mt-72" />
            </div>

            <div className="w-full md:w-1/2 p-6">
              <h3 className="text-3xl font-bold mb-4">{projectName}</h3>
              <div className="flex flex-col md:flex-row mb-4 items-center gap-2">
                {links.map((link, index) => (
                  <a key={index} className="font-bold text-white" href={link.href} rel="noreferrer" target="_blank">
                    <button className="bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 rounded-md">{link.label}</button>
                  </a>
                ))}
              </div>
              <ul>
                {features?.map((fe, i) => (
                  <li key={i}>{fe}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
};

export default Modal;
