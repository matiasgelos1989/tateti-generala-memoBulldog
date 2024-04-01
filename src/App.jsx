// import { useEffect, useState } from 'react'
import './App.css';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { Tateti } from './Games/Tateti/page/Tateti';
import { Memo } from './Games/Memo/page/Memo';
import { Generala } from './Games/anotadorGenerala/Generala';

function App() {

  

  return (
    <Routes>
        <Route path='/*' element={<div><a href='http://localhost:5173'>Ir al inicio</a></div> } />
        <Route path='/'  element={<Home />} />
        <Route path='Tateti'  element={<Tateti />} />
        <Route path='Memo'  element={<Memo />} />
        <Route path='Generala'  element={<Generala />} />
        
    </Routes>
  )
}

export default App
