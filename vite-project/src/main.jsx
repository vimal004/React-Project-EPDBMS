import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const root = ReactDOM.createRoot(document.querySelector("#root"));

const Button=({propname})=>{
  return (
    <button id='loginbtn'>{propname} {propname.lol}</button>
  );
}

const Head = () => {
  return (
    <div className="Heading">
      <h1>Welcome to Employee Payroll Database Management System</h1>
      <div className="Heading2">
        <h2>Created using Oracle DB and React</h2>
      </div>
      <Button propname={"Admin Login"}/>
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
  const imagePath = "file:///C:/Users/91760/Desktop/Tarika-Arun-How-an-employee-database-management-system-improves-your-business.jpg";
  
  return (
    <div className='full'>
      <Head />
      <Body />
    </div>
  );
}

root.render(<App />);

