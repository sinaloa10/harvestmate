import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables); // Registra las escalas y componentes

const PrecipitationPage = () => {
    const [precipitationData, setPrecipitationData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

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

                // Asegúrate de acceder a PRECTOTCORR
                setPrecipitationData(response.data.properties.parameter.PRECTOTCORR || {});
                setLoading(false);
            } catch (err) {
                console.error('Error al obtener datos de precipitación:', err);
                setError('Error al obtener datos de precipitación.');
                setLoading(false);
            }
        };

        fetchPrecipitationData();
    }, []);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>;

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

    return (
        <div>
            <h2>Datos de Precipitación</h2>
            <Line data={data} />
        </div>
    );
};

export default PrecipitationPage;
