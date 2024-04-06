import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cards } from '../components/Cards';
import '../components/Memo.css'

export const Memo = () => {
const navigate = useNavigate();

const handleVolver = () => {
  navigate('/')
}


  return (
    <div style={{backgroundColor:'black',height:'100vh', alignContent:'center'}}>
     <div style={{backgroundColor:'black'}}> 
      <Cards />
      </div>
    <div style={{backgroundColor:'black'}}>
      {/* <button style={{margin:'10px'}}> Comenzar </button> */}
      <button className='buttonVolver' onClick={handleVolver}>Volver al inicio</button>
    </div>

    </div>
  )
}
