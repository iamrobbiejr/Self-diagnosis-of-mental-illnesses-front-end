import React,{useState} from 'react';
import '../css/Venout.css';
import smiley from '../images/smiley.png';

const Display = ({text})=>{
    let t=text.split('\n');
    t=t.filter(t=>t!=='');
    console.log(t);
    return(
        <>
            {t.map(t1=>(
                <p className="ventout__result">{t1}</p>
            ))}
        </>
    )
}

function Ventout() {
    const [input,setInput] = useState('');
    const [isResult,setIsResult] = useState(false);
    const [result,setResult] = useState('');
    const submit = () =>{
        let data = {
            input:input
        };
        fetch('http://localhost:5000/ventout',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json',
            }
        }).then(response=>response.json())
        .then(data=>{
            setIsResult(true);
            setResult(data.result);
        })
    };
    const handleChange = (e) =>{
        setIsResult(false);
        setInput(e.target.value);
    }
    // const process = () =>{
    //     const text=result.split('/n');
    //     console.log(text);
    //     const todisplay=text.map(t=>{
    //         return(
    //             <p>t</p>
    //         )
    //     });
    //     console.log(todisplay);
    //     return(
    //         todisplay
    //     )
    // }

    return (
        <div className="ventout">
           <div className="ventout__section">
               {!isResult && 
               <>
                <p className="ventout__section-title">Hi User</p>
                <p className="ventout__section-subtitle">You can share what you are feeling today</p>
                <textarea value={input} onChange={(e) => {
    handleChange(e)
}}/>
                <button className="ventout__submit" onClick={submit}>Check</button>
                </>
               }
               {isResult &&
               <>
               <Display text={result}/>
               <p className="great__day">Have a great day...........</p>
               <img src={smiley} className="ventout__smiley"/>
               </>
               }
           </div>
        </div>
    )
}

export default Ventout
