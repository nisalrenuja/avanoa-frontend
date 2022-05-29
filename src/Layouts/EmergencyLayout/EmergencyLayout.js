import React, { Component } from 'react';
import { Row, Col, Form, Input, Button, Space, notification } from "antd";
import "antd/dist/antd.css";
// require('dotenv').config();

const { TextArea } = Input;

const sgMail = require("@sendgrid/mail");

const initializeSendGrid =async()=> {
  const apiKey = await process.env.REACT_APP_SENDGRID_API_KEY;
  sgMail.setApiKey(apiKey);
  console.log("SendGrid key ", apiKey);

};

export default EmergencyLayout;

initializeSendGrid();

function EmergencyLayout() {

  const initialState = { 
    name: "",
    email: "",
    subject: "",
    message: "",
  }; 
  const [input,SetInput] = React.useState(initialState);

  const handleClick = (e) => {
    e.preventDefault();
    const {value,name} = e.target;
    SetInput((values)=>({...values,[name]:value}));
   
  }

  const [form] = Form.useForm();

  const onComplete = (fields) => {
    const message = {
      to: "nrenuja@gmail.com",  
      from: fields.email,
      subject: fields.subject,
      html: `
      <p><strong>Name:</strong> ${fields.name}</p>
      <p>${fields.message}</p>`,
    };

    sgMail
      .send(message)
      .then(() => {
        form.resetFields();
        console.log("Email Sent!");
        notification.open({
          message: "Message successfu!",
          description: "We have successfully received your email.",
        });
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };
  // this.handleClick = this.handleClick.bind(this);
  // handleClick = value => () => {
  //   console.log(value);
  // };
  
  return (
    
    <Row gutter={24} style={{ padding: "30px" }}>
      <Col xl={12}>
        <Form layout="vertical" form={form} onFinish={onComplete}>
        
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: false,
              },
            ]}
            >
              <input type="button" name="name" value ="Care Taker" onClick={handleClick} />
              <input type="button" name="name" value ="Hospital" onClick={handleClick} />
              <input type="button" name="name" value ="Guardian" onClick={handleClick} />
           
          
           <Input  value={input.name} required/>
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <input type="button" name="email" value ="nawaloka@gmail.com" onClick={handleClick} />
            <input type="button" name="email" value ="zoysa@gmail.com" onClick={handleClick} />
            <input type="button" name="email" value ="randimal@gmail.com" onClick={handleClick} /> 
             <Input value={input.email} required/> 
          </Form.Item>
          <Form.Item
            name="subject"
            label="Subject"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <input type="button" name="subject" value ="I need Help!" onClick={handleClick} />
            <input type="button" name="subject" value ="Emergency" onClick={handleClick} />
            <input type="button" name="subject" value ="I'm not well" onClick={handleClick} />
              
             <Input value={input.subject} required/> 
          </Form.Item>
          <Form.Item
            name="message"
            label="Message"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <input type="button" name="message" value ="I need Help!I'm not well" onClick={handleClick} />
            <input type="button" name="message" value ="Emergency!!! Please come" onClick={handleClick} />
            
              
             <TextArea value={input.message} required/> 
          </Form.Item>
          <Form.Item>         
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              {/* <Button
                type="secondary"
                htmlType="submit"
                onClick={(e) => form.resetFields()}
              >
                Clear
              </Button> */} 
              
            </Space>
            
          </Form.Item>
        </Form>
        
      </Col>
    </Row>
  );
  
}

// export default EmergencyLayout;