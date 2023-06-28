import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  const [darkMode, setDarkMode]=useState(true)
  return (
    <>
      <div className={darkMode && 'dark'}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Home darkMode={darkMode}/>
      <About />
      <Portfolio />
      <Experience />
      <Contact/>
      <SocialLinks />
      </div>
   
    </>
  
  );
}

export default App;
