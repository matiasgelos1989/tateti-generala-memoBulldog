import React, { useEffect, useState } from 'react';
import  './Memo.css'
import imageFront from '../../../../public/imagesMemo/logobull.png';
import gordo1 from '../../../../public/imagesMemo/gordo1.jpeg';
import gordo2 from '../../../../public/imagesMemo/gordo2.jpeg';
import gordo3 from '../../../../public/imagesMemo/gordo3.jpeg';
import gordo4 from '../../../../public/imagesMemo/gordo4.jpeg';
import gordo5 from '../../../../public/imagesMemo/gordo5.jpeg';
import gordo6 from '../../../../public/imagesMemo/gordo6.jpeg';
import rayo1 from '../../../../public/imagesMemo/rayo1.jpeg';
import rayo2 from '../../../../public/imagesMemo/rayo2.jpeg';
import rayo3 from '../../../../public/imagesMemo/rayo3.jpeg';
import rayo4 from '../../../../public/imagesMemo/rayo4.jpeg';

export const Cards = () => {
    
    // const imageFront = '../../../../public/imagesMemo/logobull.png'

    const images = [
        gordo1,
        gordo2,
        gordo3,
        gordo4,
        gordo5,
        gordo6,
        rayo1,
        rayo2,
        rayo3,
        rayo4

        // '../../../../public/imagesMemo/crash.png',
        // '../../../../public/imagesMemo/goku.png',
        // '../../../../public/imagesMemo/luigi.jpg',
        // '../../../../public/imagesMemo/Luigichico.png',
        // '../../../../public/imagesMemo/mario.jpg',
        // '../../../../public/imagesMemo/Mariochico.png',
        // '../../../../public/imagesMemo/Mickey.png',
        // '../../../../public/imagesMemo/Oliveratom.jpg',
        // '../../../../public/imagesMemo/Pikachu.jpg',
        // '../../../../public/imagesMemo/sailormoon.png',
        // '../../../../public/imagesMemo/stitch.png'
    ]

   const [newImages,setNewImages] = useState(images.flatMap(item => [`1|${item}`,`2|${item}`]).sort(()=> Math.random()- 0.5))
   

    const [selected,setSelected] = useState([]);
    const [opened, setOpened] = useState([]);

    console.log(selected)

    const handleClick = (image) => {
      if (selected.length < 2 && selected[0] !== image) {
        // console.log('selected' + selected)
        console.log('image' + image)
        setSelected(selected => selected.concat(image))
      } 

    }

    useEffect(() => {
      if(selected.length === 2) {
        if (selected[0].split('|')[1] === selected[1].split('|')[1]) {
          setOpened(opened => opened.concat(selected))
        }
        setTimeout(()=> setSelected([]), 800)
      }
    }, [selected])
    

    
let flip = false
let include = false;
  return (
    <div style={{paddingTop:'25px',height:'550px'}}>

        <div className='divContainer'>

        {newImages.map((image , index) => (<>
              { include = selected.includes(image) || opened.includes(image) }
            <div key={index} className={`divCard ${include? 'rotate' : ''}`} onClick={()=>handleClick(image)}>
              <img    className='image'
               
              src={!include ? imageFront : image.split('|')[1]} alt={!include ? imageFront : image} />
{/*               
              <img   className={!include? 'hidden rotate' : ''} 
              style={{width:'85px', height:'85px',boxShadow:'1px 2px 8px 1px black', borderRadius:'10px', margin:'5px'}} 
              src={image} alt={image} /> */}
              
                
                </div>
                </>
        ))}
        </div>


        <div></div>



    </div>
  )
}
