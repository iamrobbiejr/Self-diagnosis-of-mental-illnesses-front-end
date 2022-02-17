import React, { useState } from "react";
import "../css/RegisterLogin.css";
import {useHistory} from 'react-router-dom';

function RegisterLogin() {
  const [login, setLogin] = useState(true);
  const [emailforlogin, setEmailForLogin] = useState("");
  const [passwordforlogin, setPasswordForLogin] = useState("");
  const [email,setEmail]=useState("");
  const [password, setPassword] = useState("");
  const [repeatpassword, setRepeatPassword] = useState("");
  const history=useHistory();

  const register=()=>{
    // alert("email:"+email+"---pas"+password+"----repeat"+repeatpassword);
    if(password!==repeatpassword){
      alert("Passwords didn't match. Try again");
      setPassword("");
      setRepeatPassword("");
    }
    else{
      let data={
        email:email,
        password:password,
    }
    fetch('http://localhost:5000/register',{
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
      localStorage.setItem('email',email);
      window.location.href = '/'; 
    })
    .catch((error) => {
      alert("User already exists. Please try login")
      history.push("/login");
      console.error('Error:', error);
    });
    }
  }

  const loginhandle=()=>{
      let data={
          email:emailforlogin,
          password:passwordforlogin
      }
      fetch('http://localhost:5000/loginuser',{
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
      localStorage.setItem('email',emailforlogin);
      window.location.href = '/'; 
    })
    .catch((error) => {
      alert("Something went wrong. Please try login")
      history.push("/login");
      console.error('Error:', error);
    });

  }
  console.log("email: ",emailforlogin,"password",passwordforlogin);
  return (
    <div className="loginregister">
      {login && (
        <div className="login__user">
          <p className="login__title">Login</p>
          <label>Email</label>
          <input
            type="text"
            value={emailforlogin}
            onChange={(e) => setEmailForLogin(e.target.value)}
          />
          
          <label>Password</label>
          <input
            type="password"
            value={passwordforlogin}
            onChange={(e) => setPasswordForLogin(e.target.value)}
          />
          <br/>
          <button className="login__submit" onClick={loginhandle}>Login</button><br/>
          <p className="signin__request">
            If you don't have account please register{" "}
            <span className="signin__span" onClick={() => setLogin(!login)}>
              here
            </span>
          </p>
        </div>
      )}
      {!login && (
        <div className="login__user">
          <p className="login__title">Register</p>
          <label>Email</label>
          <input 
          type="text"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          <label>Password</label>
          <input 
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
          <label>Confirm password</label>
          <input 
          type="password"
          value={repeatpassword}
          onChange={(e)=>setRepeatPassword(e.target.value)}
           />
          <button className="register__submit" onClick={()=>register()}>Register</button>
          <p className="login__request">
            Click{" "}
            <span className="login__span" onClick={() => setLogin(!login)}>
              here
            </span>{" "}
            to login
          </p>
        </div>
      )}
    </div>
  );
}

export default RegisterLogin;
