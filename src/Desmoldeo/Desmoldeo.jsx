import maqImg from '../IMG/otros/nsd42jps.bmp';
import style from './Desmoldeo.module.css';

const Desmoldeo = () => {
    return (
        <>
            <body className={style.contenedor}>
                <div className={style.contenedorImagen}>
                    <img className={style.img} src={maqImg} alt="Creminox" />
                </div>
                <h2>DESMOLDEO</h2>
                <div>
                    <div>
                        
                    </div>
                </div>
            </body>
        </>
    );
};

export default Desmoldeo;