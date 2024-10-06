import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    const handleButtonClick = () => {
        navigate('/formulario');
    };

    const handleScroll = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };

    const styles = {
        body: {
            margin: 0,
            height: '100vh',
            backgroundColor: '#e8f5e9',
        },
        navbar: {
            position: 'fixed',
            backgroundColor: '#6c3c11',
            padding: '10px', // Reducido
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '0px', // Sin margen superior
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '100%',
        },
        navItem: {
            color: '#FFFFFF',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '16px', // Reducido el tamaño de la fuente
            textTransform: 'uppercase',
            letterSpacing: '1px',
        },
        container: {
            textAlign: 'center',
            padding: '50px 10px 10px 10px', // Reducido padding
            backgroundColor: '#e8f5e9',
            height: '80vh', // Ajustado para que todo esté más junto
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
        },
        header: {
            fontSize: '40px', // Reducido
            color: '#5a401e',
            marginBottom: '10px', // Menos espacio entre el título y el texto
            fontWeight: 'bold',
            textAlign: 'center',
        },
        text: {
            fontSize: '18px', // Reducido
            color: '#000',
            marginBottom: '10px', // Menos separación
            fontWeight: 'bold',
        },
        buttonPrincipal: {
            padding: '10px 30px', // Reducido
            borderRadius: '50px',
            border: '0',
            backgroundColor: isHovered || isActive ? '#6c3c11' : '#2e7d32',
            boxShadow: isHovered ? '#c7612e 0px 7px 29px 0px' : 'black 0px 0px 8px',
            letterSpacing: isHovered || isActive ? '3px' : '1.5px',
            textTransform: 'uppercase',
            fontSize: '14px',
            transition: isActive ? '100ms' : 'all 0.5s ease',
            color: isHovered || isActive ? '#fff' : '#fff',
            transform: isActive ? 'translateY(10px)' : 'none',
            fontWeight: 'bold',
        },
        contenido1: {
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#e8f5e9',
            color: '#333',
            fontSize: '22px', // Reducido
            padding: '50px 0', // Menos padding
        },
        contentContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '80%', // Aumentado para reducir espacio lateral
            marginTop: '10px', // Reducido
        },
        infoGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '15px', // Menor separación entre columnas
            padding: '20px 10px', // Reducido
        },
        infoBox: {
            border: '1px solid #ccc',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '15px', // Reducido
            backgroundColor: '#f9f9f9',
            transition: 'transform 0.2s',
        },
        heading: {
            margin: '0 0 5px', // Reducido
            fontSize: '16px', // Reducido
            color: '#333',
        },
        paragraph: {
            margin: '0',
            fontSize: '14px',
            color: '#666',
        },
        testimonials: {
            backgroundColor: '#e8f5e9',
            padding: '30px 0', // Menor separación
            textAlign: 'center',
            fontSize: '18px', // Reducido
            fontStyle: 'italic',
            color: '#555',
        },
        testimonialQuote: {
            fontFamily: "'Open Sans', sans-serif",
            marginBottom: '15px', // Reducido
            paddingLeft: '15px', // Reducido
            borderLeft: '5px solid #6c3c11',
        },
        footer: {
            backgroundImage: 'url("./cosecha.jpg")',
            backgroundSize: 'cover',
            color: '#5a401e',
            textAlign: 'center',
            padding: '15px', // Reducido
            position: 'relative',
            bottom: 0,
            width: '100%',
            fontWeight: 'bold',
        }
    };

    useEffect(() => {
        document.body.style.margin = styles.body.margin;
        document.body.style.height = styles.body.height;
        document.body.style.backgroundColor = styles.body.backgroundColor;

        return () => {
            document.body.style.margin = '';
            document.body.style.height = '';
            document.body.style.backgroundColor = '';
        };
    }, []);

    return (
        <>
            <nav style={styles.navbar}>
                <img src='./siembra.png' alt='Logo' style={{ height: '40px' }} />
                <a href="#" style={styles.navItem}>Home</a>
                <a href="#" style={styles.navItem}>Link</a>
                <a href="#" style={styles.navItem}>Dropdown</a>
            </nav>

            <div style={styles.container}>
                <h1 style={styles.header}>Welcome to HarvestMate</h1>
                <p style={styles.text}>
                    HarvestMate is a tool designed to help you evaluate the conditions of your land.
                  
                </p>
                <p style={styles.text}>Easy-to-use and accessible tool, even for users with little technological experience.</p>
            </div>

            <div style={styles.contenido1}>
                <h1>Who are we?</h1>
                <div style={styles.contentContainer}>
                    <p style={{ flex: .8, textAlign: 'justify' }}>
                        We are MCUU, a group of people interested in farmers having an easy and quick tool to improve the way they keep their crops.
                    </p>
                    <img src='./granjero.png' alt='Granjero' />
                </div>
            </div>
                
            <div>
                <h1 style={styles.header}>Why prefer HarvestMate?</h1>
                <div style={styles.infoGrid}>
                    <div style={styles.infoBox}>
                        <h3 style={styles.heading}>Facilitate decision-making</h3>
                        <p style={styles.paragraph}>For farmers who are not familiar with advanced technology.</p>
                    </div>
                    <div style={styles.infoBox}>
                        <h3 style={styles.heading}>Applicable information</h3>
                        <p style={styles.paragraph}>Applicable and immediately useful information.</p>
                    </div>
                    <div style={styles.infoBox}>
                        <h3 style={styles.heading}>Personalized follow-up</h3>
                        <p style={styles.paragraph}>Personalized crop tracking, allowing each farmer to organize and monitor different types of crops, with alerts and specific recommendations for each one.</p>
                    </div>
                    <div style={styles.infoBox}>
                        <h3 style={styles.heading}>Planning functions</h3>
                        <p style={styles.paragraph}>Planning and prediction functions.</p>
                    </div>
                    <div style={styles.infoBox}>
                        <h3 style={styles.heading}>Improves the capacity of harvest control</h3>
                        <p style={styles.paragraph}>It improves farmers' ability to manage their production more efficiently and tailored to their specific needs, without having to invest in expensive machinery or additional sensor systems.</p>
                    </div>
                    <div style={styles.infoBox}>
                        <h3 style={styles.heading}>Advice</h3>
                        <p style={styles.paragraph}>Real-time advice on soil status or water yield.</p>
                    </div>
                </div>
            </div>

            <div style={styles.testimonials}>
                <h2>What our users say</h2>
                <blockquote style={styles.testimonialQuote}>
                    "Thanks to HarvestMate, I've increased my yield by 20%! It really works!" – John, Farmer
                </blockquote>
                <blockquote style={styles.testimonialQuote}>
                    "This tool is a game-changer for small farmers." – Maria, Organic Grower
                </blockquote>
                <button
                    style={styles.buttonPrincipal}
                    onClick={handleButtonClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Get started!
                </button>
            </div>

            <footer style={styles.footer}>
                <p>&copy; 2024 HarvestMate. Todos los derechos reservados.</p>
                <p>Contáctanos: info@harvestmate.com</p>
            </footer>
        </>
    );
}

export default WelcomePage;
