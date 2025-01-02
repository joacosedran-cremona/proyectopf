import Productividad from "../components/Productividad/Productividad.jsx";
import FiltroPeriodo from "../components/FiltroPeriodo/FiltroPeriodo.jsx";
import Botones from "../components/Botones/Exportar/Grandes/ExportarGrandes.jsx";
import ProductosRealizados from "../components/ProductosRealizados/ProductosRealizados.jsx";
import NavDatos from "../NavDatos/NavDatos.jsx";
import style from './Desmoldeo.module.css';


function Desmoldeo() {
    return (
        <>
        <NavDatos />
        <div className={style.contenedor}>
            
            {/* Productividad*/}
            <div className={style.seccion}>
                <div className={style.productividad}>
                    <Productividad />
                </div>
                <div className={style.filtro}>
                    <FiltroPeriodo />
                    <div className={style.botonesContainer}>
                        <Botones />
                    </div>
                </div>
            </div>

            {/*Grafico ciclos realizados */}

        </div>
        </>

    );
}

export default Desmoldeo;
