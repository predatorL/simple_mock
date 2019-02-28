import React from 'react';
import { Link } from 'react-router-dom';
import Left from './left';
import Right from './right';

export default () => {
    return (
        <header className="app-layout-header">
            <div className="nav-wrapper">
                <Left></Left>
                <Right></Right>
            </div>
        </header>
    );
};
