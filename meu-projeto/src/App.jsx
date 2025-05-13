import { useState } from 'react'
import './App.css'



function App() {
  const [counter, setCounter] = useState(0)

  function handleClick(){
    setCounter(counter + 1)
  }

  return(
    <>
      <h1 id='title'>Praticando React</h1>

      <div className='container'>
        <button onClick={handleClick}>Click here</button>
        <h2>You clicked on the button {counter} times ... </h2>
        <button onClick={ () => setCounter(0)}>Click here to reset</button>
      </div>
    </>
  )
}

export default App
