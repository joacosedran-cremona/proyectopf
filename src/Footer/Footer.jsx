import creminoxLogo from './creminox-logo.png';
import style from './Footer.module.css';

function Footer () 
{
    return (
        <>
        <footer className={style.footerGen}>
            <div className={style.footerIzq}>
                <p>Beron de Astrada 2745 - Argentina</p>
                <p>sistemas@creminox.com</p>
                <p>4319-3944</p>
            </div>
            
            <div className={style.footerImg}>
                <a href="https://creminox.com" target="_blank">
                    <img src={creminoxLogo} alt="Creminox logo" />
                </a>
            </div>

            <div className={style.footerDer}>
                <p>www.creminox.com</p>
                <p>/creminox7402</p>
                <p>/Creminox</p>
            </div>
        </footer>
        </>
    )
}

export default Footer;