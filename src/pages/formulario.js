import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

function Formulario() {
  const [ubicacion, setUbicacion] = useState({
    nombreCultivo: '',
    direccion: '',
    ciudad: '',
    pais: '',
    latitud: null,
    longitud: null,
  });

  const [mensaje, setMensaje] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate(); // Inicializa el hook useNavigate

  const handleChange = (e) => {
    setUbicacion({
      ...ubicacion,
      [e.target.name]: e.target.value,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje('Ubicación guardada exitosamente.');
    console.log('Datos del formulario:', ubicacion);
    // Redirige a la página de seguimiento después de guardar
    navigate('/pages'); // Redirige a la página de seguimiento
  };

  const obtenerUbicacionActual = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUbicacion((prev) => ({
          ...prev,
          latitud: latitude,
          longitud: longitude,
        }));
      }, (error) => {
        console.error('Error al obtener la ubicación:', error);
        setMensaje('No se pudo obtener la ubicación.');
      });
    } else {
      setMensaje('La geolocalización no es soportada por este navegador.');
    }
  };

  const handleClick = (e) => {
    obtenerUbicacionActual();
    handleSubmit(e); // Pasar el evento aquí.
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Formulario de Cultivo</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h3 style={styles.subtitle}>Ingrese la ubicación de su cultivo</h3>

        <label htmlFor="nombreCultivo" style={styles.label}>Nombre o descripción del cultivo</label>
        <input
          type="text"
          id="nombreCultivo"
          name="nombreCultivo"
          placeholder="Ej. Trigo, Maíz, etc."
          value={ubicacion.nombreCultivo}
          onChange={handleChange}
          style={styles.input}
        />

        <label htmlFor="direccion" style={styles.label}>Dirección</label>
        <input
          type="text"
          id="direccion"
          name="direccion"
          placeholder="Ej. Calle Principal 123"
          value={ubicacion.direccion}
          onChange={handleChange}
          style={styles.input}
        />

        <label htmlFor="ciudad" style={styles.label}>Ciudad</label>
        <input
          type="text"
          id="ciudad"
          name="ciudad"
          placeholder="Ej. Ciudad de México"
          value={ubicacion.ciudad}
          onChange={handleChange}
          style={styles.input}
        />

        <label htmlFor="pais" style={styles.label}>País</label>
        <input
          type="text"
          id="pais"
          name="pais"
          placeholder="Ej. México"
          value={ubicacion.pais}
          onChange={handleChange}
          style={styles.input}
        />

        <label style={styles.label}>Cultivos:</label>
        <select name="irrigation" style={styles.select}>
          <option value="">Seleccione una opción</option>
          <option value="small">Manzanas</option>
          <option value="medium">Peras</option>
          <option value="large">Nueces</option>
        </select>

        <label style={styles.label}>Tamaño aproximado:</label>
        <select name="size" style={styles.select}>
          <option value="">Seleccione un tamaño</option>
          <option value="small">Pequeño</option>
          <option value="medium">Mediano</option>
          <option value="large">Grande</option>
        </select>

        <label style={styles.label}>Método de riego:</label>
        <select name="irrigationMethod" style={styles.select}>
          <option value="">Seleccione una opción</option>
          <option value="drip">Goteo</option>
          <option value="aspersion">Aspersión</option>
        </select>

        <label style={styles.label}>Frecuencia de riego:</label>
        <input
          type="text"
          name="frequency"
          placeholder="Ej. 2 veces por semana"
          style={styles.input}
        />

        <button
          type="button"
          style={isHovered ? { ...styles.button, ...styles.buttonHover } : styles.button}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick} // Usar handleClick aquí
        >
          Guardar ubicación
        </button>

        {mensaje && <p style={styles.mensaje}>{mensaje}</p>}
      </form>
    </div>
  );
}

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#e9ecef',
      padding: '20px',
      fontFamily: "'Roboto', sans-serif",
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '20px',
      color: '#5a401e',
      textAlign: 'center',
      padding: '10px 20px',
      borderRadius: '8px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
      border: '2px solid #5a401e',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    subtitle: {
      fontSize: '1.5rem',
      marginBottom: '15px',
      color: '#5a401e',
    },
    form: {
      width: '100%',
      maxWidth: '600px',
      padding: '30px',
      backgroundColor: '#a78a64',
      borderRadius: '8px',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s',
    },
    label: {
      fontSize: '1.1rem',
      marginBottom: '5px',
      display: 'block',
      color: '#5a401e',
    },
    input: {
      width: '100%',
      padding: '12px',
      fontSize: '1rem',
      borderRadius: '4px',
      border: '1px solid #ced4da',
      marginBottom: '15px',
      boxSizing: 'border-box',
      transition: 'border-color 0.3s ease',
    },
    select: {
      width: '100%',
      padding: '12px',
      fontSize: '1rem',
      borderRadius: '4px',
      border: '1px solid #ced4da',
      marginBottom: '15px',
      boxSizing: 'border-box',
      transition: 'border-color 0.3s ease',
    },
    button: {
      padding: '12px 20px',
      fontSize: '1.1rem',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
      display: 'block',
      margin: '20px auto 0',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
      transform: 'scale(1.05)',
    },
    mensaje: {
      color: '#335a1d',
      fontSize: '1rem',
      marginTop: '10px',
      textAlign: 'center',
      fontWeight: 'bold',
    },
};

export default Formulario;
