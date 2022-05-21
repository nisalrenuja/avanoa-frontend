import React from "react";
import { Row, Col, Form, Input, Button, Space, notification } from "antd";
import "antd/dist/antd.css";
import { render } from "@testing-library/react";


const { TextArea } = Input;
require('dotenv').config();
const sgMail = require("@sendgrid/mail");
const apiKey = `${process.env.SENDGRID_API_KEY}`;
console.log("SendGrid key ", apiKey);

class EmergencyLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      isLoading: false,
    };
  }

  handleInput(e) {
    console.log(e.target.value);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ isLoading: true });
        const { name, email, phone, message } = this.state;
        const msg = {
          to: "nrenuja@gmail.com",
      from: values.email,
      subject: values.subject,
      html: `
      <p><strong>Name:</strong> ${values.name}</p>
      <p>${values.message}</p>`,
    };  // Send email to SendGrid account
    sgMail.setApiKey(apiKey); // SendGrid API key
    sgMail.send(msg);
    notification.success({
      message: "Success",
      description: "Your message has been sent successfully",
    });
    this.setState({ isLoading: false });
      }
    });
  };



  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div> 
        <Row>
          <Col span={24}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Item label="Name">
                {getFieldDecorator("name", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your name",
                    },
                  ],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Email">
                {getFieldDecorator("email", {

                  rules: [
                    {
                      required: true,
                      message: "Please input your email",
                    },
                  ],
                })(<Input />)}
              </Form.Item>
    
              <Form.Item label="Phone">
                {getFieldDecorator("phone", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your phone number",
                    },
                  ],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Message">
                {getFieldDecorator("message", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your message",
                    },
                  ],
                })(<TextArea />)}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}


export default EmergencyLayout;
