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
        navigate('/formulario'); // Navegar sin obtener la ubicación
    };

    const handleScroll = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth' // Desplazamiento suave
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
            padding: '15px',
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '5px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '100%',
        },
        navItem: {
            color: '#FFFFFF',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '18px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
        },
        container: {
            textAlign: 'center',
            padding: '100px 20px 20px 20px',
            backgroundColor: '#e8f5e9', 
            height: '100vh',
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
            width: '70%',
            marginTop: '20px',
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
                <a
                    href="#"
                    style={styles.navItem}
                >
                    Home
                </a>
                <a
                    href="#"
                    style={styles.navItem}
                >
                    Link
                </a>
                <a
                    href="#"
                    style={styles.navItem}
                >
                    Dropdown
                </a>
            </nav>

            <div style={styles.container}>
                <h1 style={styles.header}>Welcome to HarvestMate</h1>
                <p style={styles.text}>
                    HarvestMate is a tool designed to help you evaluate the conditions of your land...
                </p>
            </div>

            <div style={styles.contenido1}>
                <h1>HarvestMate</h1>
                <div style={styles.contentContainer}>
                    <p style={{ flex: .8, textAlign: 'justify', marginBottom: '500px' }}>
                        <h1>Who are we?</h1>
                        We are MCUU, a group of people interested in farmers having an easy and quick tool...
                    </p>
                </div>

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
                <p>HarvestMate © 2024. All rights reserved.</p>
            </footer>
        </>
    );
}

export default WelcomePage;
