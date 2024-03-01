import React, { useState } from 'react';
import './App.css';
import { Layout, Menu, theme } from 'antd';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MenuOutlined, ShoppingCartOutlined, UserOutlined, ShopOutlined } from '@ant-design/icons';
import Shop from './Components/pages/Shop';
import Cart from './Components/pages/Cart';
import Profile from './Components/pages/Profile';

const { Header, Content, Sider } = Layout;

const items = [
  { key: '1', icon: <MenuOutlined style={{ fontSize: '18px' }} />, label: 'Menu' },
  { key: '2', icon: <ShopOutlined style={{ fontSize: '18px' }} />, label: 'Shop', path: '/shop' },
  { key: '3', icon: <ShoppingCartOutlined style={{ fontSize: '18px' }} />, label: 'Cart', path:'/cart' },
  { key: '4', icon: <UserOutlined style={{ fontSize: '18px' }} />, label: 'User Profile', path:'/profile' },
];

const LeftPanel = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
    >
      <div className="demo-logo-vertical" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} inlineCollapsed={collapsed}>
        {items.map((item) => (
          <Menu.Item key={item.key} title={item.label}>
            <Link to={item.path} style={{ display: 'flex', alignItems: 'center' }}>
              <span className="anticon">{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </Link>
          </Menu.Item> 
        
        ))}
        
      </Menu>
    </Sider>
  );
};

const App = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <Router>
      <Layout>
      <Header style={{ background: 'brown', zIndex: 1, width: '100%', position: 'fixed', display: 'flex',fontSize:'35px',fontFamily:'italic'}}>
        <Link to="/shop" style={{ color: 'white', textDecoration: 'none',justifyContent:'center' }}>Mobile Shopping</Link>
          <Link to="/profile">
            <img style={{ height:'55px', paddingLeft:'20px', paddingTop:'10px', borderRadius:'70%',}} src="https://img.freepik.com/premium-photo/3d-rendering-male-character-profile-avatar-happy-young-man-with-bucket-hat-blue-clothes-good_477250-60.jpg?size=626&ext=jpg&ga=GA1.1.369979106.1704857616&semt=ais" alt="Profile" />
          </Link>
        </Header>
        <Layout style={{ marginLeft: 0, marginTop: 64 }}>
          <LeftPanel />
          <Layout>
            <Content style={{ margin: '0px 16px 0px' }}>
            
           
              <Routes>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/profile" element={<Profile/>}/>
              </Routes>
              <div
                style={{
                  padding: 24,
                  minHeight: 480,
                  minWidth: 450,
                  background: 'white',
                  borderRadius: borderRadiusLG,
                }}
                
              />
              
            </Content>

           
            
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
