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
                        <NavLink to="/about">サービス</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">当サロンについて</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">ご予約・お問い合わせ</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;