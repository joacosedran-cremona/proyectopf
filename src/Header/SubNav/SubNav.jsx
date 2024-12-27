import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './SubNav.module.css';
import puntoVerde from '../../IMG/semaforo/puntoVerde.png'; // Imagen de punto verde
import puntoGris from '../../IMG/semaforo/puntoGris.png'; // Imagen de punto gris

const SubNav = () => {
    const location = useLocation(); // Obtiene la ruta actual
    const [activeId, setActiveId] = useState(null);

    const opcionesBotones =
    [
        { id: 1, path: "/home", text: "COMPLETO" },
        { id: 2, path: "/desmoldeo", text: "DESMOLDEO" },
        { id: 3, path: "/encajonado", text: "ENCAJONADO" },
        { id: 4, path: "/paletizado", text: "PALETIZADO" }
    ];

    // Actualiza el estado al hacer clic
    const handleClick = (id) => setActiveId(id);

    // Selecciona automáticamente el activo con base en la URL
    useEffect(() => {
        const currentOption = opcionesBotones.find(option => option.path === location.pathname);
        if (currentOption) setActiveId(currentOption.id);
    }, [location.pathname]);

    return (
        <div className={style.contenedor}>
            <div className={style.SubNav}>
                <ul className={style.navLinks}>
                    {opcionesBotones.map(({ id, path, text }) => (
                        <li
                            key={id}
                            className={`${style.itemNav} ${activeId === id ? style.active : ''}`} // Clase activa
                            onClick={() => handleClick(id)}
                        >
                            {/* Imagen del punto, cambia entre verde y gris dependiendo del estado */}
                            <img
                                className={style.puntosNav}
                                src={activeId === id ? puntoVerde : puntoGris}
                                alt="Punto"
                            />
                            <Link to={path}>{text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SubNav;