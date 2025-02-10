import React from 'react';
import { Menu, Layout } from 'antd';
import { HomeOutlined, BookOutlined, UserOutlined, SettingOutlined, InfoCircleOutlined, PhoneOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const Navbar: React.FC = () => {
  return (
    <Header style={{ backgroundColor: '#1c1f25' }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} style={{ backgroundColor: '#1c1f25' }}>
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="subjects" icon={<BookOutlined />}>
          <Link to="/subjects">Subjects</Link>
        </Menu.Item>
        <Menu.Item key="settings" icon={<SettingOutlined />}>
          <Link to="/settings">Settings</Link>
        </Menu.Item>
        <Menu.Item key="about" icon={<InfoCircleOutlined />}>
          <Link to="/about">About Us</Link>
        </Menu.Item>
        <Menu.Item key="contact" icon={<PhoneOutlined />}>
          <Link to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
