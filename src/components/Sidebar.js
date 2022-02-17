import React from 'react';
import {NavLink,Link,Route,Switch,useRouteMatch} from 'react-router-dom';
import '../css/Sidebar.css';
import Questionnaire from './Questionnaire';
import MyReports from './MyReports';
import MyAccount from './MyAccount';
import Dashboard from './DashboardHome';
import DbHome from "./DbHome";
import Ventout from './Ventout';

function Sidebar() {
    //let { path, url } = useRouteMatch();
    return (
        <div className="sidebar">
            <div className="sidebar__links">
            
           <NavLink to="/dashboard" className="sidebar__link" ><p>Home</p></NavLink>
           <NavLink to="/dashboard/questionnaire" className="sidebar__link" activeClassName="active-dash"><p>Questionnaire</p></NavLink>
           <NavLink to="/dashboard/reports" className="sidebar__link" activeClassName="active-dash"><p>My reports</p></NavLink>
           <NavLink to="/dashboard/ventout" className="sidebar__link" activeClassName="active-dash"><p>Ventout</p></NavLink>
           <NavLink to="/dashboard/account" className="sidebar__link" activeClassName="active-dash"><p>My Account</p></NavLink>
            </div>


           
           <Switch>
                <Route path="/dashboard/questionnaire">
                   <Questionnaire />
                </Route>
               
               <Route  path="/dashboard/reports">
                   <MyReports/>
               </Route>
               <Route  path="/dashboard/ventout">
                   <Ventout/>
               </Route>
               <Route  path="/dashboard/account">
                   <MyAccount/>
               </Route>
               <Route  path="/dashboard">
                  <DbHome/>
               </Route>
           </Switch>
        </div>
    )
}

export default Sidebar
