import About from "./Components/About";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import SocialLink from "./Components/SocialLink";
import Contact from "./Components/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <SocialLink />
      <About />
      <Portfolio />
      <Experience/>
      <Contact/>
    </>
  );
}

export default App;
