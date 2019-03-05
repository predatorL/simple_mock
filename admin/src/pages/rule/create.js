import React from "react";
import { Form, Input, Button, Modal, message } from "antd";
import Api from "@/api";

class View extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        Api.rule.create({
            data: values,
            pro_id: this.props.pro_id
        }).then(({ status, ...res }) => {
          if (status === 200) {
            message.success('创建项目成功');
            this.props.close(true);
          } else {
            message.error('创建项目失败,' + res.message);
          }
        });
      }
    });
  };

  render() {
    const { state, props } = this;
    const { getFieldDecorator } = this.props.form;
    return (
      <Modal visible={props.visible} footer={null} title="创建新项目" onCancel={e => {
        props.close(false)
      }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "请填写api名称" }]
            })(<Input placeholder="api名称" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("api", {
              rules: [{ required: true, message: "请填写api" }]
            })(<Input placeholder="api路径" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("type", {
              rules: [{ required: true, message: "请填请求方式" }]
            })(<Input placeholder="请求方式" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("params", {
              rules: [{ required: true, message: "请填请求参数" }]
            })(<Input placeholder="请求参数" />)}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              创建
                </Button>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(View);
