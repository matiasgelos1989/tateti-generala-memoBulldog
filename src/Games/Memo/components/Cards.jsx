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
import confetti from 'canvas-confetti';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export const Cards = () => {
    
    // const imageFront = '../../../../public/imagesMemo/logobull.png'

    const images = [
        gordo1,
        gordo2,
        gordo3,
        // gordo4,
        // gordo5,
        // gordo6,
        // rayo1,
        // rayo2,
        // rayo3,
        // rayo4

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
    const [modalWinner,setModalWinner] = useState(false)

    

    const handleClick = (image) => {

        if (selected.length < 2 && selected[0]!== image &&  !opened.includes(image)) {
          console.log('selected' + selected)
          console.log('image' + image)
          setSelected(selected => selected.concat(image))
        } 
      }

    // }

    useEffect(() => {
      if(selected.length === 2) {
        if (selected[0].split('|')[1] === selected[1].split('|')[1]) {
          const newOpened = opened.concat(selected);
          setOpened(newOpened)
          console.log(`imagenes ${newImages.length}`)
          console.log(`abiertas ${newOpened.length}`)
          console.log(newOpened)
          if (newImages.length === newOpened.length) {
            setModalWinner(true)
            confetti()
          }
        }
        setTimeout(()=> setSelected([]), 1200)
      }
    }, [selected]);

    const handleClose = () => {
      setModalWinner(false);
    };

    const handleNewGame = () => {
      setOpened([])
      setSelected([])
      setNewImages(images.flatMap(item => [`1|${item}`,`2|${item}`]).sort(()=> Math.random()- 0.5))
      setModalWinner(false);
    }

let include = false;

  return (
<div className='divContainer'>
        {newImages.map((image , index) => (<div key={index}>
              { include = selected.includes(image) || opened.includes(image) }
            <div className={`divCard ${include? 'rotate' : ''}`} onClick={()=>handleClick(image)}>
                <img    
                className='image'
                src={!include ? imageFront : image.split('|')[1]} 
                alt={!include ? imageFront : image} />       
            </div>
                </div>
        ))}

  
<Dialog 
      
        open={modalWinner}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
         <DialogContent  sx={{width:'250px'}}>
          <DialogContentText id="alert-dialog-description">
            Enhorabuena, Felicitaciones!! 
            <tr></tr>
            Has logrado completar el desafío!!
          </DialogContentText>
        </DialogContent>
      
        <DialogActions>
          <Button onClick={handleNewGame}>volver a Jugar</Button>
          <Button onClick={handleClose} autoFocus>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>

  </div>

  )
}
