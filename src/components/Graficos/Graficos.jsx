import CiclosProductos from '../CiclosProductos/CiclosProductos';
import CiclosRealizados from '../CiclosRealizados/CiclosRealizados';
import style from './Graficos.module.css';

const Graficos = () => {
    return (
        <div classname={style.contenedor}>
            <div className={style.sections}>
                <CiclosProductos />
                <CiclosRealizados />
            </div>
        </div>
    );
};

export default Graficos;