import loginImg from '../assets/login.png';
import '../stylesInterface/login.css'

export function Login() {
    return (
        <>
            <section className="container">
                <div className="area-login">
                    <div className="login">
                        <div>
                            <img className='login-img' src={loginImg}/>
                        </div>
                        <form action="">
                            <input type="email" name='login' placeholder='Insira seu email'/>
                            <input type="password" name="password" placeholder="Insira sua senha"/>
                            <a className='button' href="home">Entrar</a>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;