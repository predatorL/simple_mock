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
        const {match} = props;
        this.id = match.params.id;
    }

    queryList() {
        Api.project.queryOne({
            id: this.id
        }).then((res) => {
            if(res.status === 200) {
                const source = res.attachment.data;
                this.setState({
                    source,
                    dataSource: source.rules
                })
            }
        }).then(res => {
            this.setState({
                loading: false
            })
        })
    }

    componentWillMount() {
        console.log('rule')
        this.queryList();
    }

    state = {
        modalVisible: false,
        loading: true,
        source: {},
        dataSource: []
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
                创建新规则
            </Button>
            <CreatePro close={this.modalClose} visible={state.modalVisible}></CreatePro>
            <List dataSource={state.dataSource}
columns={listCols}></List>
        </div>
        );
    }
}

export default View;
