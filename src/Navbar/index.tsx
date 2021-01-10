import './styles.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/images/motologo.svg';

function Navbar() {
  return (
    <nav className="main-navbar">
      <Link to="/">
        <Logo />
        <span className="logo-text">DS Delivery</span>
      </Link>
    </nav>
  );
}

export default Navbar;
