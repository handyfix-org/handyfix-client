import React, { useState, useEffect } from "react";
import "./Login.scss";
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Login() {

    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = () => {
        axios({
            method: "POST",
            data: {
                username: loginUsername,
                password: loginPassword,
            },
            withCredentials: true,
            url: "http://localhost:5173/login",
        }).then((res) => console.log(res));
    };

    return ( 
        <section className="login">
            <div className="login__container">
                <h1 className="login__label">Login</h1>
                <input placeholder="Username" onChange={e => setLoginUsername(e.target.value)} />
                <input placeholder="Password" onChange={e => setLoginPassword(e.target.value)} />
                <button onClick={login}>Login</button>
            </div>
        </section>
    )
}