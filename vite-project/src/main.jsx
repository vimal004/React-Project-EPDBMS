import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const root = ReactDOM.createRoot(document.querySelector("#root"));

const Button = ({ onClick, label }) => {
  return (
    <button onClick={onClick} id='loginbtn'>{label}</button>
  );
}

const Head = ({ onAdminLogin }) => {
  return (
    <div className="Heading">
      <h1>Welcome to Employee Payroll Database Management System</h1>
      <div className="Heading2">
        <h2>Created using Oracle DB and React</h2>
      </div>
      <Button onClick={onAdminLogin} label={"Admin Login"} />
    </div>
  );
}

const Body = () => {
  // Your body component implementation
}

const Footer = () => {
  // Your footer component implementation
}

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleAdminLogin = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here with username and password state
    console.log('Username:', username);
    console.log('Password:', password);
    // Close modal after handling login
    setShowModal(false);
    // Optionally, reset username and password fields
    setUsername('');
    setPassword('');
  }

  return (
    <div className='full'>
      <Head onAdminLogin={handleAdminLogin} />
      <Body />
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Login</h2>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
              <br />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <br />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

root.render(<App />);
