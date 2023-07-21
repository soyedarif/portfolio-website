

const About = () => {
  return (
    <div name="about" className="w-full p-4 pb-20 h-full bg-gradient-to-b dark:from-gray-900 dark:to-black from-slate-300 dark:text-white">
      <div className="max-w-screen-lg mx-auto  flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <div>
          <div>

          </div>
          <div data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom">
            <p className="text-xl mt-20">I am 26 years old and hail from Rajshahi, Bangladesh. So far I have completed my college education. With 2 years of prior professional experience in IT sector, I am proud to share that I also dedicated six months to an intensive course on MERN stack web development at &quot;Programming Hero.&quot;</p>
            <br />
            <p className="text-xl">During this course, I was actively involved in numerous coding tasks and successfully completed 12 assignments. I worked on a significant project centered around a summer camp website, specifically focusing on crafts and arts. The project included the implementation of three user roles: Admin, Instructor, and Student. The Admin had the authority to manage user roles and accounts, as well as approve, deny, or provide feedback on classes added by instructors. Instructors, on the other hand, could add and modify classes, while students had the opportunity to select their preferred classes offered by instructors.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
