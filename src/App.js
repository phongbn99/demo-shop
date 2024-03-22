import React, { useState, useEffect } from 'react';
import './App.css';

import { Layout, Menu, theme } from 'antd';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { MenuOutlined, ShoppingCartOutlined, UserOutlined, ShopOutlined } from '@ant-design/icons';

import Shop from './Components/pages/Shop';
import Cart from './Components/pages/Cart';
import Profile from './Components/pages/Profile';

import LoginForm from './Components/LoginForm';
import MenuPage from './Components/pages/MenuPage';

const { Header, Content, Sider } = Layout;

const items = [
  { key: '1', icon: <MenuOutlined style={{ fontSize: '18px' }} />, label: 'Menu',path:'/menupage'},
  { key: '2', icon: <ShopOutlined style={{ fontSize: '18px' }} />, label: 'Shop', path: '/shop' },
  { key: '3', icon: <ShoppingCartOutlined style={{ fontSize: '18px' }} />, label: 'Cart', path:'/cart' },
  { key: '4', icon: <UserOutlined style={{ fontSize: '18px' }} />, label: 'User Profile', path:'/profile' },
];

const LeftPanel = () => {
  const [collapsed, setCollapsed] = useState(localStorage.getItem('panelCollapsed') === 'true');

  const toggleCollapsed = () => {
    const newCollapsed = !collapsed;
    setCollapsed(newCollapsed);
    localStorage.setItem('panelCollapsed', newCollapsed.toString());
  };

  useEffect(() => {
    const savedCollapsedState = localStorage.getItem('panelCollapsed') === 'true';
    if (savedCollapsedState !== collapsed) {
      setCollapsed(savedCollapsedState);
    }
  }, []); 

  return (
    <Sider

    >
      <div className="demo-logo-vertical" />
      <Menu
  style={{ height: 650, background: 'white' ,color:'black',}}
  theme="light"
  mode="inline"
  defaultSelectedKeys={['1']}
  inlineCollapsed={collapsed}
>
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
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const loggedInState = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInState);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  };

  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <Router>
      <Layout>
        {isLoggedIn && (
          <div className='icon-profile'>
          <Header style={{ background: '#C6E5F4', zIndex: 1, width: '100%', position: 'fixed', display: 'flex',fontSize:'35px',fontFamily:'italic',width:"1300px"}}>
             <Link to="/menupage"><img src="data:image/png;base64,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"/> </Link>
            <Link to="/shop" style={{ color: 'black' , fontFamily:"Arial"}}>Mobile Shopping</Link>
            <Link to="/profile">
           
              <img style={{ height:'55px', paddingLeft:'20px', paddingTop:'10px',justifyContent:"auto",paddingLeft:'770px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAYAAAC875yHAAAAAXNSR0IArs4c6QAAEiJJREFUeF7NXAl0lFWW/pLakqqkslYWIAkJWVgEQrOERRBEBB0UZN9Rgfa0jHZrNwz2QQGdEdRBpmmhh3UGEGgbcZBhaUAkCA4QQMJOIpAQCAnZ99or098r/qISklQFsJJ7Tp2k6r3/vfu+d9+999133+8FF1RbW7sYwCJX9Zoq//TTT3HgwAGYzWb4+flBr9fD29v7cZp86FmbzQZfX19UVVVBoVBg+PDhmD9//uP2scTLy4vjb5S8XPXwOACeOnUKGzZsQJcuXbB79+4Gu7JYLLBaraJMpVKJv/xuMpkEyPywjlwuF8CQjEaj+Msy6bf6jY8aNQqXLl3CrFmzkJKS4mqYjZW3HIAc5PTp05Gfny8AoHRQSgiOTCZzSCDLKJkkpVIpygwGA/4xcfjH7IvvrENiG/yd5SRnUOu3TSlneUREBLZs2eKYnGYi2XIAktHx48ejpKTEwbMzMJQ2DprgEZSGiADyw3qNESWQQFFiJUkm0BIFBwdjx44dzcTNUb1lANy2bZuQkhMnTuDmzZsObiiVTYHxqKN0fo6A+/j4OH6Ki4tDv379hBp5hKXseQApcdQ/XI71ieBJ+ksq41KjBFKS+BFLVK+H1WaDRqMR1aqrqyHz9oaPr6+QSEqtpCOdpc1ZDdTvu7KyEnv37oVOp2vOPHkewPz8PEyYMNEBBgHjEuPHWd9JwLw9KhnhQRr8z48/Iz2rBP2SdBjROw4Zt4ux8cAlMdjpQzvhqdgw/P30TZzIKERybDBeGZCAe6XVWPltugNoSS+yL04EQeZE0tio1WqsW7cWERGRngWQvdU2pqQaYIWAjR07VrgqDUkcmyKQlLboYCWmDe0sWrlTWIHL2YUY3ruD+G611aKsym4sAv18IPO2OwwHTt9ApxgdosO04vuXh68gp8Qk2pSstjNb1LX8fcyYMZg9e3ZzjcnjS2BzAFyyZAkOHTok+JdcEi43yYoSvF+198fdkhoYTFbMfblHc6Sh0bqrdp+DUi5Du1A1fsquFMtcksb6rs+wYcOwaJHbbq1nAezbt69jOdEiSj6cBCClcvG0vjCZLVAq5A6pelwUKa1Sm4u/PCncHRJdIC5hyXWS1MbJkyfd7dKzANLzp+Ul0wRLIkpeRUUFeiVGYPygJHeZf6R6O37IwOmMPAQEBDgkUVoRnEhaZO6M3CTPAkimyCAVtrPL0jXKDy/1jYfRbIFKIXeT90erJvWx/3QWzmWXi0a4pKlSOKmc4GaQ5wBcs2YNNm/e7PDBnA1Ityh/jOxrNw6eor2nbuJ8ToXoTnK2+T/90xkzZuCNN95whxXPAcg9L7dMnG3qHMlfI5dKLyv+MK6nOww/sTqff/MTDFZ7wIJuDYk6keqEW0zukd0gzwFIZubMmYOMjAyH1ZUYTIpUY+zTiW7w++Sq7Dz+MzLyqus0SCCTkpKwbt06dzvyLIA0ImfOnBHLhO7Lc8ntEBXigzahWshlMneZfiL1aJnziyuF3t185LrQgTRuvXv3bp1GZOvWrdi0aZNYvlTW/EwbHI+Y8AColIo6FvGJIORGIxaLFYVl1Vi977IwbNwjcxnPnDkTU6dOdaMFeEYCCdrAgQMd/pfkwiRH+2FocjRUqof3xe5w/7h1CODBs1lIz6kSTRFA6mbyd+zYMQGmC/IMgLt27cKKFSuEspZCVmRMANgjRkhgS1B9AAmeFLB45513MHr0aFdseQZAckFH+ZlnnnFIYU1NDaYPSUBsRCCULQhgdn4p/vtwpljCJEZ2KH1arX0v3Sok8NatW9i5c6cIXHKG6fFHaOWYMjgR3l5eLQqgxWrFttRM5FfYjwUYoZkwYYIIeMTExLQOAAne6tWrHcxQx9AKP90xFAOfateiAB69kIPj14rExEo6kIy++eabAsRWIYGMwHzwwQfCSaWrQAnkTiQmRIUJAxNa1IhsT72GW8XGOgdU1IUffvghGJlpFQBy33vjxg0sXboU2dnZwpXR+ckwpGsk2um08FEpBbh5ReUwmHgKZ4PFaoO3t5cIQzEyI5Fc5i3K2oYF1hkbn88vrhAqgeUki80Gk8ni+K5SyiGTeSNEq4GfWgUakZyCchw+n4vCKvvuKDExEfPmzUOHDh3ciQ16zohwCVMHkkkRhYYFKYk69EmKEKDduFOIYK0GaOQg1WarFcAS1A7tdA36jQWllSirqBHgKRSNuyB6gxkKuQxREUFIu5aHU5mFsHrZjwxIPOziEnaDPAcgneiNGzc6zirsZxs1+MOYHrieW4ycwgeBTleMP901BiHaBydrrJ+dX4art4pgun/E2VQbCpk3YiMCoFUrseFQBuRKH6FWpPjgjOnTMGv2HFdssNxzAP586Sw2/2mx2Hms2ntZKOzu0f6wWMw4/FM23nptPPr3Toa+vBAWkx4R7Ts+NABazHOXMrF05Ua0CVaL0L3ZakP69XxYbV6Y+9oEpPTsCi+vh7MaCnMyIFf5wmBTYt/3P+Lbg8cxdlBHVBmsuJxbhVqLCSN7RQl9rAkMxa/fX9W6ANz/1zUw56aLJTh/XaowJu+O7oZFm44JRvdtWQEuU7O3L2q9ZLh99x5qbRbIvGXwVXrDz0cGP1+VWLpbv9mPv/3vdxiSHINKvQknr+Ti/bemoX8fe0SnxmhFZY0BBkstjGaraFfuDcTFJ8JcUQCZdy1emvmuqLtk5kCs3H0RgWo5Jg9JQniwFrkFZZj4+xUIDA13BaLnJPCL9+cg1MeGaoMRn3yVBl2wFu+MTsa8NYcRFhKE9Z/Mg1IbhqTeQ3HlyhWRK0Nnm8R8GVrEiNAAZJ87gmNp55F+Ng2vDOwkAP2Pr09hwT/PQER4OMr0NgwcORXLly8X6oKqQqNWI6ljR4wYMQI516+g/NZ5vDz7j6Ltz94YihW70qHzU+DZ5ChxjKDV+CK65wg8M3JS6wHws7fHgFYwrm0oFm44gghdEGYP7yyOIk9dy8dfFr4KXccBSOoxAMXFxVi/fr2wgllZWUhISBBBTu4Orh7/Fm+//+/oGx+ElM7txAB5Eifz1WLyyMHo+U+zIVeqhOPObeO5c+fE7ocTMGjQIFE/ddtyvL5wFYb2aI/hveOw/sAVBPp4YeqwbmJCcgvLoIvvhTGv26W0CfKcBK6YNxUaBdBGF4A/f5MGX7Ua04Yk4tDZLPFZMXe4mP2g9snwCY0RkrNv3z6xO3j++efhhVpU517CnZvXxAQs/80wYUlJBpMZ89ccFm3I5TLoOg2CQhOE8+fP41pGBlL69EH79u1RVVoAY95lkY/zwX+livPlZ3u0x5dHMtEmUIUX+yaI9krKq6Hr2B8vTHIZlfYcgDvXfwZVZZZg8OujV2G0eWNs/1jUGEw4dukOTlzORY+ECGjVKnSKCYW/2p6JRdIbzSip1CO3sBJXc4owpHs0enaOAWw22Gz2zK2j6dk4f7MACW2DERWmRWSIfx3BKSitFpaah+30/QZ1jULvpEjhF+78v5sI1sjxQp94mBniKq3Ec9PnI65TcuuRwBPf7cL1H3chSKtGavotlNRY8GLPKMGg5DSnXb0rjILeaBFxOlpYEt0OXaAGvio52kcEiABEWGQ7GCpLHQBSYtOu3kFBWQ2qDSbklzyINvO5ID9f8XyQvw96JUaC+Up8hkZt75kchGgUGJxs3/tm5hTi3RVuJRx5TgLJ2F//8m+wFl1HLbyw78wtjOkX65hhKajKLR6tZkPE83CeJROg8DbR0JcXOQCU6tPZbiqbixJHMpnNjn72pN3Ccz2iRIZDZs49jJqzEB06u3Wo71kAbVYrvvjjTMRFaPH301l4ukskuDUjcbvmTlYqwa3WGxGg9YfNas8bfBQyGE2Ox75Lv4ORKXGoqjGiRhmK1+d94m6TngWQXB3ZvRV5Fw6jstqAWtQiNMCeYUXJUNw/HWuKezrTzMSS0jPcHWn9es4Acg8e21aH7LvFeHPZNni7jkRLzXkeQENNFT753SQkRIehtKIa4cF2ZS8Ot90IrHLg1JkypRpqJVBrsy9Zo8kiDIC/5kHuX2Pg2uvbpZfPMEnJV6VAUFxPjJr52+bMiecBJHfnT3yPozv/U4S02jlFVRiVcUVFZVWgLhThd0qKlx0Eu1RCOMGuiHrSfH/PXFhaJaI2NrkffrN4FZQq1887td8yAJKBjAtp+PHATmitxQ5+3AHQGRy6QAx30fdrDjkbEIbAOvUfiZRnX4JfQFBzmmHdlgOQvRPAnNN7HA4xdaBkJZs7kubUd9Z/Vv8oTJzrdjpb/W5aFkDqw42LZyHsvh7k4Xpzpak5wLGus/7j/6FdnsWQl906A26oq5YFkBytXTQbwffVDvWY4hfOznLWf2WVegyd8S+ITerW3HloOStcn1O6NTdP70fAfevZmB6klS2pqBbOL3cPDExI6SAEhfpQIpZHhgY0CAqNB+uTyowyzF605lHBa3kdSA4K825j97p/RYDSvqelBFISm0sEsFpvgtpHCY1v49bcaDSB+5wqvRFRycMw9JUZze3KuX7LL2FyczHtKNJ2r0WAn30tu2uNGWTgTkaKyrhCgodZdHlINQodZvx+qatHXJW3DgDJ5YlDu3Dth6+FI+yOLqy/Z3ZlfLj06b6IaEsN8Oq8z6ANCnUFkKvy1gMgOaU+vH5qL4L81UK/uQLF1eikcnEnxGwRFji3zIzfLtvk7qOu6rUuAMnt7i1fIOfCD2KLx62dOwEGV6M0mcxC5+m9/TD5rQ+fhORJXbY+AK+eO4FvNywT27T2bUKEfnscEM1mCyqqDeLQffzcxe4ESV3NR+szIs4cmYx6HNj0KSrys1BaWQOtxgeB/upHApEBA+51lQoZNEHheOG1956k9LUON6ah6a4szsNPB75E7o0rYPCAIAYHaNwGkbpObzQhv6hCpHBExyWg+9BJ0EU/8TsorWMJM9UjNTUVgwcPrpOPcuyrFbiXdVkEOqv0JuE8R4Rom4wF0h/kmQZzZHRBfghtl4CBk96FTP4giXPt2rVITk5Gz5493clCbWpJtxyAFy9eFJdaioqKkJaWJphkJqszWS1mXD76DTJP2+/XFZRW2a++8uQtyN/h//E3LneCx4QhWnGCHRnfDcnDpkATUNddYQ50aWmpAI8nfjzkZypbYGDdhCU3lKFnAeRBOQ+8jx8/jsjISCFtd+/eFXy2adMGK1eubDAjKvvCcZzdv8lx1kHASirsgJHoTPOwyscpIJvy8q8R1blPgxgweYg31dk3+yWVlZWJF1KwbPLkye5kZnlOB27fvh28wMfz2PqzTAlkBgEHwiVM5huiisI7yDy1H7nXzogTtQbJC9C1S8BTQyYgIDy6wSp79uwRSU68WO0MoHNl8sSLkQMGDED//v1bbgkzJ/C9994TqRkNvT1DLL3SUpFBQAALCwtFClxT2fFFOddwcufKBgf1qxdfR5ukXk2uvIkTJ4rsWGY53LlzByEhIULa6t9sl6SSfDOzrBGefrklfPDgQfFKk/oSR2njAAiafTtmE6llbdu2FQAyg+Dzzz93qX5uXTiGkrs3QD0Z0jYesT2GuHxm8eLFuHDhgqhHYChpvLUpEUEimNJ9Een3goICkXTZgDT+MgCmp6c7UnolHUPgCFr9dyKQSepGJnQTQBIv+vHFOE2RJfM6DF/tQG1VFXymTIKie9cm6xM4AigRJ439NpSNT8edIDJzn2cvt2/fFoLAl2XUo18GQGZ3MvJx79494buRiabeCkAFHhsbK5azROPGjcOUKVMeAqXWZELN6jUwfPV1nTLFuFeg+d1bDS41Wvlly5bVqc9Ed+m6f1PIc8Jp8EiUUN46daInDyDvWLATvlGDnefm5sLfv26eSn2Gy8vLER0dDb45w/m1J7z4HB8f76jOSSjL/Bm2Vx/OHpWn9IZ54QIEBQXVATEnJwcLFiwQFlZ6uQT/SstXeqlPYyByDHw5D5OcmDX28ccfizzq+/TkAeSVrs6dO4vlymXizrtgeLmFIEo6kelsJCr2jz76SOhHSjQllUq/euUqGLb/zTFmL5UKwakHxffKigrI5HKx/Dhg6i4+R9D4l31xIljujt9HHiitFAg+0717d+f86ScLIA0HLxVS1AkIGZVeZ9KkgrpfyMGFh4cL3SRJYlhYmHBtqEOlaweVC5fAdPj7Ok0GbNoAeaJdWvPy8kReId0nrgBnYrvky417cOIx1peCGZw86mknh98lgP8P/GtOxvx1xtwAAAAASUVORK5CYII=" alt="Profile" />
            
              </Link>
          </Header>
          </div>
        )}
        
        <Layout style={{ marginLeft: 0, marginTop: 64 }}>
          {isLoggedIn && <LeftPanel />} 
          <Layout>
            <Content style={{ margin: '0px 16px 0px' }}>
              <Routes>
              <Route path="/menupage" element={<MenuPage />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
                <Route
                  path="/login"
                  element={<LoginForm onLogin={handleLogin} />} 
                />
                <Route
                  path="/"
                  element={
                 isLoggedIn ? (<MenuPage /> ) : (
                        <LoginForm onLogin={handleLogin} />
                                )} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
