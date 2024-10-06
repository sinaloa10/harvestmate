import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar el hook para navegar

function WelcomePage() {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  
  const navigate = useNavigate(); // Definir el hook de navegación

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleMouseDown = () => setIsActive(true);
  const handleMouseUp = () => setIsActive(false);

  const handleButtonClick = () => {
    // Usar navigate en lugar de window.location.href
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
      fontWeight: 'bold',
      textAlign: 'center'
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
      backgroundImage: 'url("./cosecha.jpg")',
      backgroundSize: 'cover',
      color: '#5a401e',
      textAlign: 'center',
      padding: '20px',
      position: 'relative',
      bottom: 0,
      width: '100%',
      fontWeight: 'bold',
    },
    formContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Esto asegura que el contenedor ocupe toda la pantalla
    },
    form: {
      height: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      backgroundColor: '#e8f5e9',
      color: '#333',
      fontSize: '24px',
      padding: '20px',
      width: '300px',
      borderRadius: '8px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    label: {
      marginBottom: '15px',
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      padding: '8px',
      fontSize: '18px',
      marginTop: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '100%',
    },
    submitButton: {
      marginTop: '20px',
      padding: '10px',
      fontSize: '18px',
      color: 'white',
      backgroundColor: '#4caf50',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      width: '100%',
    },
    submitButtonHover: {
      backgroundColor: '#45a049',
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
        <h1 style={styles.header}>Welcome to HarvestMate</h1>
        <p style={styles.introduccion}>
          HarvestMate is a tool designed to help you evaluate the conditions of your land...
        </p>

        <button 
          style={styles.buttonPrincipal}
          onClick={handleButtonClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Get started!
        </button>
      </div>

      <div style={styles.contenido1}>
        <h1>Who are we?</h1>
        <div style={styles.contentContainer}>
          <img src='./siembra.png' alt='Logo' style={styles.image} />
          <p style={{ flex: .8 , textAlign: 'justify'}}>
            We are MCUU, a group of people interested in farmers having an easy and quick tool...
          </p>
        </div>
      </div>

      <div style={styles.content}>
      <h1>Why to prefer HarvestMate?</h1>
      <div style={styles.infoGrid}>
        <div style={styles.infoBox}>
          <h3>Facilitate decision-making</h3>
          <p>For farmers who are not familiar to advanced technology.</p>
        </div>
        <div style={styles.infoBox}>
          <h3>Applicable information</h3>
          <p>Applicable and immediately useful information.</p>
        </div>
        <div style={styles.infoBox}>
          <h3>Personalized follow-up</h3>
          <p>SPersonalized crop tracking, allowing each farmer to organize and monitor different types of crops, with alerts and specific recommendations for each one.</p>
        </div>
        <div style={styles.infoBox}>
          <h3>Planning functions</h3>
          <p>Planning and prediction functions</p>
        </div>
        <div style={styles.infoBox}>
          <h3>Improves the capacity of the harvest control</h3>
          <p>It improves farmers' ability to manage their production more efficiently and tailored to their specific needs, without having to invest in expensive machinery or additional sensor systems.</p>
        </div>
        <div style={styles.infoBox}>
          <h3>Advice</h3>
          <p>Real-time advice on soil status or water yield.</p>
        </div>
      </div>
      </div>
      <h1 style={styles.content}>CROP MONITORING</h1>
      {/* Centrar el formulario */}
      <div style={styles.formContainer}>
        
        <form style={styles.form}>
          <label style={styles.label}>
            Location:
            <input type="text" name="location" style={styles.input} />
          </label>

          <label style={styles.label}>
            Crop:
            <input type="text" name="crop" style={styles.input} />
          </label>

          <label style={styles.label}>
            Aprox size:
            <select name="irrigation" style={styles.input}>
            <option value="">Select an option</option> {/* Opción por defecto */}
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            </select>
          </label>

          <label style={styles.label}>
            Irrigation method:
            <select name="irrigation" style={styles.input}>
            <option value="">Select an option</option> {/* Opción por defecto */}
            <option value="drip">Drip</option>
            <option value="aspersion">aspersion</option>
            </select>
          </label>
          <label style={styles.label}>
           
            irrigation frequency:
            <input type="text" name="frequency" style={styles.input} />
          </label>

          <button 
            type="submit" 
            style={styles.submitButton}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Submit
          </button>
        </form>
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
