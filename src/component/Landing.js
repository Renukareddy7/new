import { Button } from '@material-ui/core'
import React from 'react'
import './Landing.css';
import { Link } from 'react-router-dom';

const Landing = () => {
  
  
 
 
  return (
    <div className="container">
      <div>
        <span>logo </span>
      </div>

      <div className="header">
        <h2>STOCK MANAGEMENT</h2>
      </div>

      <div className="auth">
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing
