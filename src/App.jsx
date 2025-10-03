import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './pages/Form/Form'
import Diagram from './pages/Diagram/Diagram'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/form' element={<Form />}/>
        <Route path='/diagram' element={<Diagram />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
