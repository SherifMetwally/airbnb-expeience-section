import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import data from "./data";

function App() {
  let cards = data.map((element) => {
    return (
      <Card
        key = {element.id}
        { ...element}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <div className="cards-container">{cards}</div>
      </main>
    </div>
  );
}

export default App;
