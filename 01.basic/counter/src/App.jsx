import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  //let count = 15     // count is a state variable
  let [count, setCount] = useState(15)
  const valueAdded = () => {
    // console.log('clicked',Math.random()); // so, count value is incremented but it is not reflected in UI
    // count++                               // to fix this, we need to use state(hooks)
    setCount(count+1)
  }
  const valueRemoved = () => {
    setCount(count-1)
  }
  return (
    <>
     <h1>count:- {count}</h1>
     <button onClick={valueAdded}>increment</button>
     {count>0 && <button onClick={valueRemoved}>decrement</button>}
    </>
  )
}

export default App
