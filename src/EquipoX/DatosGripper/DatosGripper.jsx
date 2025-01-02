//Imagenes
import gripper from '../../IMG/icons/gripper.png';

//styles
import style from './DatosGripper.module.css';

const DatosGripper = () => {
    const datosGripper = [
        {
            id: 1,
            texto: 'COD. GRIPPER ACTUAL',
            dato: '0',
            icono: "",
        },
        {
            id: 2,
            texto: 'COD. GRIPPER PROXIMO',
            dato: '0',
            icono: "",
        },
        {
            id: 3,
            texto: 'GRIPPERS DISPONIBLES',
            dato: '0',
            icono: gripper,
        }
    ];
    return (
        <>
            <div className={style.datosGen}>
                <div className={style.contenedorDatos}>
                    <ul className={style.lista}>
                        {datosGripper.map(({ id, texto, dato, icono }) => (
                            <li key={id} className={style.datoList}>
                                <div className={style.detallesDatos} href='EquipoX'>
                                    <div className={style.texto}>
                                        <h3>{texto}</h3>
                                        <h4>{dato}</h4>
                                    </div>
                                    <img 
                                        src={icono} 
                                        alt={`Estado: ${id}`} 
                                        className={style.icon} 
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default DatosGenerales;