import React, { useEffect, useState } from 'react';
import  './Memo.css'
export const Cards = () => {
    
    const imageFront = '../../../../public/imagesMemo/logobull.png'

    const images = [
        '../public/imagesMemo/gordo1.jpeg',
        '../public/imagesMemo/gordo2.jpeg',
        '../public/imagesMemo/gordo3.jpeg',
        '../public/imagesMemo/gordo4.jpeg',
        '../public/imagesMemo/gordo5.jpeg',
        '../public/imagesMemo/gordo6.jpeg',
        '../public/imagesMemo/rayo1.jpeg',
        '../public/imagesMemo/rayo2.jpeg',
        '../public/imagesMemo/rayo3.jpeg',
        '../public/imagesMemo/rayo4.jpeg'

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
               
              src={!include ? imageFront : image} alt={!include ? imageFront : image} />
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
