import React, { useState } from 'react';

const Bulb = () => {
  const [isBulbOn, setIsBulbOn] = useState(false);

  const toggleBulb = () => {
    setIsBulbOn(!isBulbOn);
  };

  return (
    <div style={styles.container}>
    <img 
      src={isBulbOn 
        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_yeFIQDdMlzWudk9L0E2e2qjLpEZ3Ht5VSg&s" 
        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1s4yl2K2TkwwJ7-Oa4Y3WdxYwIPSnMD-MA&s"} 
      style={{ ...styles.bulbImage, ...(isBulbOn ? styles.bulbImageHover : {}) }} 
      alt="Bulb"
    />
    
    <button 
      onClick={toggleBulb} 
      style={{
        ...styles.button, 
        ...(isBulbOn ? styles.buttonHover : {})
      }}
    >
      Toggle Bulb
    </button>

    <p style={styles.statusText}>{isBulbOn ? "Bulb On" : "Bulb Off"}</p>
  </div>
);
};



const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30px',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '350px',
    margin: 'auto',
  },
  bulbImage: {
    width: '150px',
    height: '150px',
    transition: 'transform 0.3s ease',
  },
  bulbImageHover: {
    transform: 'scale(1.1)', // Adds zoom effect when hovering
  },
  button: {
    marginTop: '20px',
    padding: '12px 25px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    transition: 'background-color 0.3s, transform 0.3s',
    width: '100%',
    maxWidth: '200px',
  },
  buttonHover: {
    backgroundColor: '#45a049', // Slightly darker green on hover
    transform: 'scale(1.05)', // Adds a scaling effect when hovered
  },
  statusText: {
    fontSize: '1.2rem',
    marginTop: '15px',
    color: '#333',
    fontWeight: '500',
  },
};

export default Bulb;
