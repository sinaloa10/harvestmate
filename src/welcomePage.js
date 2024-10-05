import React, { useState } from 'react';

function WelcomePage() {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleMouseDown = () => setIsActive(true);
  const handleMouseUp = () => setIsActive(false);

  const handleButtonClick = () => {
    // Hacer scroll hacia abajo de la ventana
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  const styles = {
    body: {
      margin: 0,
    },
    navbar: {
      position: 'fixed', // Hacer que la navbar sea fija
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#5a401e', // Color de fondo de la navbar
      padding: '10px 20px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Sombra para un efecto de elevación
      zIndex: 1000, // Asegurarse de que esté por encima de otros elementos
    },
    navItem: {
      color: 'white',
      textDecoration: 'none',
      padding: '10px 15px',
      borderRadius: '5px',
      transition: 'background-color 0.3s',
    },
    navItemHover: {
      backgroundColor: '#6c3c11', // Color de fondo al pasar el mouse
    },
    container: {
      textAlign: 'center',
      padding: '100px 20px 20px 20px', // Aumentar el padding superior para evitar que el contenido quede detrás de la navbar
      backgroundColor: '#e8f5e9',
      height: '100vh',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto',
    },
    header: {
      fontSize: '48px',
      color: '#5a401e',
      marginBottom: '20px',
    },
    text: {
      fontSize: '20px',
      color: '#000',
      marginBottom: '20px 0',
      fontWeight: 'bold',
    },
    buttonPrincipal: {
      padding: '17px 40px',
      borderRadius: '50px',
      border: '0',
      backgroundColor: isHovered || isActive ? '#6c3c11' : '#2e7d32',
      boxShadow: isHovered ? '#c7612e 0px 7px 29px 0px' : 'black 0px 0px 8px',
      letterSpacing: isHovered || isActive ? '3px' : '1.5px',
      textTransform: 'uppercase',
      fontSize: '15px',
      transition: isActive ? '100ms' : 'all 0.5s ease',
      color: isHovered || isActive ? '#fff' : '#000',
      transform: isActive ? 'translateY(10px)' : 'none',
      fontWeight: 'bold',
    },
    content: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      color: '#333',
      fontSize: '24px',
    },
    introduccion: {
      color: '#5a401e',
    },
  };

  React.useEffect(() => {
    document.body.style.margin = styles.body.margin;

    return () => {
      document.body.style.margin = '';
    };
  }, []);

  return (
    <>
      <nav style={styles.navbar}>
        <img src='./siembra.png' alt='Logo' style={{ height: '40px' }} /> {/* Ajusta la altura según lo necesites */}
        <a
          href="#"
          style={styles.navItem}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Home
        </a>
        <a
          href="#"
          style={styles.navItem}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Link
        </a>
        <a
          href="#"
          style={styles.navItem}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Dropdown
        </a>
      </nav>
      <div style={styles.container}>
        <h1 style={styles.header}>Bienvenido a HarvestMate</h1>
        <p style={styles.introduccion} className="introduccion">
          HarvestMate es una herramienta diseñada para ayudarte a evaluar las condiciones de tu terreno. Conoce si las condiciones del suelo, el clima y otros factores son ideales para sembrar. Nuestro objetivo es brindarte información útil para mejorar tus decisiones agrícolas.
        </p>
        <button
          style={styles.buttonPrincipal}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onClick={handleButtonClick}
        >
          ¡Comencemos!
        </button>
      </div>
      <div style={styles.content}>
        <p>Esta es la nueva sección a la que te desplazas.</p>
      </div>
    </>
  );
}

export default WelcomePage;
