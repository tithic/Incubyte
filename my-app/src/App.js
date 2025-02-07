import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState('');
  const [value,setValue] = useState(null);
  function add() {
if(number==="")
  setValue(0)
  }
  return (
    <div className="App">
     <header>Calculator</header>
      <input type="text" onChange={(e) => setNumber(e.target.value)} placeholder="Enter value" />
      <button onClick={()=>add()}>Submit</button>
      <p>{value}</p>
    </div>
  );
}

export default App;
