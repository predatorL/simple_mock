import React from 'react';
import { Button } from 'antd';
import CreatePro from './create';
import List from './list';
import history from '@/history';
import Api from '@/api';

class View extends React.Component {
    constructor(props) {
        super(props);
        const {match} = props;
        console.log(props.match);
    }

    state = {
        modalVisible: false,
        loading: true
    }

    render() {
        const { state } = this;
        if(state.loading) {
            return null;
        }
        return (
            <div className="view-project">
                <Button type="primary"  onClick={e => {
                    this.setState({ modalVisible: true })
                }}>
                    创建新项目
                </Button>
                <CreatePro close={e => {
                    this.setState({ modalVisible: false })
                }} visible={state.modalVisible}></CreatePro>
                <List></List>
            </div>
        );
    }
}

export default View;
