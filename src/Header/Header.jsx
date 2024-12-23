import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <nav className={style.nav}>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
            </nav>
        </header>
    );
};

export default Header;
