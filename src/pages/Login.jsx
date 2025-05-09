import React from "react";
import '../css/Home.css'

function Home(){
    return(
        <>
            <div className="container">
                <div className="main">
                        <img src="logo.png" width='180'/>
                        <h1 style={{fontSize:'40px'}}>Login</h1>
                        
                        <input type="email" placeholder="Enter your email" style={{height:'45px', width:'250px'}}/>
                        <input type="password" placeholder="Enter your password" style={{height:'45px', width:'250px'}}/>
                        <button>Login</button>
                </div>
            </div>
        </>
    )
}

export default Home;