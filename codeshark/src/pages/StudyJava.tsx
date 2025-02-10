import React from 'react';
import { Collapse, Typography } from 'antd';

const { Title } = Typography;
const { Panel } = Collapse;

const Java: React.FC = () => {
  return (
    <div style={{ padding: '50px', backgroundColor: '#f7f7f7' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '30px' }}>
        Java Programming - E-Notes
      </Title>
      <Collapse accordion>
        <Panel header="Unit 1: Introduction to Java" key="1">
          <ul>
            <li>What is Java?</li>
            <li>Setting up JDK</li>
            <li>Hello World in Java</li>
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
            <li>Collections Framework</li>
            <li>Streams API</li>
            <li>Exception Handling</li>
          </ul>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Java;