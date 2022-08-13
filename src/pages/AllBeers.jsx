
import {useState} from "react";
import { useEffect } from 'react';

import axios from "axios";

import {Link, Navigate} from "react-router-dom"

import {useNavigate} from "react-router-dom"


function AllBeers() {

  const navigate = useNavigate()

  const [allBeers, setAllBeers] = useState([])
  
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() =>{
    getAllBeers()
  })

  const getAllBeers = async () => {
    try{
      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
      setAllBeers(response.data)
      setIsFetching(false)
    }catch(error){
      navigate("/error")
    }
      
  }

  if(isFetching === true ){
    return <h3>...Loading</h3>
  }

  

  return (
    <div>

        {allBeers.map((eachBeer) =>{
          return (
              <div key={eachBeer._id}>
                <Link to={`/beers/${eachBeer._id}/details`}> 
                <img className="imageBeer" src={eachBeer.image_url} alt="beer"/>
                </Link>
                <h4>{eachBeer.name}</h4>
                <h5>{eachBeer.tagline}</h5>
                <p><b>Created by:</b> {eachBeer.contributed_by}</p>
                
              </div>
          )
        })}  
    
    </div>
  )
}

export default AllBeers