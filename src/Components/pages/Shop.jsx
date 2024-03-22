import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import { TiShoppingCart } from "react-icons/ti";

const { Header, Content } = Layout;

const Shop = () => {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false); // State để kiểm soát việc hiển thị biểu tượng nhấp nháy
  const [data, setData] = useState([
    {
      title: "Điện thoại Samsung Galaxy A31",
      price: 50000000,
      describe: [
       "Galaxy A31 là mẫu smartphone tầm trung mới ra mắt đầu năm 2020",
        "của Samsung.Thiết bị gây ấn tượng mạnh với ngoại hình thời trang, ",
        "cụm 4 camera đa chức năng, vân tay dưới màn hình và viên pin khủng."
      ],
    },
    
  ]);

  const handleBuyNow = () => {
    fetch("http://192.168.1.7:7154/WeatherForecast")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error)
        }
      )
    navigate('/cart');
  };

  const handleAddToCart = () => {
    console.log('Đã thêm vào giỏ hàng');
    setShowMessage(true); // Kích hoạt hiển thị biểu tượng nhấp nháy
    setTimeout(() => {
      setShowMessage(false); // Tắt hiển thị biểu tượng nhấp nháy sau 2 giây
    }, 2000);
    fetch(" ")
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
        <Header style={{ width: '1070px', background: 'white', fontSize: '10px', marginTop: '-44px', marginBottom:'2px' }}>
          <h1>Shop Page</h1>
        </Header> 
        {/* Biểu tượng giỏ hàng */}
        <TiShoppingCart style={{ marginLeft: '951px', fontSize: '25px', cursor: 'pointer', animation: showMessage ? 'shake 0.5s' : 'none' }} />       
        <Content style={{ background: 'white  ',height:450,paddingTop:'80px',width:"1070px" }}>
        
          <div className="product-row">
            {data.map(item => (
              <div key={item.title} className="product" style={{display:"flex"}}>
                <img style={{ height: '250px',width:'450px' }} src="https://i.gadgets360cdn.com/large/samsung_galaxy_a31_image_1_1591257068271.jpg" alt="Iphone 15 Pro Max" onClick={handleProductClick} />
                
                <div style={{ marginLeft: '0px' }}>
                  
                  <p style={{fontWeight: 'bold',fontSize:"18px"}}>{item.title}</p>
                  {item.describe.map((desc, index) => (
                    <p style={{fontSize:"16px"}} key={index}>{desc}</p>
                  ))}
                  <p style={{fontWeight: 'bold',fontSize:"17px"}}>Giá bán :  {item.price} </p>
                  <div className="product-rating">
                    {[...Array(5)].map((_, index) => (
                      < span key={index} className="star">&#9733;</span>
                    ))}
                  </div>
                  <button type="button" className="buy-button" onClick={handleBuyNow}>Mua ngay</button>
                  <button type="button" className="add-to-cart-button" onClick={handleAddToCart}> Thêm vào giỏ hàng </button>
                  {showMessage && <p>Đã thêm vào giỏ hàng!</p>}
                </div>
              </div>
            ))}
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Shop;
