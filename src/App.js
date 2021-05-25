import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Main from './components/main/Main';
import RouterTemplate from './components/RouterTemplate';
import ScrollButton from './components/common/ScrollButton';


function App() {
  return (
    <Router>
      <div>
        <Main />
        <RouterTemplate />
        <ScrollButton />
      </div>
    </Router>
  )
}

export default App;
