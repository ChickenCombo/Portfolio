import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
