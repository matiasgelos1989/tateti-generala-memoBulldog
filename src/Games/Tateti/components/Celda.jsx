import React, { useState } from 'react'
import '../style.css';


export const Celda = ({children, updateTablero,  index}) => {

    const handleClick = () => {
          updateTablero(index);

    }

  return (
    <button className='buttonGame'
      onClick={()=> handleClick()}>
        {children}
    </button>
  )
}
