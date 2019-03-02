import React from 'react';
import {Button} from 'antd';
import history from '@/history';

export const listCols = [
    {
        title: '项目名',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: '根路径',
        dataIndex: 'root',
        key: 'root'
    },
    {
        title: '备注',
        dataIndex: 'note',
        key: 'note'
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