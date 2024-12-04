import GenderSelection from "./components/GenderSelection";
import Header from "./components/Header";
import PressSection from "./components/PressSection";
import Slider from "./components/Slider";
import SpringSeason from "./components/SpringSeason";
import SweaterSection from "./components/SweaterSection";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./components/Carousel";
import Features from "./components/Features";


function App() {
  return (
    <div className="App">
      <Header/>
      <SpringSeason/>
      <Slider/>
      <SweaterSection/>
      <GenderSelection/>
      <PressSection/>
      <Carousel/>
      <Features/>
    </div>
  );
}

export default App;