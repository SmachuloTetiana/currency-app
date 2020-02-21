import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark mb-4">
                <a href="/" className="navbar-brand">Forcelate</a>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink 
                            activeClassName="active" 
                            className="nav-link" 
                            exact
                            to='/'>
                                Dashboard
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink 
                            activeClassName="active" 
                            className="nav-link" 
                            exact
                            to='/instances'>
                                Instances
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink 
                            activeClassName="active" 
                            className="nav-link" 
                            exact
                            to='/pairs'>
                                Pairs
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink 
                            activeClassName="active" 
                            className="nav-link" 
                            exact
                            to='/about'>
                                About
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink 
                            activeClassName="active" 
                            className="nav-link" 
                            exact
                            to='/help'>
                                Help
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink 
                            activeClassName="active" 
                            className="nav-link" 
                            exact
                            to='/contact'>
                                Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;