import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Home />
      <About></About>

      <SocialLinks />
    </>
  );
}

export default App;
