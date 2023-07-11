import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div>
                <ul>
                    <li>
                        <NavLink to="/">ホーム</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">サービス</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">連絡</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;