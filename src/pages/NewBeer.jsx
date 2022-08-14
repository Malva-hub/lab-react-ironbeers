import {useState} from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";


function NewBeer() {
  const navigate = useNavigate();

  const [beerToAdd, setBeerToAdd] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips:"",
    attenuation_level: 0,
    contributed_by:""
  });

  const handleChange = (event) => {
    console.log(event.target.value);
    const stateClone = { ...beerToAdd };
    stateClone[event.target.name] = event.target.value;
    setBeerToAdd(stateClone);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", beerToAdd);
      navigate("/message");
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div>
      <Navbar/>
      <h2>New Beer </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={beerToAdd.name}
        />

        <label htmlFor="tagline">Tagline:</label>
        <input
          type="text"
          name="tagline"
          onChange={handleChange}
          value={beerToAdd.tagline}
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          onChange={handleChange}
          value={beerToAdd.description}
        />

        <label htmlFor="first_brewed">First Brewed:</label>
        <input
          type="text"
          name="first_brewed"
          onChange={handleChange}
          value={beerToAdd.first_brewed}
        />

        <label htmlFor="brewers_tips">Brewers Tips:</label>
        <input
          type="text"
          name="brewers_tips"
          onChange={handleChange}
          value={beerToAdd.brewers_tips}
        />

        <label htmlFor="attenuation_level">Attenuation Level:</label>
        <input
          type="number"
          name="attenuation_level"
          onChange={handleChange}
          value={beerToAdd.attenuation_level}
        />

        <label htmlFor="contributed_by">Contributed By:</label>
        <input
          type="text"
          name="contributed_by"
          onChange={handleChange}
          value={beerToAdd.contributed_by}
        />

        <button>Agregar</button>
      </form>
    </div>
  );
}

export default NewBeer;
