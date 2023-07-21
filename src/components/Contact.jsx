
import { FaPhone } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <div name="contact" className="w-full h-full p-4 pb-20 bg-gradient-to-b dark:from-black dark:to-gray-900 from-white to-slate-300 dark:text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center flex-col-reverse md:flex-row gap-4">
          <form action="https://getform.io/f/f298edc3-96c2-475e-9768-2b6d837dc370" method="POST" className="flex flex-col w-full md:w-1/2 space-y-4">
            <input type="text" name="name" placeholder="Enter Your Name" className="p-2 bg-transparent border-2 rounded-md dark:text-white focus:outline-none" />
            <input type="email" name="email" placeholder="Enter Your Email" className="p-2 bg-transparent border-2 rounded-md dark:text-white focus:outline-none" />
            <textarea name="message" rows="10" className="p-2 bg-transparent border-2 rounded-md dark:text-white focus:outline-none" placeholder="Enter Your Message"></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 rounded-md mx-auto hover:scale-110 duration-300 " type="submit">
              Let&apos;s Begin
            </button>
          </form>
          <div className="space-y-2" data-aos="fade-left" data-aos-duration="1000">
            <h4 className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Soyed Ariful Alam</h4>
            <p className="flex items-center ">
              <FaInbox className="text-2xl mr-2 text-cyan-600" /> : <span className="ml-2">soyedariff@gmail.com</span>
            </p>
            <p className="flex items-center ">
              <FaPhone className="text-2xl mr-2 text-cyan-600" /> : <span className="ml-2">+8801626137073</span>
            </p>
            <p className="flex items-center ">
              <FaMapMarkedAlt className="text-2xl mr-2 text-cyan-600" /> : <span className="ml-2">Rajshahi, Bangladesh</span>
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
