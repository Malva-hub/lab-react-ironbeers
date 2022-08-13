import {Link } from "react-router-dom";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

function Home() {

  return (
    <div  className="container justify-content-center">
        <div> 
            <Link to="/beers">
              <img className="image" src={beers} alt="beers" />
              <div className="d-inline-block "> 
                <h3>All Beers</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis reiciendis porro, sit dolores expedita nesciunt et suscipit esse corrupti, illum, debitis consectetur accusantium deserunt quis labore sint libero aperiam excepturi?</p>
              </div>
            </Link>
        </div>

        <div>
            <Link to="/random-beer">
              <img className="image" src={randomBeer} alt="random-beer" />
              <div className="d-inline-block "> 
                <h3>Random Beers</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ut, animi aperiam aspernatur consequuntur aliquam corporis rerum quia perspiciatis sit fuga dignissimos sint expedita nobis temporibus perferendis unde illum maiores.</p>
              </div>
              
            </Link>
        </div>
        <div>
            <Link to="/new-beer">
              <img className="image" src={newBeer} alt="new-beer" />
              <div className="d-inline-block ">
                <h3>New Beer</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur doloribus accusamus officiis odio facere unde molestias expedita dicta! Fugit est, cum doloribus repellat reprehenderit aliquam hic vitae quidem delectus libero!</p>
              </div>
              
            </Link>
        </div>
    </div>
  )
}

export default Home