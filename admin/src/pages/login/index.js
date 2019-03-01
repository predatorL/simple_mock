import React from 'react';
import { observer, inject } from 'mobx-react';
import { Form, Icon, Input, Button } from 'antd';

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

@inject('userStore')
class View extends React.Component {
    constructor() {
        super();
    }

    state = {
        login: 111,
        type: 'phone'
    };

    fieldRules = {
        name: {
            rules: [{ required: true, message: 'Please input your name!' }]
        },
        pwd: {
            rules: [{ required: true, message: 'Please input your pwd!' }]
        }
    };

    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
        console.log('componentDidMount', this.props.userStore)
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    switchType(type) {
        this.setState({
            type
        })
    }

    get submitDisable() {
        const { getFieldsError } = this.props.form;

        return hasErrors(getFieldsError())
    }

    checkField = (name, help) => {
        const { getFieldError, isFieldTouched } = this.props.form;
        // Only show error after a field is touched.
        let result = isFieldTouched(name) && getFieldError(name);
        if (help) {
            return result || ''
        }
        return result ? 'error' : ''
    }

    render() {
        const { state, checkField, fieldRules } = this;
        const { getFieldDecorator, getFieldError, isFieldTouched, } = this.props.form;
        // Only show error after a field is touched.
        const nameError = isFieldTouched('name') && getFieldError('name');
        const pwdError = isFieldTouched('pwd') && getFieldError('pwd');
        return (
            <main className="login">
                <Form layout="vertical" onSubmit={this.handleSubmit}>
                    <Form.Item className="tpye">
                        <div className="title">{$GLOBAL.lang.template('登录')}</div>
                        <div className="switch">
                            <span className="item" onClick={this.switchType.bind(this, 'mail')}>{$GLOBAL.lang.template('邮箱')}</span>
                            |
                            <span className="item" onClick={this.switchType.bind(this, 'phone')}>{$GLOBAL.lang.template('手机号')}</span>
                        </div>
                    </Form.Item>
                    {
                        state.type === 'phone' ? [
                            <Form.Item key="1" validateStatus={checkField('areaCode')} help={checkField('areaCode', true)}>
                                {getFieldDecorator('areaCode', fieldRules.name)(<Input placeholder={$GLOBAL.lang.template('区域码')} />)}
                            </Form.Item>,
                            <Form.Item key="2" validateStatus={checkField('phone')} help={checkField('phone', true)}>
                                {getFieldDecorator('phone', fieldRules.name)(<Input placeholder={$GLOBAL.lang.template('手机号')} />)}
                            </Form.Item>
                        ] : <Form.Item validateStatus={checkField('email')} help={checkField('email', true)}>
                                {getFieldDecorator('email', fieldRules.name)(<Input placeholder={$GLOBAL.lang.template('邮箱')} />)}
                            </Form.Item>
                    }

                    <Form.Item validateStatus={pwdError ? 'error' : ''} help={pwdError || ''}>
                        {getFieldDecorator('pwd', fieldRules.pwd)(<Input type="password" placeholder={$GLOBAL.lang.template('登录密码')} />)}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" disabled={this.submitDisable}>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </main>
        );
    }
}
export default Form.create({})(View);
