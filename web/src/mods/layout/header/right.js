import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <nav className="nav-right">
            <Link to="/login">login</Link>
            <Link to="/register">register</Link>
            <div className="lang">
                lang
            </div>
        </nav>
    );
};
