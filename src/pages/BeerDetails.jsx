import { useParams } from "react-router-dom";

import { useEffect } from "react";
import { useState } from "react";

import axios from "axios";

function BeerDetails() {
  const { beerId } = useParams();

  const [beerDetails, setBeerDetails] = useState(null);

  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getBeerDetails();
  }, []);

  const getBeerDetails = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );

      setBeerDetails(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isFetching === true) {
    return <h3>...Loading</h3>;
  }

  const {
    image_url,
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
    contributed_by,
  } = beerDetails;

  return (
    <div>
      <div>
        <img className="imageBeer" src={image_url} alt="beer" />
        <div>
          <h4>{name}</h4>
          <h5>{tagline}</h5>
        </div>
        <div>
          <p>{attenuation_level}</p>
          <p>{first_brewed}</p>
        </div>
        <p>{description}</p>
        <p>
          <b>Created by:</b> {contributed_by}
        </p>
      </div>
    </div>
  );
}

export default BeerDetails;
