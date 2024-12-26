import React from 'react';
import cremImg from '../IMG/logos/creminox-logo.png';
import igImg from '../IMG/logos/instagram.png';
import linkImg from '../IMG/logos/linkedin.png';
import locImg from '../IMG/logos/location.png';
import mailImg from '../IMG/logos/mail.png';
import phoneImg from '../IMG/logos/telephone.png';
import fbImg from '../IMG/logos/facebook.png';

import style from './Footer.module.css';

const Footer = () => {
    return (
    <footer className={style.all}>
        <div className={style.contenedor}>
            <ul className={`${style.contenedor} ${style.footerIzq}`}>
                <li>
                    <img src={locImg} alt="Ubicación" className={style.icon} />
                    <p>
                        Beron de Astrada 2745 - Argentina
                    </p>
                </li>
                <li>
                    <img src={mailImg} alt="Correo" className={style.icon} />
                    <a href="mailto:sistemas@creminox.com">sistemas@creminox.com</a>
                </li>
                <li>
                    <img src={phoneImg} alt="Teléfono" className={style.icon} />
                    <p>
                        4319-3944
                    </p>
                </li>
            </ul>

            <div className={`${style.contenedor} ${style.footerImg}`}>
            <a href="https://creminox.com" target="_blank" rel="noopener noreferrer">
                <img src={cremImg} alt="Creminox logo" />
            </a>
            </div>

            <ul className={`${style.contenedor} ${style.footerDer}`}>
                <li>
                    <a href="https://www.creminox.com" target="_blank" rel="noopener noreferrer">
                    www.creminox.com
                    </a>
                    <img src={linkImg} alt="Linkedin" className={style.icon} />
                </li>
                <li>
                    <a href="https://facebook.com/creminox7402" target="_blank" rel="noopener noreferrer">
                    /creminox7402
                    </a>
                    <img src={fbImg} alt="Facebook" className={style.icon} />
                </li>
                <li>
                    <a href="https://instagram.com/Creminox" target="_blank" rel="noopener noreferrer">
                    /Creminox
                    </a>
                    <img src={igImg} alt="Instagram" className={style.icon} />
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
