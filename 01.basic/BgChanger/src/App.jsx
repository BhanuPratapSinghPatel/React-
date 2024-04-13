import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('#9cafba');

  return (
    <div className='w-full h-screen  duration-200'
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap gap-4 justify-center bg-white rounded-xl px-4 py-2'>
          <button onClick={() => setColor('red')}
          className='outline-none px-4 py-2 rounded-xl shadow-lg'
          style={{backgroundColor: 'red', color: 'white'}}>Red</button>
           <button onClick={() => setColor('blue')} 
           className='outline-none px-4 py-2 rounded-xl  shadow-lg'
          style={{backgroundColor: 'blue', color: 'white'}}>Blue</button>
           <button onClick={() => setColor('green')}
           className='outline-none px-4 py-2 rounded-xl  shadow-lg'
          style={{backgroundColor: 'green', color: 'white'}}>Green</button>
           <button onClick={() => setColor('yellow')}
           className='outline-none px-4 py-2 rounded-xl  shadow-lg'
          style={{backgroundColor: 'yellow', color: 'white'}}>Yellow</button>
        </div>
      </div>

    </div>
  )
}

export default App
