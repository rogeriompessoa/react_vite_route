import { useState } from 'react'

import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Cadastro } from './pages/Cadastro'
import { Sobre } from './pages/Sobre'
import { Contato } from './pages/Contato'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to='/castrado'>cadastro</Link>
            </li>
            <li>
              <Link to='/sobre'>sobre</Link>
            </li>
            <li>
              <Link to='contato'>contato</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/casdastro' element={<Cadastro />} />
          <Route path='/sobre' element={<Sobre/>} />
          <Route path='/contato' element={<Contato/>} />

        </Routes>
        
      </BrowserRouter >
    </>
  )
}

export default App
