import React from 'react';
import './App.css';
import Calendar from './Calendar';

function App() {
  // get current year
  const year = new Date().getFullYear();
  return (
    <div className="App">
      <Calendar year={year} compact={false} />
    </div>
  );
}

export default App;
