import React, { useState } from 'react';

function WelcomePage() {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleMouseDown = () => setIsActive(true);
  const handleMouseUp = () => setIsActive(false);

  const handleButtonClick = () => {
    // Redirigir a otra página
    window.location.href = '/otra-pagina'; // Aquí puedes poner la URL a la que quieres redirigir
  };

  const styles = {
    body: {
      margin: 0,
    },
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#5a401e',
      padding: '10px 20px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
    },
    navItem: {
      color: 'white',
      textDecoration: 'none',
      padding: '10px 15px',
      borderRadius: '5px',
      transition: 'background-color 0.3s',
    },
    navItemHover: {
      backgroundColor: '#6c3c11',
    },
    container: {
      textAlign: 'center',
      padding: '100px 20px 20px 20px',
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
      color: isHovered || isActive ? '#fff' : '#fff',
      transform: isActive ? 'translateY(10px)' : 'none',
      fontWeight: 'bold',
    },
    content: {
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#e8f5e9',
      color: '#333',
      fontSize: '24px',
      padding: '20px 0',
    },
    contenido1: {
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#e8f5e9',
      color: '#333',
      fontSize: '24px',
      padding: '200px 0',
    },
    contentContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '90%',
      marginTop: '20px',
    },
    image: {
      width: '150px',
      height: 'auto',
    },
    introduccion: {
      color: '#5a401e',
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
      padding: '20px',
      width: '80%',
      marginTop: '40px',
    },
    infoBox: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
      padding: '20px',
      textAlign: 'center',
      color: '#5a401e',
      fontSize: '16px',
    },
    scrollButton: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: '#2e7d32',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      cursor: 'pointer',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
      fontSize: '18px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'background-color 0.3s',
    },
    scrollButtonHover: {
      backgroundColor: '#6c3c11',
    },
    footer: {
      backgroundImage: 'url("./footer.jpg")',
      backgroundSize: 'cover',
      color: '#5a401e',
      textAlign: 'center',
      padding: '20px',
      position: 'relative',
      bottom: 0,
      width: '100%',
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
        <img src='./siembra.png' alt='Logo' style={{ height: '40px' }} />
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
          onClick={handleButtonClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          ¡Comencemos!
        </button>
        
      </div >
      <div style={styles.contenido1}>
        <h1>¿Quienes somos?</h1>
        <div className='contenido1' style={styles.contentContainer}>
          <img src='./siembra.png' alt='Logo' style={styles.image} />
          <p style={{ flex: .8 , textAlign: 'justify'}}>Somos MCUU, un grupo de personas interesadas en que los agricultores tengan una herramienta fácil y rápida de usar para mejorar su trabajo y hacerlo más efectivo.</p>
        </div>
      </div>
      
      <div style={styles.content}>
      <h1>¿Por qué usar HarvestMate?</h1>
      <div style={styles.infoGrid}>
        <div style={styles.infoBox}>
          <h3>Facilitar la toma de decisiones</h3>
          <p>Para los agricultores que no están acostumbrados a tecnología avanzada.</p>
        </div>
        <div style={styles.infoBox}>
          <h3>Información aplicable</h3>
          <p>Información aplicable y útil de inmediato.</p>
        </div>
        <div style={styles.infoBox}>
          <h3>Seguimiento personalizado</h3>
          <p>Seguimiento personalizado de cultivos, permitiendo a cada agricultor organizar y monitorear distintos tipos de cultivo, con alertas y recomendaciones específicas para cada uno.</p>
        </div>
        <div style={styles.infoBox}>
          <h3>Funciones de planificación</h3>
          <p>Funciones de planificación y predicción.</p>
        </div>
        <div style={styles.infoBox}>
          <h3>Mejora la capacidad de manejo</h3>
          <p>Mejora la capacidad de los agricultores de manejar su producción de manera más eficiente y adaptada a sus necesidades específicas, sin tener que invertir en maquinaria costosa o sistemas de sensores adicionales.</p>
        </div>
        <div style={styles.infoBox}>
          <h3>Asesoramiento</h3>
          <p>Asesoramiento en tiempo real sobre estado del suelo o rendimiento del agua.</p>
        </div>
      </div>
      </div>
      <button
        style={styles.scrollButton}
        onClick={handleButtonClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        ↓
      </button>
      <footer style={styles.footer}>
        <p>&copy; 2024 HarvestMate. Todos los derechos reservados.</p>
        <p>Contáctanos: info@harvestmate.com</p>
      </footer>
    </>
  );
}

export default WelcomePage;
