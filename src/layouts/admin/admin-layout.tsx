import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { useApp } from '@provider/app.provider';
import { Avatar, Dropdown, Layout, Menu } from 'antd';
import React, { useState } from 'react';

const { Header, Sider, Content } = Layout;

interface IProps {
  component: React.ReactNode;
}

const AdminLayout: React.FC<IProps> = ({ component }) => {
  const { setLogout } = useApp();

  const [collapsed, setCollapsed] = useState(false);

  const overlay = () => {
    return (
      <div className="cursor-pointer" onClick={() => setLogout()}>
        <span>Logout</span>
      </div>
    );
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div>
          <span>SMAMDT</span>
        </div>
        <Menu
          theme="light"
          mode="inline"
          className="dashboard-menu"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
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
          <Dropdown overlay={overlay} trigger={['click']} className="cursor-pointer">
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
