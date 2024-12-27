import cremImg from '../IMG/logos/creminox.png';

import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.contenedor}>
            <nav className={style.navbar}>
            <ul>
                <li><a href="#inicio">Home</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#inicio">Home</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
            <div>
                <img className={style.img} src={cremImg} alt="Creminox" />
            </div>
            </nav>
        </header>
    );
};

export default Header;
