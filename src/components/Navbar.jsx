import {Link} from "react-router-dom"

import IconHouse from "../assets/icon-house.png"

//todo Preguntas como importar icono y font awasome
// import {HiHome} from "react-icons/fa"

// const homeHouse = 
// <i className="fa-solid fa-house"></i>


function Navbar() {
  return (
   
   
      <nav className="navbar navbar-dark bg-primary mb-3 ">
        <div className="container justify-content-center">
          <Link className="navbar-brand"  to="/">
           <img src={IconHouse} alt="home-house"/>
           {/* <HiHome/> */}
          </Link>
        </div>
      </nav>



 
  )
}

export default Navbar