import React from 'react';
import { Row, Col, Typography, Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom'; // For navigation between pages
import codesharkLogo from '../assets/codeshark-logo.png';  // Adjust the path accordingly

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  const navigate = useNavigate(); // Hook to navigate to register page

  return (
    <div style={{ padding: '50px', backgroundColor: '#1c1f25', textAlign: 'center' }}>
      {/* Welcome Message */}
      <div style={{ marginBottom: '40px' }}>
        <Title level={2} style={{ color: '#ffffff' }}>Welcome to CodeShark!</Title>
        <Paragraph style={{ color: '#ffffff', fontSize: '18px' }}>
          Explore the world of programming with interactive lessons and real-world examples.
        </Paragraph>
      </div>

      {/* Row with Image on Left and Login on Right */}
      <Row justify="center" align="middle" gutter={[16, 16]} style={{ display: 'flex', alignItems: 'stretch' }}>
        <Col xs={24} sm={12} md={10} style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={codesharkLogo}
            alt="CodeShark Logo"
            style={{ maxWidth: '100%', borderRadius: '8px', height: 'auto' }}
          />
        </Col>
        <Col xs={24} sm={12} md={10} style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', width: '100%', height: '100%' }}>
            <Title level={3} style={{ color: '#000000' }}>Login</Title>
            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={(values) => console.log('Login Success:', values)}
            >
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please enter a valid email!' }]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Login
                </Button>
              </Form.Item>

              {/* Register Button */}
              <Form.Item>
                <Button type="link" block onClick={() => navigate('/register')}>
                  New user? Register here
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
