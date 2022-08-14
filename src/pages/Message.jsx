import React from 'react'
import {Link} from "react-router-dom"

function Message() {
  return (
    <div>
        <h3>La cerveza se ha agregado correctamente</h3>
        <Link to="/beers">Volver al listado de cervezas</Link>
    </div>
  )
}

export default Message

