import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo1 from './Todo1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Todo1/>
    </div>
    </>
  )
}

export default App
