import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FormData from './page/formData'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<FormData/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App