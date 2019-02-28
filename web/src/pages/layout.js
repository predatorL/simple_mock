import React from 'react';
import { Route } from 'react-router-dom';

import Header from '@/mods/layout/header';
import Footer from '@/mods/layout/footer';
// system
import login from './login'
import register from './register';
// home trade
import home from './home';

import RouteOther from './other/route';

export default class View extends React.Component {
    constructor(props) {
        super(props);
        console.log('layout', props);
    }

    getPath = () => {
        let _path = this.props.history.location.pathname;
        try {
            _path = _path.substr(1).replace(/\//g, '-');
        } catch (error) {
            console.error(error);
            _path = '';
        }
        return _path;
    };

    render() {
        let path = this.getPath();
        return (
            <div className={`app-page ${path}`}>
                <Header />
                <div className="main-wrapper">
                    <Route path="/" exact component={home} />
                    <Route path="/home" component={home} />
                    <Route path="/login" component={login} />
                    <Route path="/register" component={register} />
                    <RouteOther />
                </div>
                <Footer />
            </div>
        );
    }
}
