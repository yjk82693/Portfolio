"use client";

import { Typography, Button } from 'antd';
import ClientLayout from '../components/ClientLayout'; // Adjust the relative path to your layout component

const { Title } = Typography;

const Resume = () => {
  return (
    <ClientLayout>
      <div style={{ padding: '40px', textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <Title level={2}>Resume</Title>
        <Button
          type="primary"
          href="https://www.overleaf.com/read/gntxyzbbvpcf#e1bbdc" // Overleaf shareable link
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: '10px' }}
        >
          Open Resume
        </Button>
      </div>
    </ClientLayout>
  );
};

export default Resume;
