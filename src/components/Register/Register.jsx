import React, { useState, useEffect } from "react";
import"./Register.scss";
import axios from "axios";

export default function Register() {

    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = () => {
        axios({
            method: "POST",
            data: {
                username: registerUsername,
                password: registerPassword,
            },
            withCredentials: true,
            url: "http://localhost:5173/register",
        }).then((res) => console.log(res));
    };

    return ( 
        <section className="register">
            <div className="register__container">
                <h1 className="register__label">Register</h1>
                <input placeholder="Username" onChange={e => setRegisterUsername(e.target.value)} />
                <input placeholder="Password" onChange={e => setRegisterPassword(e.target.value)} />
                <button onClick={register}>Sign Up</button>
            </div>
        </section>
    )
}