
import {Link} from "react-router-dom"

import Navbar from "../components/Navbar";

function Message() {
  return (
    <div>
        <Navbar/>
        <h3>New beer successfully saved to database!</h3>
        <Link to="/beers">Return to All Beers</Link>
    </div>
  )
}

export default Message

