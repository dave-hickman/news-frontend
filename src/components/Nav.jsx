import "../Nav.css"

const Nav = ({ userId }) => {
  return (
    <nav>
      <h1>NEWS!</h1>
      <div className="links">
      <p>Home</p>
      <p>Topics</p>
      </div>
      <p className="user">User: {userId}</p>
    </nav>
  );
};

export default Nav;
