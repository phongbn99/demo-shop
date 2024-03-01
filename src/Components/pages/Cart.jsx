import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import { TiShoppingCart } from "react-icons/ti";
import {ProductItems} from "../../common/type.ts"
const { Header, Content } = Layout;

const Cart = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState(0);
  const [data, setData] = useState([
    {
      title: "Iphone 15 Pro Max",
      describe: "Chiếc điện thoại thông minh mới của Apple được ra mắt vào tháng 9 năm 2023. Điện thoại có thiết kế sang trọng, màn hình OLED 6,7 inch, Apple A17 mạnh mẽ, camera sau 48 MP và camera trước 48 MP.",
      price: 50000000 
    },
    {
      title: "Iphone 15 Pro Max",
      describe: "Chiếc điện thoại thông minh mới của Apple được ra mắt vào tháng 9 năm 2023. Điện thoại có thiết kế sang trọng, màn hình OLED 6,7 inch, Apple A17 mạnh mẽ, camera sau 48 MP và camera trước 48 MP.",
      price: 50000000
    },
    {
      title: "Iphone 15 Pro Max",
      describe: "Chiếc điện thoại thông minh mới của Apple được ra mắt vào tháng 9 năm 2023. Điện thoại có thiết kế sang trọng, màn hình OLED 6,7 inch, Apple A17 mạnh mẽ, camera sau 48 MP và camera trước 48 MP.",
      price: 50000000
    },
    {
      title: "Iphone 15 Pro Max",
      describe: "Chiếc điện thoại thông minh mới của Apple được ra mắt vào tháng 9 năm 2023. Điện thoại có thiết kế sang trọng, màn hình OLED 6,7 inch, Apple A17 mạnh mẽ, camera sau 48 MP và camera trước 48 MP.",
      price: 50000000
    },
    {
      title: "Iphone 15 Pro Max",
      describe: "Chiếc điện thoại thông minh mới của Apple được ra mắt vào tháng 9 năm 2023. Điện thoại có thiết kế sang trọng, màn hình OLED 6,7 inch, Apple A17 mạnh mẽ, camera sau 48 MP và camera trước 48 MP.",
      price: 50000000
    }
  ]);
  
  const handleIncreaseQuantity = () => {
    fetch("http://192.168.1.13:7154/WeatherForecast")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error)
        }
      )
  
    setQuantity(quantity + 1);
  setCartItems(cartItems + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setCartItems(cartItems - 1);
    }
  };

  return (
    <div className='aside-cart'>
      <Layout>
        <Header style={{ width: '100%', background: 'white', fontSize: '13px', marginBottom: '0px' }}>
          <h2>Cart Page</h2>
        </Header>
        <div style={{ position: 'relative' }}>
          <TiShoppingCart style={{ marginLeft: '951px', fontSize: '25px', cursor: 'pointer' }} />
          {cartItems > 0 && (
            <div style={{ position: 'absolute', top: '-8px', right: '-8px', background: 'red', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '14px' }}>
              {cartItems}
            </div>
          )}
        </div>
        <Content style={{ background: "white" }}>
          <ul>
          {data.map(item => (
            <div className='aside-cart'>
              <img style={{ height: '180px' }} src="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png"
                alt="Iphone 15 Pro Max" />
              <p>
                <b>{item.title}</b>
                <br />
                {item.describe}
                <p>Số lượng</p>
                <div className="button-container">
                  <button type="button" onClick={handleDecreaseQuantity}> - </button>
                  <span>{quantity}</span>
                  <button type="button" onClick={handleIncreaseQuantity}> + </button>
                </div>
                Giá bán : <b>{item.price}</b></p>
              <br />
              SubTotal  29.990.000   <br/>
              Tax    1.000.000    <br/>
             Total   30.990.000   <br/>
            </div>
          ))}
          </ul>

          
        </Content>
      </Layout>
    </div>

  );
};

export default Cart;
