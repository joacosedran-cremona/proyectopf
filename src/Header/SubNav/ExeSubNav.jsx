import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubNav from './SubNav'; // Asegúrate de que está correctamente importado

// Componentes de las páginas
import Home from '../../Home/Home.jsx';
import Desmoldeo from '../../Desmoldeo/Desmoldeo.jsx';
import Encajonado from '../../Encajonado/Encajonado.jsx';
import Paletizado from '../../Paletizado/Paletizado.jsx';

function ExeSubNav() {
    return (
        <Router> {/* Router dentro de ExeSubNav */}
            {/* Barra de navegación */}
            <SubNav />
            
            {/* Rutas */}
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/desmoldeo" element={<Desmoldeo />} />
                <Route path="/encajonado" element={<Encajonado />} />
                <Route path="/paletizado" element={<Paletizado />} />
            </Routes>
        </Router>
    );
}

export default ExeSubNav;