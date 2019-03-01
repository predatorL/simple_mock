import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
    return (
        <div className="nav-wrapper">
            <NavLink className="link" to="/create">创建新规则</NavLink>
            <NavLink className="link" to="/list">规则列表</NavLink>
            <NavLink className="link" to="/env">环境列表</NavLink>
        </div>
    );
};
