import React from 'react';
import { Collapse, Typography } from 'antd';

const { Title } = Typography;
const { Panel } = Collapse;

const C: React.FC = () => {
  return (
    <div style={{ padding: '50px', backgroundColor: '#f7f7f7' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '30px' }}>
        C Programming - E-Notes
      </Title>
      <Collapse accordion>
        <Panel header="Unit 1: Introduction to C" key="1">
          <ul>
            <li>History of C</li>
            <li>Setting up the Environment</li>
            <li>First C Program</li>
          </ul>
        </Panel>
        <Panel header="Unit 2: Variables and Data Types" key="2">
          <ul>
            <li>Understanding Variables</li>
            <li>Data Types in C</li>
            <li>Constants and Operators</li>
          </ul>
        </Panel>
        <Panel header="Unit 3: Control Structures" key="3">
          <ul>
            <li>If-Else Statements</li>
            <li>Switch-Case</li>
            <li>Loops</li>
          </ul>
        </Panel>
      </Collapse>
    </div>
  );
};

export default C;