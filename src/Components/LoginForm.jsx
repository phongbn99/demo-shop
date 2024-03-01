import React from "react";

import { FaUser , FaLock } from "react-icons/fa";
const LoginForm = () =>{
    return(
        <div className="wrapper">
            <form action="">
                  <h1>Login</h1>
        <div className="input-box">
            <input type="text"
              placeholder='Tên đăng nhập' required/>
              <FaUser className="icon" />
              </div>

             <div className="input-box">
            <input type="password"
              placeholder='Mật khẩu' required/>
              <FaLock className="icon"/>
             </div>

        <div className="remember-forgot">
        <label><input type="checkbox"/>Lưu đăng nhập</label>
        <a href="#">Bạn quên mật khẩu ?</a>
        </div>

        <button type="submit">Login</button>

        <div className="register-link">
        <p> Bạn chưa có tài khoản ? <a href="#">Đăng kí</a> </p>
        </div>
         <br/>
           </form>
        </div>
    );
}

 export default LoginForm;