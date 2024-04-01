
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Celda } from '../components/Celda';
import '../style.css';


export const Tateti = () => {
    const [tablero,setTablero] = useState(Array(9).fill(null))
    const [jugador1,setJugador1] = useState(true);
    const [respuesta1,setRespuesta1] =useState('');
    const [respuesta2,setRespuesta2] = useState('')
    const [cantidadVictorias1,setCantidadVictorias1] = useState (0);
    const [cantidadVictorias2,setCantidadVictorias2] = useState (0);
    
    const navigate = useNavigate();
   
    const handleVolver = () => {
        navigate('/');
    }
    
    
  useEffect(() => {
    setRespuesta1(prompt('Ingrese el nombre del jugador 1'))
    setRespuesta2(prompt('Ingrese el nombre del jugador 2'))
  }, [])
  
    const nombreJugador1 = `${respuesta1} ✖️ `
    const nombreJugador2 = `${respuesta2} ⭕ `
    const turno = jugador1 ? '✖️' : '⭕';
    const [ganador,setGanador] = useState(null)
  
    const winnerCombos = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
      
  ]
  
  
  const chequearGanador = (tableroChequeo) => {
    for (const combo of winnerCombos ) {
      const [a,b,c] = combo
      if (
        tableroChequeo[a] &&
        tableroChequeo[a] === tableroChequeo[b] &&
        tableroChequeo[a] === tableroChequeo[c]
      ){
        return tableroChequeo[a]
      }
    }
    return null
  }
  
  const chequearFinDeJuego = (newTablero) => {
  return newTablero.every((celda) => celda !== null)
  }
  
  
    const handleClose = () => {
          setGanador(null);
          setTablero(Array(9).fill(null));
          setJugador1(!jugador1)
    }
  
    const updateTablero = (index) => {
      
      const newTablero = [...tablero]
      if(newTablero[index] || ganador) return;
  
      newTablero[index] = turno;
      setTablero(newTablero);
  
      const nuevoGanador = chequearGanador(newTablero)
      if(nuevoGanador) {
        setGanador(nuevoGanador)
        jugador1 
        ? setCantidadVictorias1(cantidadVictorias1 + 1)
        : setCantidadVictorias2(cantidadVictorias2 + 1)
      } else if(chequearFinDeJuego(newTablero)){
        setGanador(false);
       } else{
        setJugador1(!jugador1)
      }
      }

  return (
<div className='divTateti'>
    <h1>A jugar!</h1>
    <h2>{jugador1 
    ? `Turno de ${nombreJugador1}`
    : `Turno de ${nombreJugador2}`
    }</h2>
    <div style={{textAlign:'center',justifyContent:'center',justifyItems:'center', textJustify:'center',margin:'auto'}}>
      <div style={{width:'350px', display:'flex', flexWrap:'wrap', margin:'auto'}}>
      {tablero.map((celda, index) => {
       return(
        <Celda key={index} index={index} updateTablero={updateTablero}>
            {celda}
        </Celda>)
      })}
      </div>
      <div>
        <h3>Cantidad de victorias:</h3>
        <div style={{display:'block'}}>
        <h3>{nombreJugador1}: {cantidadVictorias1}</h3>
        <h3>{nombreJugador2}: {cantidadVictorias2}</h3>
        </div>
      </div>

      {ganador !== null
      ?
        ganador
        ?
       <div className='divWinner' >
          <h3>{`${jugador1 ? nombreJugador1 : nombreJugador2} has ganado la partida. Felicitaciones!!`}</h3>
            <div style={{color:'white'}}>
                <button className="buttonWinner" onClick={handleClose} >Volver a jugar</button>
            </div>
        </div>
        : 
        <div className='divWinner'>
          <h3>{`Empate. Ninguno ha ganado`}</h3>
            <div style={{color:'white'}}>
                <button className="buttonWinner" onClick={handleClose} >Volver a jugar</button>
            </div>
        </div>
        :''
      }
      
      </div>

    <button onClick={handleVolver}>Volver</button>
      <div></div>
    </div>
)
}
