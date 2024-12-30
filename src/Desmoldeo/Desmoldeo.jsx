import Productividad from "../components/Productividad/Productividad.jsx";
import FiltroPeriodo from "../components/FiltroPeriodo/FiltroPeriodo.jsx";
import Botones from "../components/Botones/Exportar/Grandes/ExportarGrandes.jsx";
import style from './Desmoldeo.module.css';

function Desmoldeo() {
    return (
        <>
            <body className={style.contenedor}>
                <div className={style.productividad}>
                    <Productividad />
                    <div className={style.prodDer}>
                        <FiltroPeriodo />
                        <div className={style.botonesContainer}>
                            <Botones />
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
};

export default Desmoldeo;
