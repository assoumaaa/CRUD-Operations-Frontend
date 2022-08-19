import React, { useState } from 'react'
import "../loggingIn/LoggingIn.scss"
import axios from 'axios'


export const Registering = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const url = `users/login`
    const postData = (e) => {
        e.preventDefault();
        axios.post(url, {
            "username": username,
            "password": password,
            "rememberMe": true
        })
        console.log("sent succesfully..");
        setUsername("");
        setPassword("");
    }


    return (
        <div className="LoggingIn">
            <div className="container">
                <form>
                    <h1>Registering</h1>
                    <div className="input-box">
                        <input placeholder='Username...' type="text" required="required" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <input placeholder='Pasword...' type="password" required="required" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="button-box">
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
