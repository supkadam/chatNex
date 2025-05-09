import React from "react";
import '../css/Login.css'
import { useNavigate, Link } from "react-router-dom";  

function Home(){
    return(
        <>
            <div className="container">
                <div className="login-main">
                        <img src="chatlogo.png" width='160' height='140'/>
                        <h1>Login</h1>
                        
                        <input type="email" placeholder="Email" style={{height:'45px', width:'250px', fontSize: '20px', paddingLeft: '5px', borderRadius: '10px', border: '0.5px solid grey'}}/>
                        <input type="password" placeholder="Password" style={{height:'45px', width:'250px', fontSize: '20px', paddingLeft: '5px', borderRadius: '10px', border: '0.5px solid grey'}}/>
                        <button id="loginbtn">Login</button>
                        <Link to='/signup'>Not a registered user? Signup</Link>
                </div>
            </div>
        </>
    )
}

export default Home;