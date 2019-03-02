import React from 'react';
import { Table } from 'antd';
import Api from '@/api';
import { listCols } from './_data';
// const dataSource = [
//     {
//         key: '1',
//         name: '胡彦斌',
//         age: 32,
//         address: '西湖区湖底公园1号'
//     },
//     {
//         key: '2',
//         name: '胡彦祖',
//         age: 42,
//         address: '西湖区湖底公园1号'
//     }
// ];


class View extends React.Component {
    constructor() {
        super();
    }
    state = {
        dataSource: [],
        columns: listCols,
    }
    componentDidMount() {
        Api.project.query().then(({ status, attachment }) => {
            // TODO: 回来对res做下预处理
            if (status === 200) {
                this.setState({
                    dataSource: attachment.data.map((item, i) => {
                        return {
                            ...item,
                            key: i
                        }
                    })
                })
            }
        })
    }
    render() {
        const { dataSource, columns } = this.state;
        return <Table dataSource={dataSource} columns={columns} />;
    }
}

export default View;
