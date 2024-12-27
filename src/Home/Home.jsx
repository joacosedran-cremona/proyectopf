import maqImg from '../IMG/otros/nsd42jps.bmp';
import style from './Home.module.css';

const Home = () => {
    return (
        <>
            <body className={style.contenedor}>
                <div className={style.contenedorImagen}>
                    <img className={style.img} src={maqImg} alt="Creminox" />
                </div>
                <h2>Ultimas Alertas</h2>
                <div>
                    <div>
                        
                    </div>
                </div>
            </body>
        </>
    );
};

export default Home;