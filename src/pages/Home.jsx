import React from 'react';
import { Link } from 'react-router-dom';


export const Home = () => {


  return (
    <div style={{backgroundColor:'black', userSelect:'none',height:'100vh'}}>  
      <div>
      <h1 style={{color:'white'}}>Elije un juego para comenzar</h1>
      </div>
      <div style={{height:100, padding:200}}>
      
      <Link to='Tateti'><button style={{boxShadow:'1px 1px 5px 1px green'}}>Tateti</button></Link>
      <Link to='Memo'><button style={{boxShadow:'1px 1px 5px 1px green'}}>Memo</button></Link>
      <Link to='Generala'><button style={{boxShadow:'1px 1px 5px 1px green'}}>Anotador Generala</button></Link>
     
      </div>
    </div>
  )
}
