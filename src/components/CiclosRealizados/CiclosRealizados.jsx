import style from './CiclosRealizados.module.css';
import FiltroPeriodo from '../FiltroPeriodo/FiltroPeriodo';
import Botones from '../Botones/Exportar/Grandes/ExportarGrandes'
import ProductosRealizados from '../ProductosRealizados/ProductosRealizados';

const CiclosRealizados = () => {
    return (
        <>
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
        </>
    );
};

export default CiclosRealizados;
