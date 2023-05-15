import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

const App = () => {
  return (
    <div className="bg:white dark:bg-black bg-dotted-light overflow-x-hidden bg-vmin dark:bg-dotted-dark transition">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
