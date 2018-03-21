import React from 'react';
import { Link } from "react-router-dom"; //Link is your replacement for anchor tags
const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <Link to="/login">Login</Link>
  </div>
);

export default HomePage;
