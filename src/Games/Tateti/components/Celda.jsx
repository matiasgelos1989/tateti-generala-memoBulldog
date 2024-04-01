import React, { useState } from 'react'
import '../style.css';


export const Celda = ({children, updateTablero,  index}) => {

    const handleClick = () => {
          updateTablero(index);

    }

  return (
    <button className='button'
      onClick={()=> handleClick()}>
        {children}
    </button>
  )
}
