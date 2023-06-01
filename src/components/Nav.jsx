import {Link} from "react-router-dom"
import "../Nav.css"

const Nav = ({ userId }) => {
  return (
    <nav>
      <Link to="/"><h1 className="nav-headers">NEWS!</h1></Link>
      <div className="links">
      <Link to="/"><p className="nav-headers">Home</p></Link>
      <Link to="/topics"><p className="nav-headers">Topics</p></Link>
      </div>
      <p className="user">User: {userId}</p>
    </nav>
  );
};

export default Nav;
