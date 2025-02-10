import React from 'react';
import { Row, Col, Typography, Card } from 'antd';
import { useNavigate } from 'react-router-dom'; // For navigation

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  const navigate = useNavigate(); // Navigation hook

  return (
    <div style={{ padding: '50px', backgroundColor: '#1c1f25', textAlign: 'center' }}>
      {/* Welcome Message */}
      <div style={{ marginBottom: '40px' }}>
        <Title level={2} style={{ color: '#ffffff' }}>Welcome to CodeShark!</Title>
        <Paragraph style={{ color: '#ffffff', fontSize: '18px' }}>
          Start your journey to mastering programming with our curated courses. 
          Whether you're a beginner or looking to enhance your skills, CodeShark offers hands-on tutorials and real-world projects in C, Java, Python, and C++.
        </Paragraph>
      </div>

      {/* Colorful Cards Section */}
      <Row justify="center" gutter={[16, 16]}>
        {/* C Card */}
        <Col xs={24} sm={12} md={6}>
          <Card
            hoverable
            onClick={() => navigate('/study-c')}
            style={{
              textAlign: 'center',
              height: '100%',
              background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
              color: '#ffffff',
              borderRadius: '10px',
              transition: 'transform 0.2s',
            }}
          >
            <Title level={3} style={{ color: '#ffffff' }}>C</Title>
            <Paragraph style={{ color: '#ffffff' }}>Learn the fundamentals of C programming.</Paragraph>
          </Card>
        </Col>

        {/* Java Card */}
        <Col xs={24} sm={12} md={6}>
          <Card
            hoverable
            onClick={() => navigate('/study-java')}
            style={{
              textAlign: 'center',
              height: '100%',
              background: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
              color: '#ffffff',
              borderRadius: '10px',
              transition: 'transform 0.2s',
            }}
          >
            <Title level={3} style={{ color: '#ffffff' }}>Java</Title>
            <Paragraph style={{ color: '#ffffff' }}>Master Java for enterprise solutions.</Paragraph>
          </Card>
        </Col>

        {/* Python Card */}
        <Col xs={24} sm={12} md={6}>
          <Card
            hoverable
            onClick={() => navigate('/study-python')}
            style={{
              textAlign: 'center',
              height: '100%',
              background: 'linear-gradient(135deg, #fbc2eb 0%, #a18cd1 100%)',
              color: '#ffffff',
              borderRadius: '10px',
              transition: 'transform 0.2s',
            }}
          >
            <Title level={3} style={{ color: '#ffffff' }}>Python</Title>
            <Paragraph style={{ color: '#ffffff' }}>Dive into Python for data science and more.</Paragraph>
          </Card>
        </Col>

        {/* C++ Card */}
        <Col xs={24} sm={12} md={6}>
          <Card
            hoverable
            onClick={() => navigate('/study-cplusplus')}
            style={{
              textAlign: 'center',
              height: '100%',
              background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
              color: '#ffffff',
              borderRadius: '10px',
              transition: 'transform 0.2s',
            }}
          >
            <Title level={3} style={{ color: '#ffffff' }}>C++</Title>
            <Paragraph style={{ color: '#ffffff' }}>Learn the power of C++ for high-performance applications and system programming.</Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
