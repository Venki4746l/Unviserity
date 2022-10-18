

import React from "react";
import "antd/dist/antd.css";
import { Button, Checkbox, Form, Input } from "antd";
//import Layout from 'antd/lib/layout/layout';
import "./FacultyLogin.css";
import { Link } from "react-router-dom";

const FacultyLogin = () => {
  
  const onFinish = (values) => {
    
   

    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="facultySection">
      <Form
        className="fromSection"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        
        <Link to={"/FacultyHome"}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FacultyLogin;
