import React, { useState } from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import MainMenu from '@/components/MainMenu';
const { Header, Content, Footer, Sider } = Layout;

const Home: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    // const navigateTo = useNavigate();
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* 左边侧边栏 */}
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                <MainMenu/>
            </Sider>
            {/* 右边内容 */}
            <Layout className="site-layout">
                {/* 右边头部 */}
                <Header style={{ paddingLeft: '16px', background: colorBgContainer, }} >
                    {/* margin 4个参数遵循上右下左顺序 */}
                    {/* margin 3个参数遵循上左右下顺序 */}
                    {/* margin 2个参数遵循上下左右顺序 */}
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                {/* 右边内容 - 盒子部分*/}
                <Content style={{ margin: '16px 16px 0', background: colorBgContainer }}>
                    <Outlet />
                </Content>
                {/* 右边底部 */}
                <Footer style={{ textAlign: 'center', padding: 0, lineHeight: '48px' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default Home;