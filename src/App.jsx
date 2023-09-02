import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  const increaseCount = () => {
    setCounter(counter + 1);
  
  };

  const decCount = ()=>{
    setCounter(counter-1)
  
    
  }

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button className='button button1' onClick={increaseCount} >Increase the value of counter <br/><span>+</span></button>
      
      <button className='button button2' onClick={decCount} >Decrease the value of counter<br/><span>-</span></button>
    </div>
  )
}


export default App
