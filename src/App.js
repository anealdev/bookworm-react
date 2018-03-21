// Router dispatcher, displays info based on route
import React from 'react';
import { Route } from 'react-router-dom';  //provides browser specific components for routing web apps
//Route is the conditionally shown component based on matching a path to a URL
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";

const App = () => (
  <div className= "ui container">
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
  </div>
);

export default App;
