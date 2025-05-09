import React from "react";
import '../css/Home.css'
import { useNavigate } from "react-router-dom";  


function Home(){
    const navigate = useNavigate();
    return(
        <>
            <div className="container">
                <div className="main">
                        <img src="chatlogo.png" width='160' height='140' />
                        <h1 style={{textAlign: 'center'}}>Welcome to the World of ChatNex</h1>
                        
                        <p style={{fontSize:'22px', textAlign: 'center'}}>Chat fearlessly...</p>
                        <button id="btn" onClick={()=>{navigate('/login')}}>Continue</button>
                        
                </div>
            </div>
        </>
    )
}

export default Home;