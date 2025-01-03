import React from 'react';
import cremImg from '../IMG/logos/creminox.png';  // Importar imagenes
import usuario from '../IMG/icons/usuario.png';
import campImg from '../IMG/icons/campana.png';
import alarmaImg from '../IMG/icons/alarma.png';
import style from './Header.module.css';  // Estilos de Header

const Header = () => {
  const opcionesIconos = [
    { id: 1, url: "/", icon: usuario },
    { id: 2, url: "/", icon: campImg },
    { id: 3, url: "/", icon: alarmaImg },
  ];

  const opcionesMenu = [
    { id: 1, url: "/home", text: "Home" },  // Cambiar url para que redirija a Home
    { id: 2, url: "/contacto", text: "Contacto" },  // Cambiar url para que redirija a Contacto
  ];

  return (
    <header className={style.contenedor}>
      <nav className={style.navbar}>
        <div className={style.icons}>
          {opcionesIconos.map(({ id, url, icon }) => (
            <a key={id} className={style.contenedorImg} href={url}>
              <img className={style.icon} src={icon} alt={`Icono ${id}`} />
            </a>
          ))}
        </div>
        <div className={style.centerText}>
          <p>SDDA - EFA PROYECTO</p>
        </div>
        <div className={style.rightSection}>
          <ul className={style.navLinks}>
            {opcionesMenu.map(({ id, url, text }) => (
              <li key={id} className={style.itemNav}>
                <a href={url}>{text}</a>
              </li>
            ))}
          </ul>
          <div className={style.logo}>
            <img className={style.img} src={cremImg} alt="Creminox" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;