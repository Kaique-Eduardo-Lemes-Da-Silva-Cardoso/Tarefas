import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Info from './Pages/js/Info';
import App from './Pages/js/App';
import Sign_Up from './Pages/js/Sign_Up';
import Sign_In from './Pages/js/Sign_In';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



ReactDOM.render(
  <Router>
    
    <Routes>
      <Route path="/" element={<Sign_In  />} />
      <Route path="/Sign_Up" element={<Sign_Up  />} />
      <Route path='/task' element={<App/>}/>
      <Route path="/Info/:infoID/:header" element={<Info  />} />
     
    </Routes>
  </Router>,
  document.getElementById('root')
);

