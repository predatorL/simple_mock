import React from 'react';
import {Button} from 'antd';
import history from '@/history';

export const listCols = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'API',
        dataIndex: 'api',
        key: 'api'
    },
    {
        title: '请求方式',
        dataIndex: 'type',
        key: 'type'
    },
    {
        title: '参数',
        dataIndex: 'params',
        key: 'params'
    },
    {
        title: '操作',
        key: 'opt',
        render: row => {
            return <Button onClick={e => {
                history.push(`/project/${row.id}/rule`)
            }}>详情</Button>
        },
    }
];
