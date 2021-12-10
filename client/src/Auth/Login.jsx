import { useState } from "react"
import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm"
import React from 'react'

const Login = ({onLogin}) => {

    const [showLogin, setShowLogin] = useState(true)

    return (
        <div className="login-container">
            <h2 className="login-header">STOREINVO</h2>
           <div className="svg-2">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6433c6e8" fillOpacity="1" d="M0,192L48,170.7C96,149,192,107,288,80C384,53,480,43,576,42.7C672,43,768,53,864,69.3C960,85,1056,107,1152,106.7C1248,107,1344,85,1392,74.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
           </div>
            <div className="auth-container">
                <div className='auth-card'>
                    <div className='inner-card'>
                        {showLogin ? (
                        <div className= 'card-front'>   
                            <LoginForm onLogin={onLogin}/>               
                            <div>
                                <button onClick={() => { 
                                    setShowLogin(false)
                                }}>                     
                                    Register Here
                                </button>
                            
                            </div>
                        </div>
                            ) : (
                        <div className='card-back'>
                            <SignUpForm onLogin={onLogin}/>
                            <div btn-class>
                                <button onClick={() => { 
                                    setShowLogin(true);
                                }}>
                                    Log In
                                </button>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
                <div className="svg-1">  
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6433c6e8" fillOpacity="1" d="M0,64L48,58.7C96,53,192,43,288,85.3C384,128,480,224,576,245.3C672,267,768,213,864,181.3C960,149,1056,139,1152,117.3C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> 
                </div> 
            </div> 
           
        </div>
    )
}

export default Login
