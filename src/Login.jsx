import React, { useState } from 'react';

const Login = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  return (
    <div style={styles.container}>
      {isLoggedin ? (
        <>
          <h1 style={styles.welcomeMessage}>Welcome User</h1>
          <h2 style={styles.dashboardMessage}>Dashboard Screen</h2>
        </>
      ) : (
        <h1 style={styles.notLoggedInMessage}>Not Logged In</h1>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedin)} style={styles.button}>
        {isLoggedin ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f9',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  welcomeMessage: {
    fontSize: '2.5rem',
    color: '#2b2d42',
    marginBottom: '10px',
  },
  dashboardMessage: {
    fontSize: '1.8rem',
    color: '#4CAF50',
  },
  notLoggedInMessage: {
    fontSize: '2rem',
    color: '#ff6347',
    marginBottom: '20px',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    backgroundColor: '#008CBA',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
};

export default Login;
