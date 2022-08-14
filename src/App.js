import "./App.css";

import { Routes, Route } from "react-router-dom";

import AllBeers from "./pages/AllBeers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import Home from "./pages/Home";
import Error from "./pages/Error";
import BeerDetails from "./pages/BeerDetails";
import Message from "./pages/Message";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/beers" element={<AllBeers />} />

        <Route path="/beers/:beerId/details" element={<BeerDetails />} />

        <Route path="/random-beer" element={<RandomBeer />} />

        <Route path="/new-beer" element={<NewBeer />} />

        <Route path="/error" element={<Error />} />

        <Route path="/message" element={<Message />} />
      </Routes>
    </div>
  );
}

export default App;
