import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [cont, setCont] = useState(0)

  function handleClick(){
    setCont(cont + 1)
  }

  return (
    <>
      <div id='container'>
        <div className='central'>
          <h1>Clique no botão</h1>
          <button onClick={handleClick}>Clique aqui</button>
        </div>

        <div className='central'>
          {cont}
        </div>
      </div>
    </>
  )
}

export default App
