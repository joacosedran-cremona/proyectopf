import React from 'react';
import creminoxLogo from './creminox-logo.png';
import style from './Footer.module.css';

const Footer = () => {
    return (
    <footer className={style.all}>
        <div className={style.contenedor}>
            <ul className={`${style.contenedor} ${style.footerIzq}`}>
                <li>
                    <img src="location-icon.png" alt="Ubicación" className={style.icon} />
                    Beron de Astrada 2745 - Argentina
                </li>
                <li>
                    <img src="email-icon.png" alt="Correo" className={style.icon} />
                    <a href="mailto:sistemas@creminox.com">sistemas@creminox.com</a>
                </li>
                <li>
                    <img src="phone-icon.png" alt="Teléfono" className={style.icon} />
                    4319-3944
                </li>
            </ul>

            <div className={`${style.contenedor} ${style.footerImg}`}>
            <a href="https://creminox.com" target="_blank" rel="noopener noreferrer">
                <img src={creminoxLogo} alt="Creminox logo" />
            </a>
            </div>

            <ul className={`${style.contenedor} ${style.footerDer}`}>
                <li>
                    <img src="website-icon.png" alt="Sitio web" className={style.icon} />
                    <a href="https://www.creminox.com" target="_blank" rel="noopener noreferrer">
                    www.creminox.com
                    </a>
                </li>
                <li>
                    <img src="facebook-icon.png" alt="Facebook" className={style.icon} />
                    <a href="https://facebook.com/creminox7402" target="_blank" rel="noopener noreferrer">
                    /creminox7402
                    </a>
                </li>
                <li>
                    <img src="instagram-icon.png" alt="Instagram" className={style.icon} />
                    <a href="https://instagram.com/Creminox" target="_blank" rel="noopener noreferrer">
                    /Creminox
                    </a>
                </li>
            </ul>
        </div>
        <hr/>
        <div className={style.footerAbajo}>
            <p>© 2024 All Rights Reserved Cremona Inoxidable</p>
        </div>
    </footer>
    );
};

export default Footer;
