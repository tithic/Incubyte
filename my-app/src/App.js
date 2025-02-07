import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <header>Calculator</header>
      <input type="text" onChange={(e) => console.log(e.target.value)} placeholder="Enter value"/>
      <button onClick={()=>console.log('clicked')}>Submit</button>
    </div>
  );
}

export default App;
