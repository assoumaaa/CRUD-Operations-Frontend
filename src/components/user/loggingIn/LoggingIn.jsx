import React, { useState } from 'react'
import "./LoggingIn.scss"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';



export const LoggingIn = () => {
    const navigate = useNavigate();
    const [checkAgain, setCheckAgain] = useState(false);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [cookies, setCookie] = useCookies();


    const url = `users/login`
    const postData = async(e) => {
        e.preventDefault();
        await axios.post(url, {
            "username": username,
            "password": password,
            "rememberMe": true
        }).then(res => {
            setCookie('jwt', res.data, { path: '/' });
            console.log(cookies);
            navigate('allCustomers')
        })
        setCheckAgain(true);
    }



    return (
        <div className="LoggingIn">
            <div className="container">
                <form>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input placeholder='Username...' type="text" required="required" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <input placeholder='Pasword...' type="password" required="required" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="button-box">
                        <button onClick={postData}>Login</button>
                    </div>
                    <div className="register">
                        <span>Don't have an account? <a href='/registering'>Sign Up!</a></span>
                    </div>
                    {checkAgain && 
                        <span>Please try again!</span>
                    }
                </form>
            </div>
        </div>
    )
}
