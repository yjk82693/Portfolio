"use client";

import { Row, Col } from 'antd';
import ClientLayout from './components/ClientLayout';
import Image from 'next/image';

const HomePage = () => (
  <ClientLayout>
    <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Two Column Layout */}
      <Row gutter={32} align="middle">
        {/* Left Column: Introduction */}
        <Col xs={24} md={14}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}>
            Hello, I’m Yoojun Kim.
          </h1>
          <p style={{ fontSize: '24px', lineHeight: '1.5' }}>
            Inspired by the creativity of Disney and Nintendo, I pursued computer science to develop innovative technologies. My focus is on using AI to make creativity more accessible, empowering people to bring their stories and ideas to life.
          </p>
        </Col>

        {/* Right Column: Profile Image */}
        <Col xs={24} md={10}>
          <Image
            src="/Portfolio/images/logo.png" // Adjusted image path for GitHub Pages
            alt="Yoojun Kim"
            width={400}         
            height={400}        
            style={{ borderRadius: '50%', objectFit: 'cover' }} 
          />
        </Col>
      </Row>
    </div>
  </ClientLayout>
);

export default HomePage;
