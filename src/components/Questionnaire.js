import React, { useEffect, useState } from "react";
import "../css/Questionnaire.css";
import "../css/styles.css";
import image from "../images/bg9.png";
import img1 from "../images/self_care.jpg";
import Modal from "react-modal";
import Prediction from './Prediction';
import {useHistory} from 'react-router-dom';
Modal.setAppElement("#root");

function Questionnaire() {
  const [questions, setQuestions] = useState([]);
  const [questionstart, setQuestionstart] = useState(0);
  const [start, setStart] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [done, setDone] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [prediction,setPrediction] = useState(null);
  const [loading,setLoading]=useState(false);
  const history=useHistory();

  useEffect(() => {
    fetch("http://localhost:5000/questions?id="+localStorage.getItem('id'), {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuestions(data);
      });
  }, []);

  const toggleModal=() =>{
    setIsOpen(!isOpen);
    history.push("/dashboard");

  }

  const handleSubmit = () => {
      setLoading(!loading);
    let data = {
      answer: answers,
      id: localStorage.getItem("id"),
    };
    
     fetch('http://localhost:5000/questions',{
            method:'POST',
            body:JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
              }
        }).then(response=>response.json())
        .then(data=>{
            console.log(data);
            //alert("Prediction-------"+data.prediction);
            setLoading(!loading);
            setPrediction(data.prediction);
            setIsOpen(!isOpen);
            }
        );

    
  };

  const handleAnswer = (answer) => {
    setAnswers((answers) => [
      ...answers,
      { id: questionstart, answer: answer },
    ]);
    console.log("question start", questionstart);
    console.log("question length", questions.length);
    if (questionstart + 1 === questions.length) {
      //alert("reached end");
      console.log(answers);
      setDone(true);
      //handleSubmit();
    } else {
      setQuestionstart(questionstart + 1);
      console.log(answers);
    }
  };
  console.log(answers);
  return (
    <div className="questions">
      <div className="questions__question-block">
        {!done && (
          <>
            {!start && (
              <div className="start__block">
                <img src={img1} alt="" />
                <button onClick={() => setStart(true)}>Start</button>
              </div>
            )}
          </>
        )}
        {!done && (
          <>
            {start && (
              <React.Fragment>
                {questions.length > 0 && (
                  <div className="questions__eachquestion">
                    <div className="question__status">
                      <p>
                        {questionstart + 1}/{questions.length} questions
                      </p>
                    </div>

                    <div className="questions__eachquestion-question">
                      <p className="question__heading">
                        {questions[questionstart].heading}
                      </p>
                      <p className="question__question">
                        {questions[questionstart].question}
                      </p>
                    </div>
                    <div className="questions__eachquestion-options">
                      {questions[questionstart].options.map((option, index) => (
                        <div
                          className="questions__eachquestion-option"
                          onClick={() => handleAnswer(option)}
                          key={index}
                        >
                          <p>{option}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </React.Fragment>
            )}
          </>
        )}
        {done && (
          <div className="start__block">
            <button onClick={handleSubmit}>Submit</button>
            {loading && <p className="pred__loading">
                Loading the results.........
                </p>}
          </div>
        )}
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          <Prediction onClick={toggleModal} prediction={prediction}/>
          
        </Modal>
      </div>
    </div>
  );
}

export default Questionnaire;
