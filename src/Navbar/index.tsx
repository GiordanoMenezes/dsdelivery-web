import './styles.css';
import { ReactComponent as Logo } from '../assets/images/motologo.svg';

function Navbar() {
    return (
        <nav className="main-navbar">
            <a href="home">
                <Logo />
                <span className="logo-text">DS Delivery</span>
            </a>
        </nav>
    )
}

export default Navbar;