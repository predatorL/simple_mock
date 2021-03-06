import React from "react";
import { Form, Input, Button, Modal, message } from "antd";
import Api from "@/api";

class View extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        Api.project.create(values).then(({ status, ...res }) => {
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
              rules: [{ required: true, message: "请填写项目名" }]
            })(<Input placeholder="项目名" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("root", {
              rules: [{ required: true, message: "请填写项目根路径" }]
            })(<Input placeholder="项目根路径,请求的路径组成部分" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("note", {
              rules: [{ required: true, message: "请填写备注" }]
            })(<Input placeholder="备注" />)}
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
