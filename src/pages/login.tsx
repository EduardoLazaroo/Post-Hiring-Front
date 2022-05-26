import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import api from "../services/request.js"

// import api from "../services/auth.js"


import loginImg from '../assets/login.png';
import '../stylesInterface/login.css'

export function Login() {
    const navigate = useNavigate();

    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");
    

    async function authenticateUser() {
        

        const res = await api.login(usuario, senha);
        console.log('resp', res)
    }
    
    return (
        <>
            <section className="container">
                <div className="area-login">
                    <div className="login">
                        <div>
                            <img className='login-img' src={loginImg}
                            />
                        </div>
                        <form method='POST'>
                            <input 
                                type="text" 
                                placeholder='Insira seu usuario' 
                                onChange={(event) => setUsuario(event.target.value)}
                            />
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Insira sua senha" 
                                onChange={(event) => setSenha(event.target.value)}
                            />
                            <br></br>
                            <button 
                                type="button" 
                                className='button' 
                                value="Entrar" 
                                onClick={()=>authenticateUser()}
                            >Entrar</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;