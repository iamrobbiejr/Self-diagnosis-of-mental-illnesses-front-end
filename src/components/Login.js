import React from "react";
import "../css/Login.css";
import { GoogleLogin } from "react-google-login";
import Reg from './RegisterLogin';
import imagelogin from '../images/loginimage.jpg';

const success=(response)=>{
    console.log(response);
    let data={
      email:response.profileObj.email,
      name:response.profileObj.name,
      googleid:response.googleId
    }
    console.log(data);
    fetch('http://localhost:5000/login',{
      method:'POST',
      body:JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      const id=data.id;
      localStorage.setItem('id',id);
      localStorage.setItem('email',data.email);
      window.location.href = '/'; 
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

const failure=(response)=>{
    console.log(response);
}

const Login = () => {
  return (
    <div className="con">
    <div className="log">
     <div className="login__image">
        <img src={imagelogin} alt="" />
     </div>
    <div className="login">
    <Reg />
      <div className="login__google">
        {/* <GoogleLogin
          clientId="130831181306-gn9rouj8214vhp3qr7dju1dfe9e2bdbs.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              style={{padding:'10px',borderRadius:'10px',backgroundColor:'turquoise',color:'black',cursor:'pointer',width:'100%',}}
            >
              Google login
            </button>
          )}
          buttonText="Login"
          onSuccess={success}
          onFailure={failure}
          cookiePolicy={"single_host_origin"}
        /> */}
        
      </div>
    </div>
    </div>
    </div>
  );
};

export default Login;
