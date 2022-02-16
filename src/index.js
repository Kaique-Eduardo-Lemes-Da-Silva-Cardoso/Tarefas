import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Info from './Pages/js/Info';
import App from './Pages/js/App';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



ReactDOM.render(
  <Router>
    
    <Routes>
      <Route path="/" element={<App  />} />
      <Route path="/Info/:infoID/:header" element={<Info  />} />
     
    </Routes>
  </Router>,
  document.getElementById('root')
);

