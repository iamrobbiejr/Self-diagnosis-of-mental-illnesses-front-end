import React, { useEffect, useState } from "react";
import moment from "moment";
import Modal from "react-modal";
import "../css/MyReports.css";
import "../css/styles.css";
import {useHistory} from 'react-router-dom';

function MyReports() {
  const [reports, setReports] = useState([]);
  const [show, setShow] = useState(false);
  const [reportDate,setReportDate] = useState('');
  const [reportPrediction,setReportPrediction] = useState('');

  const history=useHistory();
  useEffect(() => {
    fetch("http://localhost:5000/myreports?id=" + localStorage.getItem("id"), {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReports(data);
      });
  }, []);
  const process = (d) => {
    console.log(d);
    const date = moment(d).format("DD MMM YYYY");
    const time = moment(d).format("HH:mm");
    return (
      <>
        <p className="report__date">{date}</p>
        <p className="report__time">{time}</p>
      </>
    );
  };
  const processformodal = (d) => {
    console.log(d);
    const date = moment(d).format("DD MMM YYYY");
    const time = moment(d).format("HH:mm");
    return (
      <>
        <p className="report__date">You had answered the questionnaire on <span>{date}</span> </p>
        <p className="report__date">at time <span>{time}</span></p>
      </>
    );
  };
  const handleClick = (d,p) => {
    setReportDate(d);
    setReportPrediction(p);
    setShow(true);
  };
  const toggleModal=() =>{
    setShow(!show);
    history.push("/dashboard/reports");
  }
  return (
    <div className="reports">
      <div className="reports__container">
        {reports.map((r) => (
          <>
            <div className="each__report">
              {process(r.date)}
              <button className="report__show" onClick={(e)=>handleClick(r.date,r.prediction)}>
                Show
              </button>
            </div>
          </>
        ))}
      </div>
      <Modal
        isOpen={show}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        {/* <EachReportModal onClick={toggleModal} report={eachReport}/> */}
        <div className="report__modal">
          <p className="title">Hi User</p>
          {processformodal(reportDate)}
          <p className="pred">The prediction was determined to be {reportPrediction===1?<span>Yes</span>:<span>No</span>}</p>
          <button className="close" onClick={toggleModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
}

export default MyReports;
