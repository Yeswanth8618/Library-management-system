import {useState} from "react";
import {useNavigate} from 'react-router-dom';
import '../styles/Adminlogin.css'
const AdminLogin = () => {
    let[email,setemail]=useState("")
    console.log(email);
    let[password,setpassword]=useState("")
    console.log(password);
    let navigate=useNavigate();
    let validate =()=>{
        if((email=="yeswanth"||email==8618958741)&& password=="1234"){
            alert("Login Successfull")
            navigate('/adminhome');
        }
        else{
            alert("invalid credentials")
        }
    }
    return (  
        <div className="adminlogin">
            <h1 style={{color:"#9df9ef"}}>Admin Login</h1>
            <form action="">
                <div className="email">
                <label htmlFor="">
                    Email/Ph:
                    <input id="email" value={email} onChange={(e)=>{setemail(e.target.value)}} type="text" />
                </label>
                </div>
                <div className="password">
                <label htmlFor="">
                    Password:
                    <input id="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" />
                </label>
                </div>
                <div className="btn">
                <button onClick={validate} style={{color:"white",backgroundColor:"blue"}}>Sign in</button>
                </div>
            </form>
        </div>
    );
}
 
export default AdminLogin;