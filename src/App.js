import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './welcomePage';
import Seguimiento from './pages/seguimiento';
import PrecipitationPage from './pages/PrecipitationPage';
import Formulario from './pages/formulario'; // Importar el formulario

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta de la página de bienvenida */}
        <Route path="/" element={<WelcomePage />} />
        {/* Otras páginas */}
        <Route path="/pages" element={<Seguimiento />} />
        {/* Ruta para la página de precipitación */}
        <Route path="/precipitation" element={<PrecipitationPage />} />
        {/* Nueva ruta para el formulario */}
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
    </Router>
  );
}

export default App;
