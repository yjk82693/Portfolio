"use client";

import { Row, Col, Card } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import ClientLayout from './components/ClientLayout';

const { Meta } = Card;

const phases = [
  {
    key: "1",
    title: "Phase 1: Elementary Years",
    description: "Setting a goal of being in the US",
    image: "https://raw.githubusercontent.com/yjk82693/Portfolio/main/my-portfolio/public/images/phase1.jpg", // Raw GitHub URL
    link: "/about/phase1", // Path to the detailed article
    alt: "Image representing Phase 1: Elementary Years",
  },
  {
    key: "2",
    title: "Phase 2: High School Life",
    description: "Finding my dream",
    image: "https://raw.githubusercontent.com/yjk82693/Portfolio/main/my-portfolio/public/images/phase2.jpg", // Raw GitHub URL
    link: "/about/phase2", // Path to the detailed article
    alt: "Image representing Phase 2: High School Life",
  },
  {
    key: "3",
    title: "Phase 3: University Life",
    description: "How I determined to be a programmer",
    image: "https://raw.githubusercontent.com/yjk82693/Portfolio/main/my-portfolio/public/images/phase3.jpg", // Raw GitHub URL
    link: "/about/phase3", // Path to the detailed article
    alt: "Image representing Phase 3: University Life",
  },
  {
    key: "4",
    title: "Phase 4: Army Experience",
    description: "Finding my insight more deeply",
    image: "https://raw.githubusercontent.com/yjk82693/Portfolio/main/my-portfolio/public/images/phase4.jpg", // Raw GitHub URL
    link: "/about/phase4", // Path to the detailed article
    alt: "Image representing Phase 4: Army Experience",
  },
];

const AboutMe = () => {
  return (
    <ClientLayout>
      <div style={{ padding: '40px', textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>Story of My Life</h1>

        {/* Display Cards in a Grid */}
        <Row gutter={[16, 16]}>
          {phases.map((phase) => (
            <Col xs={24} sm={12} lg={6} key={phase.key}>
              <Link href={phase.link}>
                <Card
                  hoverable
                  cover={
                    <div
                      style={{
                        position: 'relative',
                        height: '200px', // Fixed height for the image container
                        border: '2px solid #ccc', // Add border around images
                        borderRadius: '8px',
                        overflow: 'hidden', // Ensure rounded corners
                      }}
                    >
                      <Image
                        src={phase.image}
                        alt={phase.alt}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  }
                  style={{
                    height: '380px', // Fixed card height
                    backgroundColor: '#001529', // Menu background color
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    textAlign: 'left', // Align text to the left
                    color: '#ffffff', // White text color
                    borderRadius: '8px',
                    overflow: 'hidden',
                  }}
                >
                  <Meta
                    title={
                      <h3
                        style={{
                          fontWeight: 'bold',
                          fontSize: '18px',
                          color: '#ffffff', // White text for the title
                        }}
                      >
                        {phase.title}
                      </h3>
                    }
                    description={
                      <div
                        style={{
                          fontSize: '14px',
                          height: '60px', // Fixed height for descriptions
                          overflow: 'hidden', // Handle overflow
                          textOverflow: 'ellipsis', // Ellipsis for longer texts
                          color: '#f0f0f0', // Slightly lighter white for description text
                        }}
                      >
                        {phase.description}
                      </div>
                    }
                  />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </ClientLayout>
  );
};

export default AboutMe;
