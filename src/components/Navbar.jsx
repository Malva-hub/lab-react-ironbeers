import {Link} from "react-router-dom"

import IconHouse from "../assets/icon-house.png"


function Navbar() {
  return (
   
   
      <nav className="navbar navbar-dark bg-info mb-3 ">
        <div className="container justify-content-center">
          <Link className="navbar-brand"  to="/">
           <img src={IconHouse} alt="home-house"/>
         
          </Link>
        </div>
      </nav>



 
  )
}

export default Navbar