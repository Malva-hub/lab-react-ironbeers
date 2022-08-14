
import {Link} from "react-router-dom"

import Navbar from "../components/Navbar";

function Message() {
  return (
    <div>
        <Navbar/>
        <h3>La cerveza se ha agregado correctamente</h3>
        <Link to="/beers">Volver al listado de cervezas</Link>
    </div>
  )
}

export default Message

