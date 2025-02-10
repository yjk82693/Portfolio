// StudyPython.tsx
import React from 'react';
import { Collapse, Typography } from 'antd';

const { Title } = Typography;
const { Panel } = Collapse;

const Python: React.FC = () => {
  return (
    <div style={{ padding: '50px', backgroundColor: '#f7f7f7' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '30px' }}>
        Python Programming - E-Notes
      </Title>
      <Collapse accordion>
        <Panel header="Unit 1: Introduction to Python" key="1">
          <ul>
            <li>What is Python?</li>
            <li>Installing Python</li>
            <li>First Python Program</li>
          </ul>
        </Panel>
        <Panel header="Unit 2: Variables and Data Types" key="2">
          <ul>
            <li>Understanding Variables</li>
            <li>Data Types in Python</li>
            <li>Type Casting</li>
          </ul>
        </Panel>
        <Panel header="Unit 3: Control Structures" key="3">
          <ul>
            <li>If-Else Statements</li>
            <li>For and While Loops</li>
            <li>Exception Handling</li>
          </ul>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Python;
