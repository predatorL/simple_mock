import React from 'react';
import {Button} from 'antd';
import history from '@/history';

export const listCols = (ctx) => {
    return [
        {
            title: '名称',
            dataIndex: 'name',
        },
        {
            title: 'API',
            dataIndex: 'api',
        },
        {
            title: '请求方式',
            dataIndex: 'type',
        },
        {
            title: '参数',
            dataIndex: 'params',
        },
        {
            title: '操作',
            render: row => {
                return <Button onClick={e => {
                    history.push(`/project/${row.id}/rule`)
                }}>编辑</Button>
            },
        }
    ];
}
