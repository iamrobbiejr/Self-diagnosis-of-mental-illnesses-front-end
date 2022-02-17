import React from 'react'
import '../css/Dashboard.css';
import img1 from "../images/demo-4.jpg";

//import {useRouteMatch} from 'react-router-dom';

function Dashboard(props) {
  //  let { path, url } = useRouteMatch();
 //   console.log(path,"------url:",url);
    return (
        <div className="dashboard">
            <div className="sty_1">
               
                <img className="sty_img" src={img1} alt="" />
                <br/><br/>
                <div className="dashboard_title"><p>Welcome to "HEALTHYMIND" online screening.</p></div>
                <div className="dashboard_subsection" >
                    <p>
                     Your answers are completely anonymous we won't record anything that can identify you.
                        <br/>The screening tool will guide you through the following steps:
                    </p>
                </div>
                <br/><br/>
                <table >
                <tr>
                    <td className="numbers">
                    1
                    </td>
                    <td className="text_style">
                    First, you'll be asked to provide a little information about yourself (general information) so we can guide you to the right screenings.
                    </td>
                </tr>
                <tr>
                    <td className="numbers">
                    2
                    </td>
                    <td className="text_style">
                    The wellbeing screening is a series of questionares designed to gauge your overall mental health.
                    </td>
                </tr>
                <tr>
                    <td className="numbers">
                    3
                    </td>
                    <td className="text_style">
                    Finally, your results will be displayed for you to review.
                    </td>
                </tr>
                </table>
            </div>
         </div>
    );
}

export default Dashboard
