import React from 'react';
import { Button } from 'antd';
import CreatePro from './create';
import List from './list';

class View extends React.Component {
    constructor() {
        super();
    }

    state = {
        modalVisible: false
    }

    render() {
        const { state } = this;
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
