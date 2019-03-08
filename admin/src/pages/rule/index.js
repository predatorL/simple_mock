import React from 'react';
import { Button } from 'antd';
import CreatePro from './create';
import List from './list';
import history from '@/history';
import Api from '@/api';
import { listCols } from './_data';

class View extends React.Component {
    constructor(props) {
        super(props);
        const { match } = props;
        this.id = match.params.id;
        this.cols = listCols(this);
    }
    state = {
        modalVisible: false,
        loading: true,
        source: {},
        dataSource: []
    };
    componentWillMount() {
        console.log('rule');
        this.queryList();
    }
    queryList() {
        Api.project
            .queryOne({
                id: this.id
            })
            .then(res => {
                if (res.status === 200) {
                    const source = res.attachment.data;
                    this.setState({
                        source,
                        dataSource: source.rules
                    });
                }
            })
            .then(res => {
                this.setState({
                    loading: false
                });
            });
    }

    modalClose = isCreate => {
        if (isCreate) {
            this.queryList();
        }
        this.setState({ modalVisible: false });
    };

    updateMock = () => {
        Api.project
        .updateMock({
            id: this.id
        })
        .then(res => {
            if (res.status === 200) {
                const source = res.attachment.data;
                this.setState({
                    source,
                    dataSource: source.rules
                });
            }
        })
        .then(res => {
            this.setState({
                loading: false
            });
        });
    }

    render() {
        const { state } = this;
        if (state.loading) {
            return null;
        }
        return (
            <div className="view-project">
                <div className="query-form">
                    <Button
                        type="primary"
                        onClick={e => {
                            this.setState({ modalVisible: true });
                        }}
                    >
                        创建新规则
                    </Button>
                    <Button
                        type="primary"
                        onClick={this.updateMock}
                    >
                        更新mock
                    </Button>
                </div>
                <CreatePro pro_id={this.id} close={this.modalClose} visible={state.modalVisible} />
                <List pro_id={this.id} dataSource={state.dataSource} columns={this.cols} />
            </div>
        );
    }
}

export default View;
