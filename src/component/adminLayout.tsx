import React, { useState } from 'react'; import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import {
    HddOutlined,
    FileOutlined,
    HomeOutlined,
    ProjectOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { Avatar, Button, MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    to?: string,
    children?: MenuItem[],

): MenuItem {
    return {
        key,
        icon,
        children,
        label: to ? <Link to={to} > {label}</Link> : label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Dashboard', '1', <HomeOutlined />, '/admin'),
    getItem('Categories ', 'sub1', <HddOutlined />, undefined, [
        getItem('List Categories', '2', undefined, '/admin/categories'),
        getItem('Create Category', '3', undefined, '/admin/categories/add'),
    ]),
    getItem('Products', 'sub2', <ProjectOutlined />, undefined, [
        getItem('List Products', '4', undefined, '/admin/products'),
        getItem('Create Product', '5', undefined, '/admin/products/add'),
    ]),
    getItem('Files', '8', <FileOutlined />),
];
type Props = {}
const AdminLayout = (props: Props) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (

        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{ height: 70, margin: 16 }} >
                    <img style={{ height: 70 }} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cbf3c580-feca-46cf-8a3f-ceb136da5bb1/d39lpuk-d77fd28c-635b-4f63-ba7e-f953b94cbc0c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NiZjNjNTgwLWZlY2EtNDZjZi04YTNmLWNlYjEzNmRhNWJiMVwvZDM5bHB1ay1kNzdmZDI4Yy02MzViLTRmNjMtYmE3ZS1mOTUzYjk0Y2JjMGMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gfbHAmoImTwEGpCRgLOAQsSrWWYX0TU-wlDsmTS1Gt4" alt="" width={'100%'} />
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <div>
                        <Avatar style={{ marginLeft: "75%" }}
                            size={{ xs: 12, sm: 15, md: 13, lg: 20, xl: 40, xxl: 50 }}
                            icon={<UserOutlined />}
                        ></Avatar><b style={{ marginLeft: '10px' }}>Phùng Quang Minh</b>
                        <Button style={{ marginLeft: '10px' }}
                            danger
                            icon={< LogoutOutlined />}
                        />

                    </div>

                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>

                    </Breadcrumb>
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}

export default AdminLayout