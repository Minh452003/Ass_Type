import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, Link } from 'react-router-dom';
import { Input, Space, MenuProps } from 'antd';
import {
    HddOutlined,
    FileOutlined,
    HomeOutlined,
    ProjectOutlined,
    LogoutOutlined,
    LoginOutlined,
    AntDesignOutlined
} from '@ant-design/icons'; type Props = {}
const { Header, Content, Footer } = Layout;
const onSearch = (value: string) => console.log(value);
const { Search } = Input;
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label?: React.ReactNode,
    key?: React.Key,
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
    getItem('Home', '1', <HomeOutlined />, '/'),
    getItem('Products ', '2', <HddOutlined />, '/products'),
    getItem('About ', '3', <HddOutlined />, '/about'),
    getItem('Contact', '4', <FileOutlined />, '/contact'),
    getItem('Signin ', '5', <LoginOutlined />, '/signin'),
    getItem('Signup ', '6', <AntDesignOutlined />, '/signup'),
];
const RootLayout = (props: Props) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className="layout">
            <Header>
                <div className="logo">
                    <img style={{ float: 'left' }} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cbf3c580-feca-46cf-8a3f-ceb136da5bb1/d39lpuk-d77fd28c-635b-4f63-ba7e-f953b94cbc0c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NiZjNjNTgwLWZlY2EtNDZjZi04YTNmLWNlYjEzNmRhNWJiMVwvZDM5bHB1ay1kNzdmZDI4Yy02MzViLTRmNjMtYmE3ZS1mOTUzYjk0Y2JjMGMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gfbHAmoImTwEGpCRgLOAQsSrWWYX0TU-wlDsmTS1Gt4" alt="" width={'10%'} />
                </div>
                <Menu
                    className='menu'
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}

                />

            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                </Breadcrumb>
                <div className="site-layout-content" style={{ background: colorBgContainer }}>
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    )
}

export default RootLayout