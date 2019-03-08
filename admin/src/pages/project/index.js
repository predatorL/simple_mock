import React from 'react';
import { Button } from 'antd';
import CreatePro from './create';
import List from './list';
import Api from '@/api';
import { listCols } from './_data';

class View extends React.Component {
    constructor() {
        super();
    }

    state = {
        modalVisible: false,
        dataSource: []
    };

    componentDidMount() {
        console.log('project');
        this.queryList();
    }

    queryList = (page = 1) => {
        Api.project.query().then(({ status, attachment }) => {
            // TODO: 回来对res做下预处理
            if (status === 200) {
                this.setState({
                    dataSource: attachment.data.map((item, i) => {
                        return {
                            ...item,
                            key: i
                        };
                    })
                });
            }
        });
    };

    modalClose = isCreate => {
        if (isCreate) {
            this.queryList();
        }
        this.setState({ modalVisible: false });
    };

    render() {
        const { state } = this;
        return (
            <div className="view-project">
                <div className="query-form">
                    <Button
                        type="primary"
                        onClick={e => {
                            this.setState({ modalVisible: true });
                        }}
                    >
                        创建新项目
                    </Button>
                </div>

                <CreatePro close={this.modalClose} visible={state.modalVisible} />
                <List dataSource={state.dataSource} columns={listCols} />
            </div>
        );
    }
}

export default View;
