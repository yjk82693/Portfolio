"use client";

import { Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Next.js router hook for active menu highlight
import "../globals.css";

const { Header, Content, Footer } = Layout;

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname(); // Get the current route

  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[pathname]}>
          <Menu.Item key="/">
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/projects">
            <Link href="/projects">Projects</Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link href="/about">About Me</Link>
          </Menu.Item>
          <Menu.Item key="/resume">
            <Link href="/resume">My Resume</Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Content style={{ padding: "50px" }}>{children}</Content>

      <Footer style={{ textAlign: "center" }}>
        My Portfolio ©2024 Created by Yoojun Kim
      </Footer>
    </Layout>
  );
};

export default ClientLayout;
