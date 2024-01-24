// LoginForm.js
import React, { useState } from 'react';
import { loginCustomer } from '../services/api';

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      setSuccessMessage("");
      return;
    }

    try {
      const response = await loginCustomer({
        email: email,
        password: password,
      });

      if (response.status) {
        console.log("Login successful");
        setError("");
        setSuccessMessage("Login Successful!!");
        onLoginSuccess();
      } else {
        setError("Invalid email or password");
        setSuccessMessage("");
      }
    } catch (error) {
      console.error('Error during login API request:', error);
      setError("Failed to login. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div style={styles.container}>
     {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
      <h1 style={styles.heading}>Login</h1>
      <form onSubmit={handleLogin} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        {error && <p style={styles.errorMessage}>{error}</p>}
        {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    marginTop: "100px",
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '3px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 15px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '3px',
  },
  errorMessage: {
    color: '#dc3545',
    marginTop: '10px',
    textAlign: 'center',
  },
};

export default LoginForm;
