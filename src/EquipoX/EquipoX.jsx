//components
import DatosGenerales from './DatosGenerales/DatosGenerales.jsx';
import SectorIO from './SectorIO/SectorIO.jsx';

import style from './EquipoX.module.css';

const EquipoX = () => {
    return (
        <>
            <body className={style.all}>
                <div className={style.Izq}>
                    <DatosGenerales />
                    <SectorIO />
                </div>

                <div className={style.Med}>
                    <div className={style.datosGripper}>

                    </div>

                    
                    <div className={style.kuka}>

                    </div>

                    
                    <div className={style.datosSDDA}>

                    </div>
                    
                    
                    <div className={style.datosTorre}>

                    </div>
                </div>

                <div className={style.Der}>
                    <div>
                        <div>

                        </div>
                    </div>
                </div>
            </body>
        </>
    );
};

export default EquipoX;