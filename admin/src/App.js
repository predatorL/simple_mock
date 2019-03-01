import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import Layout from '@/pages/layout';
import history from '@/history';
import stores from './stores';
import {Provider} from 'mobx-react';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Provider {...stores}>
            <Router history={history}>
               <Layout history={history}></Layout>
            </Router>
            </Provider>
        );
    }
}

export default App;
