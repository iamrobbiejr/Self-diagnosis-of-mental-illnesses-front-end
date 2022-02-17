import React,{useState} from 'react';
import '../css/MyAccount.css';

function MyAccount() {
    const [oldpassword,setOldpassword]=useState('');
    const [password,setPassword]=useState('');
    const [repeatpassword,setRepeatPassword]=useState('');

    const handlePassword=()=>{
        if(password!==repeatpassword){
            alert("not matched")
            setOldpassword('');
            setPassword('');
            setRepeatPassword('');
        }
        else{
            let data={
                id:localStorage.getItem('id'),
                oldpassword:oldpassword,
                newpassword:password,
            }
            fetch('http://localhost:5000/changepassword',{
                method:'POST',
                body:JSON.stringify(data),
                headers:{
                    'Content-Type': 'application/json',
                }
            }).then(response=>response.json())
            .then(data=>{
               // console.log(data);
                alert(data.message);
                setOldpassword('');
                setPassword('');
                setRepeatPassword('');
            }
            )
        };
        console.log(password,repeatpassword,oldpassword);
    }
    return (
        <div className="account">
{/*             
            <div className="account__email">
                <p>Email - {localStorage.getItem('email')}</p>
            </div>
             */}
            <div className="container-1">
                <div className="account__password">
                    <p className="account__password-title">Change Password</p>
                    <div className="old_password">
                        <p className="account__password-p">Old Password</p>
                        <input type="password" value={oldpassword} onChange={(e)=>setOldpassword(e.target.value)} />
                    </div>
                    <div className="new_password">
                        <p className="account__password-p">New Password</p>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                    <div className="repeat_password">
                        <p className="account__password-p">Repeat Password</p>
                        <input type="password" value={repeatpassword} onChange={(e)=>setRepeatPassword(e.target.value)} />
                    </div>
                    <div className="change__password">
                        <button onClick={handlePassword}>Change password</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default MyAccount
