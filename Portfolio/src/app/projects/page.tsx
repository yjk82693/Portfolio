"use client";

import React from 'react';
import Image from 'next/image';
import { Card, Button } from 'antd';
import ClientLayout from '../components/ClientLayout';

const { Meta } = Card;

const projects = [
  {
    name: 'Tetris',
    description:
      'A classic Tetris game built with Pygame, featuring block rotation, line clearing, and increasing difficulty.',
    githubLink:
      'https://github.com/yjk82693/Pygame/blob/main/Tetris/Tetris.py',
    image:
      'https://raw.githubusercontent.com/yjk82693/Portfolio/main/Portfolio/public/images/tetris.jpg',
  },
  {
    name: 'Snake Game',
    description:
      'A modern twist on the classic Snake game, where players navigate a growing snake to eat food while avoiding collisions.',
    githubLink:
      'https://github.com/yjk82693/Pygame/blob/main/Snake/Snake.py',
    image:
      'https://raw.githubusercontent.com/yjk82693/Portfolio/main/Portfolio/public/images/snake.jpg',
  },
  {
    name: "Orca's Rush",
    description:
      'A Flappy Bird-inspired game with an Orca navigating underwater obstacles while collecting points.',
    githubLink:
      'https://github.com/yjk82693/Pygame/blob/main/OrcasRush/OrcaRush.py',
    image:
      'https://raw.githubusercontent.com/yjk82693/Portfolio/main/Portfolio/public/images/orca.jpg',
  },
];

const ProjectsPage = () => {
  return (
    <ClientLayout>
      <div style={{ padding: '40px 20px' }}>
        <h1 style={{ fontSize: '36px', textAlign: 'center', marginBottom: '40px' }}>
          My Projects
        </h1>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            justifyContent: 'center',
          }}
        >
          {projects.map((project, idx) => (
            <Card
              key={idx}
              style={{
                width: 300,
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
              hoverable={false}
              cover={
                <div style={{ position: 'relative', height: '180px' }}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                    unoptimized
                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                  />
                </div>
              }
            >
              <Meta
                title={project.name}
                description={<p style={{ marginBottom: '16px' }}>{project.description}</p>}
              />
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', marginTop: '16px', textAlign: 'center' }}
              >
                <Button type="primary">View on GitHub</Button>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </ClientLayout>
  );
};

export default ProjectsPage;