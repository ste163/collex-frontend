import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import { Collex } from './components/Collex'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Collex />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
