import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

export const Home = () => {


  return (
    <div style={{backgroundColor:'black', userSelect:'none',height:'100vh', alignContent:'center'}}>  
      <div>
      <h1 style={{color:'white',padding:'50px', fontFamily:'monospace'}}>Elije un juego para comenzar</h1>
      </div>
      <div>
      
      <Link id='Link'
      style={{
        borderRadius: '20em 0em  0px 90px',
        height: '80px',
        border: 'none',
        outline:'none',
        // margin: '20px',
        padding: '15px',
        backgroundColor: 'lightblue',  
        cursor: 'pointer',
        // boxShadow: '1px 1px 8px 2px yellow',
        }}

     to='Tateti'><button className='inicialButton'>TA TE TI</button></Link>
      <Link id='Link'
      style={{
        height: '80px',
        borderLeft: '2px solid white',
        borderRight: '2px solid white',
        outline:'none',
        // margin: '20px',
        padding: '15px',
        backgroundColor: 'lightblue',  
        cursor: 'pointer',
        // boxShadow: '1px 1px 8px 2px yellow',
        
        }}

         to='Memo'><button className='inicialButton'>MEMO</button></Link>
      <Link id='Link'
      style={{
        borderRadius: '0px 90px  20em 0px',
        height: '80px',
        border: 'none',
        outline:'none',
        // margin: '20px',
        padding: '15px',
        backgroundColor: 'lightblue',  
        cursor: 'pointer',
        // boxShadow: '1px 1px 8px 2px yellow',

        }}

         to='Generala'><button className='inicialButton'>GENERALA</button></Link>
     
      </div>
    </div>
  )
}
