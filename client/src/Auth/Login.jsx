import { useState } from "react"
import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm"
import React from 'react'

const Login = ({onLogin}) => {

    const [showLogin, setShowLogin] = useState(true)

    return (
        <>
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
        </div>
           
        </>
    )
}

export default Login
