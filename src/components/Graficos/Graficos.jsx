import CiclosProductos from '../CiclosProductos/CiclosProductos';
import CiclosRealizados from '../CiclosRealizados/CiclosRealizados';
import style from './Graficos.module.css';

const Graficos = () => {
    return (
        <>
            <CiclosProductos />
            <CiclosRealizados />
        </>
    );
};

export default Graficos;