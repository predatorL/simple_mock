import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <nav className="nav-left">
            <Link to="/home">home</Link>
            <Link to="/trade">trade</Link>
            <Link to="/announce">announce</Link>
        </nav>
    );
};
