import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importa axios

const Seguimiento = () => {
  const [activeTab, setActiveTab] = useState('info');
  const [location, setLocation] = useState('Cargando ubicación...');

  // Función para cambiar la pestaña activa
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Función para obtener la ubicación
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          // Llamada a la API de Nominatim para obtener la ubicación
          try {
            const response = await axios.get(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const address = response.data.display_name;
            setLocation(address); // Actualiza el estado con el nombre de la ubicación
          } catch (error) {
            setLocation('Error al obtener el nombre de la ubicación');
            console.error('Error fetching location:', error);
          }
        },
        () => {
          setLocation('No se pudo obtener la ubicación');
        }
      );
    } else {
      setLocation('Geolocalización no soportada en este navegador.');
    }
  };

  // Obtener la ubicación cuando el componente se monta
  useEffect(() => {
    getLocation();
  }, []);

  // Estilos en línea
  const styles = {
    seguimientoContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '20px',
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: '#e8f5e9', // Aplicar el color de fondo
      minHeight: '100vh', // Asegurar que cubra toda la altura de la ventana
      padding: '20px', // Añadir padding para evitar que el contenido quede pegado al borde
    },
    navbar: {
      backgroundColor: '#6c3c11',
      padding: '15px',
      display: 'flex',
      justifyContent: 'space-around',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '100%',
    },
    navbarItem: {
      color: '#FFFFFF',
      fontWeight: '600',
      cursor: 'pointer',
      fontSize: '18px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    seguimientoContent: {
      backgroundColor: '#6c3c11',
      width: '600px',
      padding: '25px',
      borderRadius: '12px',
      position: 'relative',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
      marginTop: '20px',
      color: '#FFFFFF',
    },
    tabMenu: {
      display: 'flex',
      justifyContent: 'space-around',
      marginBottom: '20px',
    },
    tabButton: {
      backgroundColor: '#8e7048',
      border: 'none',
      padding: '12px 30px',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: '500',
      color: '#FFFFFF',
      fontSize: '16px',
      transition: 'background-color 0.3s ease',
    },
    tabButtonActive: {
      backgroundColor: '#CAD2C5',
      color: '#354F52',
    },
    tabContent: {
      backgroundColor: '#FFFFFF',
      padding: '20px',
      borderRadius: '10px',
      textAlign: 'center',
      color: '#354F52',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'opacity 0.3s ease',
    },
    navigationArrows: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
    },
    arrowButton: {
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '28px',
      cursor: 'pointer',
      color: '#FFFFFF',
      transition: 'color 0.3s ease',
    },
    arrowButtonHover: {
      color: '#CAD2C5',
    },
  };

  return (
    <div style={styles.seguimientoContainer}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px' }}>
          <li style={styles.navbarItem}>Home</li>
          <li style={styles.navbarItem}>Shop</li>
          <li style={styles.navbarItem}>Discount</li>
          <li style={styles.navbarItem}>Product</li>
          <li style={styles.navbarItem}>Login</li>
        </ul>
      </nav>

      {/* Contenedor de seguimiento */}
      <div style={styles.seguimientoContent}>
        {/* Pestañas */}
        <div style={styles.tabMenu}>
          <button
            onClick={() => handleTabChange('info')}
            style={{
              ...styles.tabButton,
              ...(activeTab === 'info' ? styles.tabButtonActive : {}),
            }}
          >
            Info
          </button>
          <button
            onClick={() => handleTabChange('calendario')}
            style={{
              ...styles.tabButton,
              ...(activeTab === 'calendario' ? styles.tabButtonActive : {}),
            }}
          >
            Calendario
          </button>
          <button
            onClick={() => handleTabChange('graficas')}
            style={{
              ...styles.tabButton,
              ...(activeTab === 'graficas' ? styles.tabButtonActive : {}),
            }}
          >
            Gráficas
          </button>
        </div>

        {/* Contenido de la pestaña activa */}
        <div style={styles.tabContent}>
          {activeTab === 'info' && (
            <div className="tab-panel">
              <p>Tu cultivo se presenta...</p>
              <p>Ubicación: {location}</p> {/* Mostrar el nombre de la ubicación obtenida */}
              <p>El suelo recomendado: djksiwdukwemkne</p>
              <p>El riego es: kehiweuwh, se recomienda keduwwjkjknedn</p>
            </div>
          )}

          {activeTab === 'calendario' && (
            <div className="tab-panel">
              <p>Aquí puedes mostrar el calendario...</p>
            </div>
          )}

          {activeTab === 'graficas' && (
            <div className="tab-panel">
              <p>Aquí puedes mostrar las gráficas...</p>
            </div>
          )}
        </div>

        {/* Flechas de navegación (izquierda y derecha) */}
        <div style={styles.navigationArrows}>
          <button style={styles.arrowButton} className="arrow left-arrow">
            &lt;
          </button>
          <button style={styles.arrowButton} className="arrow right-arrow">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Seguimiento;
