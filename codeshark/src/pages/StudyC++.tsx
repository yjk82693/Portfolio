import React from 'react';
import { Collapse, Typography } from 'antd';

const { Title } = Typography;
const { Panel } = Collapse;

const CPlusPlus: React.FC = () => {
  return (
    <div style={{ padding: '50px', backgroundColor: '#f7f7f7' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '30px' }}>
        C++ Programming - E-Notes
      </Title>
      <Collapse accordion>
        <Panel header="Unit 1: Introduction to C++" key="1">
          <ul>
            <li>What is C++?</li>
            <li>Setting up the Environment</li>
            <li>First C++ Program</li>
          </ul>
        </Panel>
        <Panel header="Unit 2: Object-Oriented Programming" key="2">
          <ul>
            <li>Classes and Objects</li>
            <li>Inheritance</li>
            <li>Polymorphism</li>
          </ul>
        </Panel>
        <Panel header="Unit 3: Advanced Topics" key="3">
          <ul>
            <li>Pointers and Memory Management</li>
            <li>Templates</li>
            <li>STL (Standard Template Library)</li>
          </ul>
        </Panel>
      </Collapse>
    </div>
  );
};

export default CPlusPlus;
