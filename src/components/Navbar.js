import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>
        <h1>React Projects</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
