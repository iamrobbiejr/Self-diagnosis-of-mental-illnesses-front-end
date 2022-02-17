import React from 'react'
import "../css/Prediction.css";

function Prediction({onClick, prediction}) {
    return (
        <div className="prediction">
            <p className="prediction__content">The prediction is </p>
            <p className="prediction__pred">{prediction===1 ? <span>Yes</span> : <span>No</span>}</p>
            <div className="prediction__action">
            <button onClick={onClick} className="prediction__button">Close</button>
            </div>
            
        </div>
    )
}

export default Prediction
