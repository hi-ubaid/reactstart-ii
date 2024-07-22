import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

export const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}
