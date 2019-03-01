import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import HeaderContent from '@/mods/layout/header';

const { Header, Content } = Layout;
// system
import login from './login';
import register from './register';
// 页面
import create from './create';
import list from './list';
import env from './env';

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
                <Header id="header">
                    <HeaderContent></HeaderContent>
                </Header>
                <Content id="main">
                    <Route path="/" exact component={create} />
                    <Route path="/create" component={create} />
                    <Route path="/list" component={list} />
                    <Route path="/env" component={env} />
                    <Route path="/login" component={login} />
                    <RouteOther />
                </Content>
            </div>
        );
    }
}
