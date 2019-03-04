import React from 'react';
import { Table } from 'antd';




class View extends React.Component {
    constructor() {
        super();
    }



    render() {
        const { dataSource, columns } = this.props;
        return <Table dataSource={dataSource} columns={columns} />;
    }
}

export default View;
