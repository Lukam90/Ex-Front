import { useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(! click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        TRVL <i className="fab fa-typo3"></i>
                    </Link>

                    <div className="menu-icon" onClick={handleClick}>
                        <i className={"fas " + click ? "fa-times" : "fa-bars"}></i>
                    </div>

                    <ul className={"nav-menu" + click ? " active" : ""}>
                        <li className="nav-item">
                            <Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/services" className='nav-links' onClick={closeMobileMenu}>Services</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/products" className='nav-links' onClick={closeMobileMenu}>Products</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/signup" className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;