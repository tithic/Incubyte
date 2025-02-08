import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState('');
  const [value,setValue] = useState('');
 const[negetiveNumber,setNegetiveNumber]= useState('')

 
  const add=()=> {
        /** If user clicks on submit or "",returns 0 */
    if(number==="")
      setValue('0')
    else{
      let nums= addNumber(number)
      setValue( nums.value.toString())
      setNegetiveNumber(nums.negetiveNumber)
    }
      }

      const addNumber=(num) =>{
       let negetive=[]
        let ret=0
        let retNum='0'
        let returnVal={}
       for(let n=0;n<num.length ; n++){
        if(num[n].match(/[0-9]/) ){ 
          /** Extracting the number */
          retNum= retNum+num[n] 

          /** Number greater than 1000 is ignored */
          if(retNum>1000) retNum=0

        } else 
        if(num[n+1]!==undefined && (num[n]==='-' && num[n+1].match(/[0-9]/)) ){
         let p=''
          //Negetive number not allowed
            p= `${num[n]}${num[n+1]}`
         
          negetive.push(p)
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
      returnVal.value=ret
      returnVal.negetiveNumber=negetive
       return returnVal
      }
  return (
    <div className="App">
     <header>Calculator</header>
      <textarea type="text" onChange={(e) => setNumber(e.target.value)} value={number} placeholder="Enter value" />
      <button onClick={()=>add()}>Submit</button>
      <p>{`Result: ${value}`}</p>
      <p>{negetiveNumber!==''?`Negetive number not allowed: ${negetiveNumber}`:''}</p>
    </div>
  );
}

export default App;
