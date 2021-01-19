import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Lexicon from "./Lexicon"
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Lexicon />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
