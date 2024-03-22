import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import { TiShoppingCart } from "react-icons/ti";
import { ProductItems } from "../../common/type.ts"
const { Header, Content,Footer} = Layout;

const Cart = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState(0);
  const [data, setData] = useState([
    {
      title: "Điện thoại Samsung Galaxy A31",
      describe: [
        "Galaxy A31 là mẫu smartphone tầm trung mới ra mắt đầu năm 2020",
        " của Samsung.Thiết bị gây ấn tượng mạnh với ngoại hình thời trang, ",
        "cụm 4 camera đa chức năng, vân tay dưới màn hình và viên pin khủng lên đến 5000mAh."
      ],
      price: 50000000
    },
    {
      title: "Điện thoại Samsung Galaxy A31",
      describe: [
        "Galaxy A31 là mẫu smartphone tầm trung mới ra mắt đầu năm 2020",
        " của Samsung.Thiết bị gây ấn tượng mạnh với ngoại hình thời trang, ",
        "cụm 4 camera đa chức năng, vân tay dưới màn hình và viên pin khủng lên đến 5000mAh."
      ],
      price: 50000000
    },


  ]);

  const handleIncreaseQuantity = () => {
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
        <Header style={{ width: '100%', background: 'white', fontSize: '13px', marginBottom: '2px' }}>
          <h2>Cart</h2>
        </Header>
        <p style={{ paddingLeft: "900px" }}>2 items in bag</p>
        <Content style={{ background: "white", width: '1084px' }}>
          <ul>
            {data.map(item => (
              <div className='aside-cart'>
                <img style={{ height: '200px' }} src="https://netpc.uy/wp-content/uploads/2021/02/2-59.jpg"
                  alt="Iphone 15 Pro Max" />
                <p>
                <hr style={{ border: "0.1 px solid black", margin: "20px 0" }} />
                  <b style={{fontSize:'18px'}}>{item.title}</b><br />

                  <p style={{fontSize:'16px'}}>{item.describe}</p>

              
                  <div className="button-container">
                    <div style={{ display: 'flex', paddingLeft: "680px" }}>
                      <div style={{ margin: "0 25px",fontSize:'18px' }} className="increase-button" onClick={handleDecreaseQuantity}> - </div>
                      <span style={{ fontSize: "15px" }}>{quantity}</span>
                      <div style={{ margin: "0 25px",fontSize:'18px'  }} className="increase-button" onClick={handleIncreaseQuantity}> + </div>
                    </div>
                  </div>
                  Giá bán : <b style={{ fontSize: "18px" }}>{item.price}</b></p>
                
                <br />
              
              </div>
            ))}
            <div style={{ paddingLeft: "800px" }} className="form-group">
            <label htmlFor=""><b>SubTotal</b> <span style={{ display: 'inline-block', width: '100px', textAlign: 'right', marginLeft: '20px'  }}>50,000,000 VND</span></label><br />
            <label htmlFor=""><b>Tax</b> <span style={{ display: 'inline-block', width: '100px', textAlign: 'right', marginLeft: '55px' }}>1,000,000 VND</span></label><br />
            <label htmlFor=""><b>Total</b> <span style={{ display: 'inline-block', width: '100px', textAlign: 'right', marginLeft: '45px' }}>60,000,000 VND</span></label>
          </div>
          
          
          
          </ul>
        </Content>
        
      </Layout>
    </div>

  );
};

export default Cart;
