import React, {useState} from 'react';
import { Layout } from 'antd';
const { Header, Content,  } = Layout;
const Profile = () => {
  const [userData, setUserData] = useState({
    dob: '',
    sex: 'male',
    companyAddress: '',
    homeAddress: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saved Data:', userData);
  };

  return (
    <div className='aside-profile'>
    <Layout>
    <Header style={{background:'white',fontSize:'13px',marginBottom:'10px'}}>
      <h2>My Profile</h2>
      
      </Header>

      <Content style={{width:'2000px', background:'white',fontSize:'16px'}}>
      <img style={{height:'155px',paddingLeft:'35px'}} src="https://img.freepik.com/premium-photo/3d-rendering-male-character-profile-avatar-happy-young-man-with-bucket-hat-blue-clothes-good_477250-60.jpg?size=626&ext=jpg&ga=GA1.1.369979106.1704857616&semt=ais" />
      <ul>
        <p>MR.PHONG BAC NINH <br/>
        Email: phongbacninh@gmail.com</p>
        </ul>
        <form style={{margin:'50px',}} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="dob"><b> Date of Birth : </b></label>
            <input
              type="date"
              id="dob"
              name="dob" 
              value={userData.dob}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
          <label htmlFor="sex"><b>Sex :</b></label>
          <select
            id="sex"
            name="sex"
            value={userData.sex}
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      
        <div className="form-group">
          <label htmlFor="Contact"><b>Contact : </b> 0123456789  </label>
        </div>
          <div className="form-group">
            <label htmlFor="companyAddress"><b>Company Address:</b> <u>So 5 Vu Pham Ham , Trung Hoa , Cau Giay , Ha Noi </u> </label>
          </div>
       
          <div className="form-group">
            <label htmlFor="homeAddress"><b>Home Address : </b> <u>Dong Binh , Thi Tran Gia Binh , Gia Binh , Bac Ninh</u> </label>
          </div>
        </form>
        </Content>
 
      </Layout>
      </div>
  );
};

export default Profile;