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

      <Content style={{width:'1085px', background:'white',fontSize:'16px',height:'500px',paddingTop:'10px'}}>
      <img style={{height:'120px',paddingLeft:'65px',borderRadius:""}} src="data:image/png;base64,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" />
      <ul>
        <p style={{paddingLeft:'30px'}}>MR.PHONG BAC NINH <br/>
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