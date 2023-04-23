import React from 'react';
import { Link } from 'react-router-dom';
import './NavComponent.css';

class NavComponent extends React.Component {
    render() {
        const { pathname } = this.props?.location;

        return (
            <nav className="navbar">
                <ul className="nav-list">
                    <li className={pathname === '/' ? 'active' : ''}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={pathname === '/about' ? 'active' : ''}>
                        <Link to="/about">About</Link>
                    </li>
                    <li className={pathname === '/contact' ? 'active' : ''}>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavComponent;
