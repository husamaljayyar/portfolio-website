import "./App.css";
import HeroSection from "./Screen/HeroSection/HeroSection";
import MySelf from "./Screen/MySelf/MySelf";
import Servce from "./Screen/Servce/Servce";
import MyProject from "./Screen/Project/Project";
import Footer from "./Screen/Footer/Footer";

const App = () => {
  return (
    <div className="overflow-hidden flex flex-col items-center justify-center">
      <HeroSection />
      <MySelf />
      <MyProject />
      <Servce />
      <Footer />
    </div>
  );
};

export default App;
