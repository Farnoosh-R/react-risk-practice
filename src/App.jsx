import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './pages/Form/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/form' element={<Form />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
