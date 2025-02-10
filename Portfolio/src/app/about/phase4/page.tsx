"use client";

import { Typography } from 'antd';
import Image from 'next/image';
import ClientLayout from '../../components/ClientLayout'; // Adjust the relative path as needed

const { Title, Paragraph } = Typography;

const Phase4 = () => {
  return (
    <ClientLayout>
      <div
        style={{
          padding: '40px',
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'left',
          border: '2px solid #001529', // Add border
          borderRadius: '10px', // Rounded corners
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Add subtle shadow
        }}
      >
        {/* Image at the top */}
        <div style={{ marginBottom: '20px' }}>
          <Image
            src="https://raw.githubusercontent.com/yjk82693/Portfolio/main/Portfolio/public/images"
            alt="Phase 4: Army Experience"
            width={1000} // Adjust width as needed
            height={400} // Adjust height as needed
            style={{
              borderRadius: '8px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        {/* Title and content */}
        <div style={{ padding: '0 20px' }}>
          <Title level={1} style={{ fontSize: '36px', marginBottom: '20px' }}>
            Phase 4: Army Experience
          </Title>

          <Paragraph style={{ fontSize: '18px', lineHeight: '1.8', textAlign: 'justify' }}>
            My time in the military was one of the most challenging periods of my life. Unlike my previous experiences, where I had the freedom to study what I wanted and pursue my passions at my own pace, military life was rigid, structured, and physically exhausting. The lack of personal time made it difficult to continue my academic and creative pursuits. However, rather than seeing this as an obstacle, I used it as an opportunity to develop resilience, discipline, and efficient time management skills.
          </Paragraph>

          <Paragraph style={{ fontSize: '18px', lineHeight: '1.8', textAlign: 'justify' }}>
            Knowing that my time was limited, I made every effort to remain productive. I carried a notebook with me, where I jotted down ideas for future projects whenever I found a spare moment. Over the course of my service, I outlined over ten Game Design Documents (GDDs) and drafted scripts for animations I wanted to create in the future. Even in an environment where creative work was nearly impossible, I refused to let my passion for storytelling and game development fade.
          </Paragraph>

          <Paragraph style={{ fontSize: '18px', lineHeight: '1.8', textAlign: 'justify' }}>
            While in the army, I also had the opportunity to explore artificial intelligence (AI). I became increasingly fascinated with how AI technology was revolutionizing the gaming and animation industries. The potential of AI to enhance creative processes excited me because it made these mediums more accessible to creators who may not have traditional technical expertise. I realized that AI could help others like me—people who dream of creating imaginative worlds but may not have the resources or technical skills to bring their ideas to life.
          </Paragraph>

          <Paragraph style={{ fontSize: '18px', lineHeight: '1.8', textAlign: 'justify' }}>
            As my military service came to an end, I felt a renewed sense of purpose. My time in the army had taught me the importance of perseverance, adaptability, and efficient time management. More importantly, it reinforced my belief that technology, particularly AI, could be used to empower creatives worldwide. I now aspire to develop AI tools tailored to creative industries, allowing more people to turn their ideas into reality. With this goal in mind, I am determined to continue my journey in both game development and AI research, working towards a future where technology and storytelling seamlessly merge.
          </Paragraph>
        </div>
      </div>
    </ClientLayout>
  );
};

export default Phase4;
