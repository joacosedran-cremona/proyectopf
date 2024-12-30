import Productividad from "../components/Productividad/Productividad.jsx";
import FiltroPeriodo from "../components/FiltroPeriodo/FiltroPeriodo.jsx";
import Botones from "../components/Botones/Exportar/Grandes/ExportarGrandes.jsx";
import ProductosRealizados from "../components/ProductosRealizados/ProductosRealizados.jsx";
import style from './Desmoldeo.module.css';


function Desmoldeo() {
    return (
        <div className={style.contenedor}>
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
            <div className={style.seccion}>
                <h2>CICLOS POR PRODUCTO</h2>
                <p>Kilos</p>
                <p>Torres</p>
                <h1>POR PERIODO</h1>
            </div>
            <div className={style.seccion}>
                <div className={style.filtro}>
                    <FiltroPeriodo />
                    <div className={style.botonesContainer}>
                        <Botones />
                    </div>
                </div>
                <div className={style.productividad}>
                    <ProductosRealizados />
                </div>
            </div>
        </div>
    );
}

export default Desmoldeo;
