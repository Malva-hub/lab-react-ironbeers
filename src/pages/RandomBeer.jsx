import { useState } from "react";
import { useEffect } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function RandomBeer() {
  const navigate = useNavigate();

  const [randomBeer, setRandomBeer] = useState([]);

  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getAllBeers();
  }, []);

  const getAllBeers = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setRandomBeer(response.data);
      setIsFetching(false);
    } catch (error) {
      navigate("/error");
    }
  };

  if (isFetching === true) {
    return <h3>...Loading</h3>;
  }

  return (
    <div>
      <h3> Random Beer </h3>
      <div>
        <img className="imageBeer" src={randomBeer.image_url} alt="beer" />
        <div>
          <h4>{randomBeer.name}</h4>
          <h5>{randomBeer.tagline}</h5>
        </div>
        <div>
          <p>{randomBeer.attenuation_level}</p>
          <p>{randomBeer.first_brewed}</p>
        </div>
        <p>{randomBeer.description}</p>
        <p>
          <b>Created by:</b> {randomBeer.contributed_by}
        </p>
      </div>
    </div>
  );
}

export default RandomBeer;
