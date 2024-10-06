import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './welcomePage'; // Importar tu componente

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta de la página de bienvenida */}
        <Route path="/" element={<WelcomePage />} />
        {/* Otras páginas */}
      </Routes>
    </Router>
  );
}

export default App;

