'use client';
import React from 'react';

const projects = [
  {
    name: 'Tetris',
    description:
      'A classic Tetris game built with Pygame, featuring block rotation, line clearing, and increasing difficulty.',
    githubLink: 'https://github.com/yjk82693/Pygame/blob/main/Tetris/Tetris.py',
    image: 'https://raw.githubusercontent.com/yjk82693/Portfolio/main/Portfolio/public/images/tetris.jpg',
  },
  {
    name: 'Snake Game',
    description:
      'A modern twist on the classic Snake game, where players navigate a growing snake to eat food while avoiding collisions.',
    githubLink: 'https://github.com/yjk82693/Pygame/blob/main/Snake/snake.py',
    image: 'https://raw.githubusercontent.com/yjk82693/Portfolio/main/Portfolio/public/images/snake.jpg',
  },
  {
    name: "Orca's Rush",
    description:
      'A Flappy Bird-inspired game with an Orca navigating underwater obstacles while collecting points.',
    githubLink: 'https://github.com/yjk82693/Pygame/blob/main/Orca/orca.py',
    image: 'https://raw.githubusercontent.com/yjk82693/Portfolio/main/Portfolio/public/images/orca.jpg',
  },
];

const ProjectsSection = () => {
  return (
    <section style={{ padding: '80px 20px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '40px' }}>My Projects</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
        {projects.map((project) => (
          <div
            key={project.name}
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '16px',
              maxWidth: '300px',
              boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
              textAlign: 'center',
            }}
          >
            <img
              src={project.image}
              alt={project.name}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '16px',
              }}
            />
            <h3 style={{ fontSize: '22px', fontWeight: '600' }}>{project.name}</h3>
            <p style={{ fontSize: '16px', color: '#666', margin: '12px 0' }}>{project.description}</p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '10px',
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: '#fff',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '500',
              }}
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;