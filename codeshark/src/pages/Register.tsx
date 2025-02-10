import React from 'react';
import { Form, Input, Button, Typography, Row, Col, DatePicker } from 'antd';
import dayjs from 'dayjs';  // Import dayjs

const { Title } = Typography;

const Register: React.FC = () => {
  // Form submit handler (frontend only for now)
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  // Password confirmation rule
  const validatePasswordConfirm = ({ getFieldValue }: any) => ({
    validator(_: any, value: string) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('Passwords do not match!'));
    },
  });

  // Disable future dates using dayjs
  const disabledDate = (current: dayjs.Dayjs | null): boolean => {
    return !!current && current.isAfter(dayjs());
  };

  return (
    <Row justify="center" align="middle" style={{ height: '100vh', backgroundColor: '#f0f2f5' }}>
      <Col xs={24} sm={12} md={8}>
        <div style={{ padding: '24px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
          <Title level={2} style={{ textAlign: 'center' }}>Register</Title>
          <Form
            name="register"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            {/* Name Input */}
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input placeholder="Full Name" />
            </Form.Item>

            {/* Birthday Input */}
            <Form.Item
              name="birthday"
              rules={[{ required: true, message: 'Please input your birthday!' }]}
            >
              <DatePicker
                placeholder="Select Birthday"
                format="YYYY-MM-DD"
                style={{ width: '100%' }}
                disabledDate={disabledDate}
              />
            </Form.Item>

            {/* Email Input */}
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please enter a valid email!' }]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            {/* Password Input */}
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
              hasFeedback
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            {/* Confirm Password Input */}
            <Form.Item
              name="confirm"
              dependencies={['password']}
              hasFeedback
              rules={[
                { required: true, message: 'Please confirm your password!' },
                validatePasswordConfirm,
              ]}
            >
              <Input.Password placeholder="Confirm Password" />
            </Form.Item>

            {/* Register Button */}
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Register;
