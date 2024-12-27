import cremImg from '../IMG/logos/creminox.png';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import style from './Login.module.css';

const Login = () => {
    return (
        <>
            <Header />
            <body className={style.contenedor}>
                <nav className={style.formularioLogin}>
                    <h5>Login</h5>
                    <div>
                        <img className={style.img} src={cremImg} alt="Creminox" />
                    </div>
                </nav>
            </body>
            <Footer />
        </>
    );
};

export default Login;