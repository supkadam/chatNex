import React from "react";
import '../css/Signup.css'
import { useNavigate, Link } from "react-router-dom";  

function Home(){
    return(
        <>
            <div className="container">
                <div className="signup-main">
                        <img src="chatlogo.png" width='160' height='140'/>
                        <h1>Sign up</h1>

                        <input type="text" placeholder="Username" style={{height:'45px', width:'250px', fontSize: '20px', paddingLeft: '5px', borderRadius: '10px', border: '0.5px solid grey'}}/>
                        
                        <input type="email" placeholder="Email" style={{height:'45px', width:'250px', fontSize: '20px', paddingLeft: '5px', borderRadius: '10px', border: '0.5px solid grey'}}/>

                        <input type="password" placeholder="Password" style={{height:'45px', width:'250px', fontSize: '20px', paddingLeft: '5px', borderRadius: '10px', border: '0.5px solid grey'}}/>

                        <button id="loginbtn">Signup</button>
                        <Link to='/login' style={{textDecoration: 'none'}}>Already registered? Login</Link>
                </div>
            </div>
        </>
    )
}

export default Home;