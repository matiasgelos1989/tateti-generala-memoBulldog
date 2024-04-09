import React, { useEffect, useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import DialogContentText from '@mui/material/DialogContentText';
import "./tablastyle.css";


export const Generala = () => {
  const [jugadores, setJugadores] = useState([]);
  const [gameInit, setGameInit] = useState(false);
  const [turn,setTurn] = useState('')
  const [clickComenzar,setClickComenzar] = useState(false)
  
  useEffect(() => {
    console.log(jugadores);
  }, [jugadores]);

  useEffect(() => {
   console.log(turn)
  }, [turn])
  

  const handleComenzar = () => {
    setClickComenzar(true)
  }

  const handleClose = () => {
    setClickComenzar(false)
  }
  

  const agregarJugador = () => {



    setGameInit(true);
    setTurn(`jugador0`)
  };

const handleChangeJugadores = (e,) => {
  const JugadoresNuevos = Array(Number(e.target.value)).fill({
    name: '',
    uno: 0,
    dos: 0,
    tres: 0,
    cuatro: 0,
    cinco: 0,
    seis: 0,
    escalera: 0,
    full: 0,
    poker: 0,
    generala: 0,
    dobleGenerala: 0
  })
  setJugadores(JugadoresNuevos)
  
}

  const handleChangeNameJugador = (e, index) => {
    const nuevoNameJugador = e.target.value;
    const newJugadores = [...jugadores];
      newJugadores[index] = {
        ...newJugadores[index],
          name: nuevoNameJugador,
        }; 
        setJugadores(newJugadores)
  }

  const handleChange = (e) => {
    const { value } = e.target
    const valorElegido = e.target.name;
      const numJugador = e.target.id;

      const newJugadores = [...jugadores];
      newJugadores[numJugador] = {
          ...newJugadores[numJugador],
          [valorElegido]: Number(value),
        };

        const turno = numJugador < jugadores.length-1 ? Number(numJugador)+1 : 0;
        setJugadores(newJugadores);
        setTurn(`jugador${turno}`)
    };
 



  return (
    <div  className="divContainerGenerala">
      <div style={{ textAlign: "center" }}>
        {!gameInit ? (
          <div
            style={{minWidth:'max-content',minHeight:'max-content'}}
          >
            <button className="buttonComenzarJuego" onClick={handleComenzar}>Comenzar juego</button>

            <Dialog
        open={clickComenzar}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
     
        <DialogContent>
          <DialogContentText id="alert-dialog-description">

                     <FormControl >
                 <FormLabel id="demo-controlled-radio-buttons-group">Elija cantidad de jugadores</FormLabel>
                 <RadioGroup
                   row
                   aria-labelledby="demo-controlled-radio-buttons-group"
                   name="controlled-radio-buttons-group"
                   onChange={handleChangeJugadores}
                 >
                   <FormControlLabel value={1} control={<Radio />} label={1} />
                   <FormControlLabel value={2} control={<Radio />} label={2} />
                   <FormControlLabel value={3} control={<Radio />} label={3} />
                   <FormControlLabel value={4} control={<Radio />} label={4} />
                   <FormControlLabel value={5} control={<Radio />} label={5} />

                 </RadioGroup>
              </FormControl>
              <div style={{display:'flex', flexDirection:'column'}}>
              {jugadores.map((jugador,index) => (
                <TextField 
                value={jugador.name}
                onChange={(e) => handleChangeNameJugador(e, index)} label={`nombre jugador ${index+1}`} variant="standard"></TextField>
              ))
                
              
              }
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>

          <Button onClick={handleClose} >Cancelar</Button>
          <Button onClick={agregarJugador} >Empezar</Button>
        </DialogActions>
      </Dialog>


          </div>


        ) : (
          <div style={{display:'flex'}}>
            <div
              style={{ display: "flex", flex:50, justifyContent: "center", alignContent:'space-around' }}
            >
              <div style={{display:'flex', alignContent:'space-between', justifyContent:'space-around'}}>
                <table className="tablaFija">
                  <thead >
                    <tr>
                      <th>Jugadores</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr >
                      <td  >1</td>
                    </tr>
                    <tr >
                      <td  >2</td>
                    </tr>
                    <tr >
                      <td  >3</td>
                    </tr>
                    <tr >
                      <td  >4</td>
                    </tr>
                    <tr>
                      <td>5</td>
                    </tr>
                    <tr >
                      <td  >6</td>
                    </tr>
                    <tr >
                      <td  >Escalera</td>
                    </tr>
                    <tr >
                      <td  >Full</td>
                    </tr>
                    <tr >
                      <td  >Poker</td>
                    </tr>
                    <tr >
                      <td  >Generala</td>
                    </tr>
                    <tr >
                      <td  >D. Generala</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "black",
                          background: "lightgreen",
                          fontWeight: 700,
                          fontSize: 16,
                        }}
                      >
                        Total
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
                          <div className="jugadoresDiv">
              {jugadores.map((jugador, index) => (
                <div key={index} style={{ textAlign: "center" }}>
                  <table className="tabla"
                  style={{
                    backgroundColor: turn === `jugador${index}` ? 'darkolivegreen' :'',
                    
                    }}>
                    <thead>
                      <tr>

                        <th className="cabeceraJugador"
                        style={{
                          backgroundColor: turn === `jugador${index}` ? 'lightblue' :'',
                          color: turn === `jugador${index}` ? 'black' :'',
                          }}
                          > {jugador.name} </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Box  >
                            <FormControl fullWidth>
                              <select  
                                defaultValue={''}
                                onChange={handleChange}
                                name='uno'
                                id={index}

                              >
                                <option  value={null}></option>
                                <option  value={1}>1</option>
                                <option  value={2}>2</option>
                                <option  value={3}>3</option>
                                <option  value={4}>4</option>
                                <option  value={5}>5</option>
                                <option  value={0}>X</option>
                              </select>
                            </FormControl>
                          </Box>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Box  >
                            <FormControl fullWidth>
                              <select  
                                defaultValue={''}
                                onChange={handleChange}
                                name='dos'
                                id={index}
                                native
                              >
                                <option value={null}></option>
                                <option value={2}>2</option>
                                <option value={5}>4</option>
                                <option value={6}>6</option>
                                <option value={8}>8</option>
                                <option value={10}>10</option>
                                <option value={0}>X</option>
                              </select>
                            </FormControl>
                          </Box>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Box  >
                            <FormControl  fullWidth>
                              <select  
                                defaultValue={''}
                                onChange={handleChange}
                                name='tres'
                                id={index}
                              >
                                <option value={null}></option>
                                <option value={3}>3</option>
                                <option value={6}>6</option>
                                <option value={9}>9</option>
                                <option value={12}>12</option>
                                <option value={15}>15</option>
                                <option value={0}>X</option>
                              </select>
                            </FormControl>
                          </Box>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Box  >
                            <FormControl  fullWidth>
                              <select  
                                defaultValue={''}
                                onChange={handleChange}
                                name='cuatro'
                                id={index}
                              >
                                <option value={null}></option>
                                <option value={4}>4</option>
                                <option value={8}>8</option>
                                <option value={12}>12</option>
                                <option value={16}>16</option>
                                <option value={20}>20</option>
                                <option value={0}>X</option>
                              </select>
                            </FormControl>
                          </Box>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Box >
                            <FormControl  fullWidth>
                              <select  
                                defaultValue={''}
                                onChange={handleChange}
                                name='cinco'
                                id={index}
                              >
                                <option value={null}></option>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                                <option value={20}>20</option>
                                <option value={25}>25</option>
                                <option value={0}>X</option>
                              </select>
                            </FormControl>
                          </Box>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Box  >
                            <FormControl  fullWidth>
                              <select  
                                defaultValue={''}
                                onChange={handleChange}
                                name='seis'
                                id={index}
                              >
                                <option value={null}></option>
                                <option value={6}>6</option>
                                <option value={12}>12</option>
                                <option value={18}>18</option>
                                <option value={24}>24</option>
                                <option value={30}>30</option>
                                <option value={0}>X</option>
                              </select>
                            </FormControl>
                          </Box>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Box >
                            <FormControl  fullWidth>
                              <select  
                                defaultValue={''}
                                onChange={handleChange}
                                name='escalera'
                                id={index}
                              >
                                <option value={null}></option>
                                <option value={20}>20</option>
                                <option value={25}>25</option>
                                <option value={0}>X</option>
                              </select>
                            </FormControl>
                          </Box>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Box  >
                            <FormControl  fullWidth>
                              <select  
                                defaultValue={''}
                                onChange={handleChange}
                                name='full'
                                id={index}
                              >
                                <option value={null}></option>
                                <option value={30}>30</option>
                                <option value={35}>35</option>
                                <option value={0}>X</option>
                              </select>
                            </FormControl>
                          </Box>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Box  >
                            <FormControl  fullWidth>
                              <select  
                                defaultValue={''}
                                onChange={handleChange}
                                name='poker'
                                id={index}
                              >
                                <option value={null}></option>
                                <option value={40}>40</option>
                                <option value={45}>45</option>
                                <option value={0}>X</option>
                              </select>
                            </FormControl>
                          </Box>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Box  >
                            <FormControl  fullWidth>
                              <select  
                                defaultValue={''}
                                onChange={handleChange}
                                name='generala'
                                id={index}
                              >
                                <option value={null}></option>
                                <option value={50}>50</option>
                                <option value={55}>55</option>
                                <option value={0}>X</option>
                              </select>
                            </FormControl>
                          </Box>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Box  >
                            <FormControl fullWidth>
                              <select  
                              
                                onChange={handleChange}
                                defaultValue={''}
                                name='dobleGenerala'
                                id={index}
                              >
                                <option value={null}></option>
                                <option value={100}>100</option>
                                <option value={105}>105</option>
                                <option value={0}>X</option>
                              </select>
                            </FormControl>
                          </Box>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{backgroundColor:'lightgreen', color:'black', fontWeight:700}}
                          name="total"
                        >
                          {                         
                          new Intl.NumberFormat().format(jugador.uno+jugador.dos+jugador.tres+jugador.cuatro+jugador.cinco+jugador.seis+jugador.escalera+jugador.full+jugador.poker+jugador.generala+jugador.dobleGenerala)
                          }
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
