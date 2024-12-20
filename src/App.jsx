import "./App.css";
import Horoscope from "./components/horoscope/Horoscope";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Horoscope />
      </div>
    </>
  );
}

export default App;
