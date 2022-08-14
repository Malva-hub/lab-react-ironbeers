
import {useState} from "react";
import { useEffect } from 'react';

import axios from "axios";

import {Link} from "react-router-dom"

import {useNavigate} from "react-router-dom"

import { FaBeer} from "react-icons/fa"

import Navbar from "../components/Navbar";



function AllBeers() {

  const navigate = useNavigate()

  const [allBeers, setAllBeers] = useState([])
  
  const [isFetching, setIsFetching] = useState(true)

  const [searchBeer, setSearchBeer] = useState([]);

  useEffect(() =>{
    getAllBeers()
  },[])

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

  const handleSearch = async (event) => {
    try{
      setSearchBeer(event.target.value)
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchBeer}`)
      setAllBeers([])
      setAllBeers(response.data)
      setIsFetching(false)
    }catch(error){
      navigate("/error")
    }
    
  };


  return (
    <div>
       <Navbar />
      <div>
     
        <label>Search <FaBeer/></label>
        <input value={searchBeer} type="text" name="searchBeer" onChange={handleSearch} />
      </div>
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