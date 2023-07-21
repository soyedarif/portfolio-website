import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import PacmanLoader from "react-spinners/PacmanLoader";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return loading ? (
    <div className="preloader">
      <PacmanLoader  color="#06b6d4" loading={loading}  size={70}  />
      <h2 className="text-4xl">Welcome</h2>
    </div>
  ) : (
    <>
      <div className={darkMode ? "dark" : ""}>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Home darkMode={darkMode} />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <SocialLinks />
        <Footer />
      </div>
    </>
  );
}

export default App;
