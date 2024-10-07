import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const Seguimiento = () => {
  const [activeTab, setActiveTab] = useState('info');
  const [precipitationData, setPrecipitationData] = useState({});
  const [cropInfo, setCropInfo] = useState(null); 
  const [loading, setLoading] = useState(false); // Cambiado a false para permitir mostrar la UI
  const [error, setError] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (activeTab === 'info') {
      fetchCropData();
    }
  }, [activeTab]);

  const fetchCropData = async () => {
    setLoading(true); 
    setError(null);

    try {
      const response = await axios.get('http://localhost:3001/api/chatbot-crop', {
        params: {
          lat: 28.731373,
          lon: -106.136228,
          date: '2024-10-06',
        },
      });
      setCropInfo(response.data);  
    } catch (error) {
      console.error('Error fetching crop data:', error);
      setError('Could not fetch crop data, showing offline version.');
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    const fetchPrecipitationData = async () => {
      const longitude = -99.1332;
      const latitude = 19.4326;
      const start = '20231101';
      const end = '20231111';
      
      try {
        const response = await axios.get(`http://localhost:3001/api/precipitation`, {
          params: { longitude, latitude, start, end }
        });

        setPrecipitationData(response.data.properties.parameter.PRECTOTCORR || {});
      } catch (err) {
        console.error('Error fetching precipitation data:', err);
        setError('Could not fetch precipitation data, showing offline version.');
      }
    };

    fetchPrecipitationData();
  }, []);

  const renderSemaforo = (urgencia) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {(() => {
          switch (urgencia) {
            case 'rojo':
              return <span style={{ color: 'red' }}>🔴</span>;
            case 'amarillo':
              return <span style={{ color: 'orange' }}>🟡</span>;
            case 'verde':
              return <span style={{ color: 'green' }}>🟢</span>;
            default:
              return null;
          }
        })()}
      </div>
    );
  };

  const labels = precipitationData && Object.keys(precipitationData);
  const dataValues = precipitationData && Object.values(precipitationData);

  const data = {
    labels: labels || [],
    datasets: [
      {
        label: 'Precipitación (mm)',
        data: dataValues || [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1,
      },
    ],
  };

  const actividades = [
    { nombre: 'Crop Health', urgencia: 'verde' },
    { nombre: 'Land Use Changes', urgencia: 'verde' },
    { nombre: 'Soil Moisture', urgencia: 'amarillo' },
    { nombre: 'Soil Erosion Monitoring', urgencia: 'amarillo' },
    { nombre: 'Crop Yield Estimation', urgencia: 'rojo' },
    { nombre: 'Water Quality', urgencia: 'rojo' },
    { nombre: 'Drought', urgencia: 'rojo' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px', backgroundColor: '#e8f5e9', minHeight: '100vh' }}>
      <div style={{ backgroundColor: '#6c3c11', width: '600px', padding: '25px', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', marginTop: '20px', color: '#FFFFFF' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
          <button
            onClick={() => handleTabChange('info')}
            style={{ backgroundColor: activeTab === 'info' ? '#CAD2C5' : '#8e7048', color: activeTab === 'info' ? '#354F52' : '#FFFFFF', padding: '12px 30px', borderRadius: '8px', cursor: 'pointer', fontWeight: '500' }}
          >
            Info
          </button>
          <button
            onClick={() => handleTabChange('monitoreo')}
            style={{ backgroundColor: activeTab === 'monitoreo' ? '#CAD2C5' : '#8e7048', color: activeTab === 'monitoreo' ? '#354F52' : '#FFFFFF', padding: '12px 30px', borderRadius: '8px', cursor: 'pointer', fontWeight: '500' }}
          >
            Monitoreo de actividades
          </button>
          <button
            onClick={() => handleTabChange('graficas')}
            style={{ backgroundColor: activeTab === 'graficas' ? '#CAD2C5' : '#8e7048', color: activeTab === 'graficas' ? '#354F52' : '#FFFFFF', padding: '12px 30px', borderRadius: '8px', cursor: 'pointer', fontWeight: '500' }}
          >
            Gráficas
          </button>
        </div>

        <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '10px', color: '#354F52', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          {activeTab === 'info' && (
            <div>
              {error && <p>{error}</p>}
              {cropInfo ? (
                <>
                  <p>Temperature: {cropInfo.weather.temperature}</p>
                  <p>Precipitation: {cropInfo.weather.precipitation}</p>
                  <p>Wind Speed: {cropInfo.weather.windSpeed}</p>
                  <p>Crop recommendation: {cropInfo.suggestion}</p>
                </>
              ) : (
                <p>No crop data available</p>
              )}
            </div>
          )}

          {activeTab === 'monitoreo' && (
            <div>
              <h3>Monitoreo de Actividades</h3>
              <ul>
                {actividades.map((actividad, index) => (
                  <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{actividad.nombre}</span>
                    {renderSemaforo(actividad.urgencia)}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'graficas' && (
            <div>
              <h2>Datos de Precipitación</h2>
              {labels && dataValues ? <Line data={data} /> : <p>No precipitation data available</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Seguimiento;
