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

  const handleAdminLogin = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  const imagePath = "file:///C:/Users/91760/Desktop/Tarika-Arun-How-an-employee-database-management-system-improves-your-business.jpg";

  return (
    <div className='full'>
      <Head onAdminLogin={handleAdminLogin} />
      <Body />
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Login</h2>
            <form>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" />
              <br />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
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
  