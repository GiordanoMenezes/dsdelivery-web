import './styles.css';
import { ReactComponent as Logo } from '../assets/images/motologo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="main-navbar">
            <Link to="/">
                <Logo />
                <span className="logo-text">DS Delivery</span>
            </Link>
        </nav>
    )
}

export default Navbar;