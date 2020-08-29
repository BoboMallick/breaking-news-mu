import React from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import News from './components/News/News';

function App() {
  return (
    <div>
      <Button color="primary">Hello World</Button>
      <Button variant="contained" color="secondary">
          Secondary
      </Button>
      <News></News>
    </div>
  );
}

export default App;
