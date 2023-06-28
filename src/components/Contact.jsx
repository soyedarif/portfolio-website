const Contact = () => {
  return (
    <div name="contact" className="w-full h-full bg-gradient-to-b dark:from-black dark:to-gray-900 from-white to-slate-300 dark:text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center ">
          <form action="https://getform.io/f/f298edc3-96c2-475e-9768-2b6d837dc370" method="POST" className="flex flex-col w-full md:w-1/2 space-y-4">
            <input type="text" name="name" placeholder="Enter Your Name" className="p-2 bg-transparent border-2 rounded-md dark:text-white focus:outline-none" />
            <input type="email" name="email" placeholder="Enter Your Email" className="p-2 bg-transparent border-2 rounded-md dark:text-white focus:outline-none" />
            <textarea name="message" rows="10" className="p-2 bg-transparent border-2 rounded-md dark:text-white focus:outline-none" placeholder="Enter Your Message"></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 rounded-md mx-auto hover:scale-110 duration-300 " type="submit">
              Let&apos;s Begin
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
