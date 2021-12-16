import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Signup from './components/Signup'
import Countdowntimer from './components/Countdowntimer'
import Homepage from './components/Homepage'
import Signupsuccess from './components/Signupsuccess'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route path="" element={<Homepage />} />
          <Route path="count_down" element={<Countdowntimer />} />
          <Route path="signup" element={<Signup />} />
          <Route path="success" element={<Signupsuccess />} />
        </Route>          
        

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
