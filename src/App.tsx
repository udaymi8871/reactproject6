import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UdayReact from './uday';

function App() {
  const [name, setName] = useState<number>(0)
  return (
    <div>
      <p>Uday</p>
      <UdayReact
        name={name}
        setName={setName}
      />
    </div>
  );
}

export default App;
