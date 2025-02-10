import { Layout, Menu } from 'antd';
import Link from 'next/link'; // For navigation links
import '../globals.css'; // Correct relative path from the 'components' folder

const { Header, Content, Footer } = Layout;

const ClientLayout = ({ children }: { children: React.ReactNode }) => (
  <Layout>
    <Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">
          <Link href="/">Home</Link>
        </Menu.Item>
        {/* Remove or comment out the Skills menu item */}
        {/* <Menu.Item key="2">
          <Link href="/skills">Skills</Link>
        </Menu.Item> */}
        <Menu.Item key="3">
          <Link href="/projects">Projects</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link href="/about">About Me</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link href="/resume">My Resume</Link>
        </Menu.Item>
      </Menu>
    </Header>

    <Content style={{ padding: '50px' }}>
      {children} {/* Render the current page content */}
    </Content>

    <Footer style={{ textAlign: 'center' }}>
      My Portfolio ©2024 Created by Yoojun Kim
    </Footer>
  </Layout>
);

export default ClientLayout;
