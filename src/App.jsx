import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Home />
      <About></About>
      <Portfolio></Portfolio>
      <SocialLinks />
    </>
  );
}

export default App;
