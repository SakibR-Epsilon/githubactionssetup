import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTableComponent from './MyTableComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyTableComponent />
    </>
  )
}

export default App
