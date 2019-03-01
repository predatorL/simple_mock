import React from 'react';
import { Route } from 'react-router-dom';
import announce from './announce';
import announceDetail from './announce/detail';
export default () => {
    return (
        <React.Fragment>
            <Route path="/announce" exact component={announce}></Route>
            <Route path="/announce/detail/:id" component={announceDetail}></Route>
        </React.Fragment>
    );
};
