import {
  AuditOutlined,
  DashboardOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import { useApp } from '@provider/app.provider';
import { Avatar, Dropdown, Layout, Menu, MenuProps } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import style from './admin-layout.module.less';

const { Header, Sider, Content } = Layout;

interface IProps {
  component: React.ReactNode;
}

const AdminLayout: React.FC<IProps> = ({ component }) => {
  const navigate = useNavigate();

  const { setLogout } = useApp();

  const [current, setCurrent] = useState(['']);
  const [collapsed, setCollapsed] = useState(false);

  const menu = [
    {
      label: <span>Keluar</span>,
      key: 'logout',
      icon: <LogoutOutlined />,
      onClick: () => {
        setLogout();
      },
    },
  ];

  const overlay = () => {
    return (
      <div className="cursor-pointer">
        <Menu items={menu} />
      </div>
    );
  };

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent([e.key]);
    navigate(`/${e.key}`);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={style.logo}>{collapsed ? <span>S</span> : <span>SMAMDT</span>}</div>
        <Menu
          theme="light"
          mode="inline"
          onClick={onClick}
          className="dashboard-menu"
          selectedKeys={current}
          items={[
            {
              key: '/',
              icon: <DashboardOutlined />,
              label: 'Dashboard',
            },
            {
              key: 'admin',
              icon: <AuditOutlined />,
              label: 'Admin',
            },
            {
              key: 'student',
              icon: <UserAddOutlined />,
              label: 'Student',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header className="smamdt-header" style={{ padding: 14 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          <Dropdown dropdownRender={overlay} trigger={['click']} className="cursor-pointer mt-1" arrow>
            <Avatar />
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {component}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
