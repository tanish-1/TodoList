
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <div>
        <ul>
        <li><a class="active" href="#home">Home</a>
        </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/contact"> Setting</Link>
            </li>
        </ul>
    </div>
  )
}

export default Home