const Nav = ({ userId }) => {
  return (
    <nav>
      <p>Home</p>
      <p>Topics</p>
      <p>User: {userId}</p>
    </nav>
  );
};

export default Nav;
