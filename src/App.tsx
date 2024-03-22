import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import Profile from './components/Profile/Profile';
import Work from './components/Work';
import Projects from './components/Projects';

function App() {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <Profile />
      <Work />
      <Projects />
    </div>
  );
}

export default App;

