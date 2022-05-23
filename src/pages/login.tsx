import React, { useState, useContext } from 'react';
// import AuthContextInterface from '../auth';
import { Routes } from 'react-router-dom';

import loginImg from '../assets/login.png';
import '../stylesInterface/login.css'

export function Login() {
    // const { authenticated, login } = useContext(AuthContext)

    const loginSubmit = (event: { preventDefault: () => void; }) =>{
        event.preventDefault()
        console.log('Email: '+email+ ' senha: '+password)
        // login(email, password) //integração
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <section className="container">
                <div className="area-login">
                    <div className="login">
                        <div>
                            <img className='login-img' src={loginImg}/>
                        </div>
                        <form onSubmit={loginSubmit}>
                            <input type="email" name='email' id='email' placeholder='Insira seu email' value={email} onChange={(event) => setEmail(event.target.value)}/>
                            <input type="password" name="password" id='password' placeholder="Insira sua senha" value={password} onChange={(event) => setPassword(event.target.value)}/>
                            <input type="submit" className='button' value="Entrar" />
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;

function AuthContext(AuthContext: any): { authenticated: any; login: any; } {
    throw new Error('Function not implemented.');
}
