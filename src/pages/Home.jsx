import React from "react";
import '../css/Home.css'

function Home(){
    return(
        <>
            <div className="container">
                <div className="main">
                        <img src="chatlogo.png" width='160' height='140' style={{borderRadius:'5px'}}/>
                        <h1 style={{textAlign: 'center'}}>Welcome to the World of ChatNex</h1>
                        
                        <p style={{fontSize:'22px', textAlign: 'center'}}>Chat Smarter.Discover More...</p>
                        <button id="btn" style={{backgroundColor: '#b0acf0'}}>Continue</button>
                </div>
            </div>
        </>
    )
}

export default Home;