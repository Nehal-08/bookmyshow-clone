import Navbar from "./Components/NavBar/Navbar";
import SubNavBar from "./Components/SubNavBar/SubNavBar";
import Banner from "./Components/Banner/Banner";
import RecommendedMovieCard from "./Components/Cards/js/RecommendedMovieCard";
import LiveEvent from "./Components/Cards/js/LiveEvent";
import Premiere from "./Components/Cards/js/Premiere";
import OutdoorEvent from "./Components/Cards/js/OutdoorEvent";
import PopularEvent from "./Components/Cards/js/PopularEvent";
import TopGame from "./Components/Cards/js/TopGame";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SubNavBar />
      <Banner />
      <RecommendedMovieCard />
      <LiveEvent />
      <Premiere />
      <OutdoorEvent />
      <PopularEvent />
      <TopGame />
    </div>
  );
}

export default App;
