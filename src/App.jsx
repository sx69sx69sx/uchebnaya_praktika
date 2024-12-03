import GenderSelection from "./components/GenderSelection";
import Header from "./components/Header";
import Slider from "./components/Slider";
import SpringSeason from "./components/SpringSeason";
import SweaterSection from "./components/SweaterSection";

function App() {
  return (
    <div className="App">
      <Header/>
      <SpringSeason/>
      <Slider/>
      <SweaterSection/>
      <GenderSelection/>
    </div>
  );
}

export default App;