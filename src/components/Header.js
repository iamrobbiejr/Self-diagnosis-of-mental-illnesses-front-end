import React,{useState,useEffect} from "react";
import "../css/Header.css";
import "./Header";
import { NavLink,useHistory } from "react-router-dom";

const Header = (props) => {
  console.log(props);
  const id=localStorage.getItem('id');
  const [login,setlogin]=useState(localStorage.getItem('id')!==null);
  const history=useHistory();
  useEffect(() => {
    setlogin(localStorage.getItem('id')!==null)
  }, []);

  console.log(login);

  return (
    <div className="header">
      <div className="header__left">
      <NavLink to="/" className="header__link">
        <div className="header__item">
          <span>healthymind</span>
        </div>
      </NavLink>
      </div>
      <div className="header__right">
       {
       login &&  <NavLink to="/dashboard" className="header__link" activeClassName="active">
        <div className="header__item">
          <button>Dashboard</button>
        </div>
      </NavLink >} 
      {/*<NavLink to="/about" className="header__link" activeClassName="active">*/}
      {/*  <div className="header__item">*/}
      {/*    <button>About</button>*/}
      {/*  </div>*/}
      {/*</NavLink >*/}
      {/*<NavLink to="/contact" className="header__link" >*/}
      {/*  <div className="header__item">*/}
      {/*    <button>Contact</button>*/}
      {/*  </div>*/}
      {/*</NavLink >*/}
     {!login ? <NavLink to="/login" className="header__link" activeClassName="active">
      <div className="header__item">
        <button className="btn btn-primary">Login</button>
      </div>
      </NavLink>
        :
      <div className="header__item">
        <button onClick={()=>{
          localStorage.clear();
          setlogin(localStorage.getItem('id')!==null)
          history.push('/');
        }}>Logout</button>
      </div> }
      </div>
    </div>
  );
};

export default Header;
