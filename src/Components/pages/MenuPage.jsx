import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Select } from 'antd';
import { FaFilter } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { ProductItem } from "../../common/type.ts"
const { Header, Content } = Layout;
const { Option } = Select;

const MenuPage = () => {
  const navigate = useNavigate();

  const [showFilter, setShowFilter] = useState(false);
  const [data, setData] = useState([
    {
      title: " Samsung Galaxy A31",
      price: 50000000
    },
    {
      title: " Samsung Galaxy A31",
      price: 50000000
    },
    {
      title: " Samsung Galaxy A31",
      price: 50000000
    },
    {
      title: " Samsung Galaxy A31",
      price: 50000000
    },

  ]);

  const handleProductClick = () => {
    navigate('/shop');
  };

  return (
    <div className="aside">
      <Layout>
        <Header style={{ width: '1070px', background: 'white', fontSize: '10px', marginTop: '-44px', marginBottom: '5px' }}>
          <h1>Shop</h1>
        </Header>
        <input type="text" style={{ width: '200px', marginLeft: '700px' }} placeholder='Search...' required />
        <IoSearchOutline className='icon' />
        <FaFilter className='filter' onClick={() => setShowFilter(!showFilter)} />
        <Content style={{ background: 'white', width: '1070px',height:'500px' }}>
          {showFilter && (
            <div>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ marginRight: '10px', marginLeft: '700px' }}>Price:</label>
                <Select defaultValue="" style={{ width: 210, height: '25px', marginTop: 10 }}>
                  <Option value="">All</Option>
                  <Option value="0-5000000">0 - 5,000,000 VND</Option>
                  <Option value="5000000-10000000">5000000 - 10,000,000 VND</Option>
                  <Option value="10000000-50000000">10000000 - 50,000,000 VND</Option>
                </Select>
              </div>
              <div>
                <label style={{ marginRight: '0px', marginLeft: '700px' }}>Rating:</label>
                <Select defaultValue="" style={{ width: 100, height: '25px' }}>
                  <Option value="">All</Option>
                  <Option value="0">0 stars</Option>
                  <Option value="1">1 stars</Option>
                  <Option value="2">2 stars</Option>
                  <Option value="3">3 stars</Option>
                  <Option value="4">4 stars</Option>
                  <Option value="5">5 stars</Option>
                </Select>
              </div>
            </div>
          )}
          <div style={{ display: 'flex' }}>
            {data.map(item => (
              <div key={item.title} className="product-item" style={{ width: 'calc(50% - 10px)', marginBottom: '50px', marginRight: '0px' }}>
                <img style={{ height: '200px', width: '200px' }} src="https://netpc.uy/wp-content/uploads/2021/02/2-59.jpg" alt="Iphone 15 Pro Max" onClick={handleProductClick} />
                <div className="product-rating">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className="star-1">&#9733;</span>
                  ))}
                </div>
           
                <p style={{ fontSize: '16px', marginTop: '10px' }}>{item.title}</p>
                <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Giá bán :  {item.price}</p>
           
              </div>
            ))}
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default MenuPage;
