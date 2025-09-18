"use client";

import { Typography } from 'antd';
import Image from 'next/image';
import ClientLayout from '../../components/ClientLayout'; // Adjust the relative path as needed

const { Title, Paragraph } = Typography;

const Phase3 = () => {
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
            src="/images/phase3.jpg"
            alt="Phase 3: University Life"
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
            Phase 3: University Life
          </Title>

          <Paragraph style={{ fontSize: '18px', lineHeight: '1.8', textAlign: 'justify' }}>
            As I immersed myself in the world of computer science, I quickly realized that it offered even more possibilities than I had initially imagined. My interest in the field grew as I saw how technology could enable storytelling and create experiences that bring joy to others. During the COVID-19 pandemic, when the world felt uncertain and isolating, video games like <i>Super Mario</i> and <i>The Legend of Zelda</i> became a source of comfort for me. These games provided an escape, allowing me to explore vibrant worlds and immerse myself in stories beyond my own. Inspired by these experiences, I began to dream not only of creating animations but also of designing games that could evoke similar feelings of wonder and discovery for others.
          </Paragraph>

          <Paragraph style={{ fontSize: '18px', lineHeight: '1.8', textAlign: 'justify' }}>
            This newfound inspiration led me to start compiling notes and ideas for both games and animations. I spent countless hours brainstorming and planning, thinking of ways to combine my love for storytelling with interactive, immersive experiences. The possibility of building my own game worlds and characters fascinated me, and I dedicated myself to learning the skills necessary to bring these ideas to life. I took my first steps by studying game design concepts, creating sketches, and exploring the various elements that make a game both engaging and meaningful. This journey was both challenging and rewarding, as it gave me a clear direction for my future.
          </Paragraph>

          <Paragraph style={{ fontSize: '18px', lineHeight: '1.8', textAlign: 'justify' }}>
            Despite the difficulties of high school, especially during the pandemic, I found a sense of purpose in my growing passion for computer science. I was captivated by the technical possibilities of the field and the creative freedom it offered. Initially, I had turned to games to relieve stress, but over time, I developed a strong desire to create my own. I imagined building a game that combined the best aspects of console and mobile gaming, one that could be enjoyed both online and offline. With this goal in mind, I set out to learn programming languages like C, Java, and Python, striving to build a solid foundation. My hard work paid off as I achieved top grades in my computer science courses, reinforcing my commitment to pursuing this path.
          </Paragraph>

          <Paragraph style={{ fontSize: '18px', lineHeight: '1.8', textAlign: 'justify' }}>
            By the end of high school, I had even managed to develop a small mobile game inspired by <i>Flappy Bird</i>, marking my first real step into game development. This experience solidified my aspirations in both animation and game design. My dream had evolved from simply creating animations to building interactive stories that could be both played and experienced by people of all ages. Moving forward, I felt confident that I had found a field where I could combine storytelling, technical skills, and a deep passion for games. This realization was not just about career choice—it was the beginning of a lifelong journey to bring joy and imagination into people’s lives through the medium of games and technology.
          </Paragraph>
        </div>
      </div>
    </ClientLayout>
  );
};

export default Phase3;
