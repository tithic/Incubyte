import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState('');
  const [value,setValue] = useState('');
 const[negetiveNumber,setNegetiveNumber]= useState('')
 
  function add() {
    /** If user clicks on submit or "",returns 0 */
    if(number==="")
      setValue('0')
    else{
      let nums= addNumber(number)
     
      setValue( nums.toString())
    }
      }

      function addNumber(num) {
        let ret=0
        let retNum='0'
       for(let n=0;n<num.length ; n++){
        if(num[n].match(/[0-9]/) ){ 
          /** Extracting the number */
          retNum= retNum+num[n] 

          /** Number greater than 1000 is ignored */
          if(retNum>1000) retNum=0

        } else 
        if(num[n+1]!==undefined && (num[n]==='-' && num[n+1].match(/[0-9]/)) ){
          //Negetive number not allowed
          setNegetiveNumber(negetiveNumber+','+num[n]+num[n+1])
         num= num.replace(num[n]+num[n+1],'')
        }
          else{
          /** if it is not a number add the previous stored number */
          ret=ret+parseInt(retNum)
          retNum='0'
        }
               }
       if(retNum!==''){
        ret=ret+parseInt(retNum)
      }
       return ret
      }
  return (
    <div className="App">
     <header>Calculator</header>
      <textarea type="text" onChange={(e) => setNumber(e.target.value)} placeholder="Enter value" />
      <button onClick={()=>add()}>Submit</button>
      <p>{`Result: ${value}`}</p>
      <p>{negetiveNumber!==''?`Negetive number not allowed: ${negetiveNumber}`:''}</p>
    </div>
  );
}

export default App;
