import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Select } from 'antd';
import { FaFilter } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import {ProductItem} from "../../common/type.ts"
const { Header, Content } = Layout;
const { Option } = Select;

const Shop = () => {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [data, setData] = useState([
    {
      title: "Iphone 15 Pro Max",
      price: 50000000
    },
    {
      title: "Iphone 15 Pro Max",
      price: 50000000
    },
    {
      title: "Iphone 15 Pro Max",
      price: 50000000
    },
    {
      title: "Iphone 15 Pro Max",
      price: 50000000
    },
    {
      title: "Iphone 15 Pro Max",
      price: 50000000
    },
   
  ]);

  const handleBuyNow = () => {
    fetch("http://192.168.1.13:7234/WeatherForecast")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error)
        }
      )
    // navigate('/cart');
  };

  const handleAddToCart = () => {
    console.log('Đã thêm vào giỏ hàng');
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
    fetch("http://192.168.1.13:7234/WeatherForecast")
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error)
      }
    )
  };

  const handleProductClick = () => {
    navigate('/cart');
  };

  return (
    <div className="aside">
      <Layout>
        <Header style={{ width: '2000px', background: 'white', fontSize: '10px', marginTop: '-44px', marginBottom: '-21px', marginLeft: '-28px' }}>
          <h1>Shop Page</h1>
        </Header>             
        <input type="text" style={{ width: '200px', marginLeft: '700px' }} placeholder='Search...' required />
        <IoSearchOutline className='icon' />
        <FaFilter className='filter' onClick={() => setShowFilter(!showFilter)} />
        <Content style={{ background: 'white' }}>
          {showFilter && (
            <div>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ marginRight: '10px',marginLeft:'700px' }}>Price:</label>
                <Select defaultValue="" style={{ width: 210,height:'25px',marginTop:10 }}>
                  <Option value="">All</Option>
                  <Option value="0-5000000">0 - 5,000,000 VND</Option>
                  <Option value="5000000-10000000">5000000 - 10,000,000 VND</Option>
                  <Option value="10000000-50000000">10000000 - 50,000,000 VND</Option>
                  
              
                </Select>
              </div>
              <div>
                <label style={{ marginRight: '0px',marginLeft:'700px' }}>Rating:</label>
                <Select defaultValue="" style={{ width: 100,height:'25px' }}>
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
          {data.map(item => (
            <div className="aside">
            <img style={{ height: '180px' }} src="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png" alt="Iphone 15 Pro Max" onClick={handleProductClick} />
            <div className="product-rating">
              {[...Array(5)].map((_, index) => (
                <span key={index} className="star">&#9733;</span>
              ))}
            </div>
            <p>{item.title}</p>
            Giá bán :  {item.price} <br/>
            <button type="button" onClick={handleBuyNow}>Mua ngay</button>
            <button type="button" onClick={handleAddToCart}> + Thêm vào giỏ hàng </button>
            {item.showMessage && <p>Đã thêm vào giỏ hàng!</p>}
          </div>
          ))}
        </Content>
      </Layout>
    </div>
  );
};

export default Shop;
