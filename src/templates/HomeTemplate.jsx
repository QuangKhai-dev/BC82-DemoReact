import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link, NavLink, Outlet } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const arrNavlink = [
  {
    title: "Trang chủ",
    to: "/",
  },
  {
    title: "Demo State",
    to: "/demo-state",
  },
];

const HomeTemplate = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className="Quang Khải">
      <Header
        style={{ display: "flex", alignItems: "center" }}
        className="space-x-3"
      >
        <div className="demo-logo" />
        {arrNavlink.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) => {
                return isActive ? "!text-red-500" : "!text-white";
              }}
            >
              {item.title}
            </NavLink>
          );
        })}
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default HomeTemplate;
