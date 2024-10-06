import React, { useState } from 'react';

function Formulario() {
  const [ubicacion, setUbicacion] = useState({
    nombreCultivo: '',
    direccion: '',
    ciudad: '',
    pais: ''
  });

  const [mensaje, setMensaje] = useState('');
  const [isHovered, setIsHovered] = useState(false);

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
    
    // Aquí puedes enviar los datos a un servidor o hacer otra acción
    console.log('Datos del formulario:', ubicacion);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Formulario de Cultivo</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.subtitle}>Ingrese la ubicación de su cultivo</h2>

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
        <select name="irrigation" style={styles.input}>
          <option value="">Seleccione una opción</option>
          <option value="small">Manzanas</option>
          <option value="medium">Peras</option>
          <option value="large">Nueces</option>
        </select>

        <label style={styles.label}>Tamaño aproximado:</label>
        <select name="size" style={styles.input}>
          <option value="">Seleccione un tamaño</option>
          <option value="small">Pequeño</option>
          <option value="medium">Mediano</option>
          <option value="large">Grande</option>
        </select>

        <label style={styles.label}>Método de riego:</label>
        <select name="irrigationMethod" style={styles.input}>
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
          type="submit"
          style={isHovered ? { ...styles.button, ...styles.buttonHover } : styles.button}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
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
    backgroundColor: '#f7f7f7',
    padding: '20px',
    fontFamily: "'Roboto', sans-serif", // Cambia la fuente a Roboto para un diseño más moderno
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '15px',
    color: '#555',
  },
  form: {
    width: '100%',
    maxWidth: '600px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s', // Añadido para efecto de hover
    ':hover': {
      transform: 'scale(1.02)', // Aumenta el tamaño del formulario al pasar el mouse
    }
  },
  label: {
    fontSize: '1.1rem',
    marginBottom: '5px',
    display: 'block',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s ease',
    ':focus': {
      borderColor: '#007bff', // Cambia el color del borde al enfocar
    },
  },
  button: {
    padding: '10px 20px',
    fontSize: '1.1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease', // Asegúrate de que no haya otros cambios
    display: 'block',
    margin: '20px auto 0',
    boxShadow: 'none', // Evitar cambios en el box-shadow
  },
  buttonHover: {
    backgroundColor: '#0056b3',
    transform: 'scale(1.05)', // Si decides escalar, mantenlo consistente
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Asegúrate de que el cambio no sea drástico
  },
  mensaje: {
    color: 'green',
    fontSize: '1rem',
    marginTop: '10px',
    textAlign: 'center',
  },
};

export default Formulario;
