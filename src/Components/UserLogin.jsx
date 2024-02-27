import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Userlogin.css'
const UserLogin = () => {
    let[email,setemail]=useState("")
    console.log(email);
    let[password,setpassword]=useState("")
    console.log(password);
let navigate=useNavigate()
    let validate =()=>{
        if((email=="yeswanth"||email==8618958741)&& password=="1234"){
            alert("Login Successfull")
            navigate('/userhome')
        }
        else{
            alert("invalid credentials")
        }
    }
    return (  
        <div className="Userlogin">
            <h1 style={{color:"red"}}>User Login</h1>
            <form action="">
                <div className="email2">
                <label htmlFor="">
                    Email/Phone:
                    <input id="email" value={email} onChange={(e)=>{setemail(e.target.value)}} type="text" />
                </label>
                </div>
                <div className="password2">
                <label htmlFor="">
                    Password:
                    <input id="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" />
                </label>
                </div>
                <div className="btn">
                <button onClick={validate}>Sign in</button>
                </div>
            </form>
        </div>
    );
}
 
export default UserLogin;