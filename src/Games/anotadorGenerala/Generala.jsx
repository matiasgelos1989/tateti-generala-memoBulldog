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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
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

  const handleChange = (e, valorElegido, numJugador) => {
    const { value } = e.target
    console.log(e)
    console.log(`valorElegido = ` + valorElegido)
    console.log(`numJugador = ` + numJugador)

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
            style={{marginTop:'30vh'}}
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
                <TextField key={index}
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
                      <td className="tdFijo" >1</td>
                    </tr>
                    <tr >
                      <td className="tdFijo" >2</td>
                    </tr>
                    <tr >
                      <td  className="tdFijo">3</td>
                    </tr>
                    <tr >
                      <td className="tdFijo" >4</td>
                    </tr>
                    <tr>
                      <td className="tdFijo">5</td>
                    </tr>
                    <tr >
                      <td className="tdFijo" >6</td>
                    </tr>
                    <tr >
                      <td className="tdFijo" >Escalera</td>
                    </tr>
                    <tr >
                      <td className="tdFijo"  >Full</td>
                    </tr>
                    <tr >
                      <td className="tdFijo" >Poker</td>
                    </tr>
                    <tr >
                      <td className="tdFijo" >Generala</td>
                    </tr>
                    <tr >
                      <td  className="tdFijo">D. Generala</td>
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
                <div key={index} style={{display:'flex', textAlign: "center" }}>
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
                        <td className="tdVariable">
                          <Box  >
                            <FormControl sx={{minWidth:'80px'}} fullWidth>
                              <Select
                              style={{color:'white', height:'20px'}}
                              defaultValue={''}
                              className="tdVariable"
                                onChange={(e) =>handleChange(e,'uno', index)}
                              >
                                <MenuItem  value={1}>1</MenuItem>
                                <MenuItem  value={2}>2</MenuItem>
                                <MenuItem  value={3}>3</MenuItem>
                                <MenuItem  value={4}>4</MenuItem>
                                <MenuItem  value={5}>5</MenuItem>
                                <MenuItem  value={0}>X</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </td>
                      </tr>
                      <tr>
                        <td className="tdVariable">
                          <Box  >
                            <FormControl sx={{minWidth:'80px'}} fullWidth>
                              <Select
                              style={{color:'white', height:'20px'}}
                              className="tdVariable"
                                label=""
                                defaultValue={''}
                                onChange={(e) =>handleChange(e,'dos', index)}
                              >
                                <MenuItem  value={2}>2</MenuItem>
                                <MenuItem  value={4}>4</MenuItem>
                                <MenuItem  value={6}>6</MenuItem>
                                <MenuItem  value={8}>8</MenuItem>
                                <MenuItem  value={10}>10</MenuItem>
                                <MenuItem  value={0}>X</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </td>
                      </tr>
                      <tr>
                        <td className="tdVariable">
                          <Box  >
                            <FormControl sx={{minWidth:'80px'}} fullWidth>
                              <Select
                              style={{color:'white', height:'20px'}}
                              className="tdVariable"
                                label=""
                                defaultValue={''}
                                onChange={(e) =>handleChange(e,'tres', index)}
                              >
                                <MenuItem  value={3}>3</MenuItem>
                                <MenuItem  value={6}>6</MenuItem>
                                <MenuItem  value={9}>9</MenuItem>
                                <MenuItem  value={12}>12</MenuItem>
                                <MenuItem  value={15}>15</MenuItem>
                                <MenuItem  value={0}>X</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </td>
                      </tr>
                      <tr>
                        <td className="tdVariable">
                          <Box  >
                            <FormControl sx={{minWidth:'80px'}} fullWidth>
                              <Select
                              style={{color:'white', height:'20px'}}
                              className="tdVariable"
                                label=""
                                defaultValue={''}
                                onChange={(e) =>handleChange(e,'cuatro', index)}
                              >
                                <MenuItem  value={4}>4</MenuItem>
                                <MenuItem  value={8}>8</MenuItem>
                                <MenuItem  value={12}>12</MenuItem>
                                <MenuItem  value={16}>16</MenuItem>
                                <MenuItem  value={20}>20</MenuItem>
                                <MenuItem  value={0}>X</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </td>
                      </tr>
                      <tr>
                        <td className="tdVariable">
                          <Box  >
                            <FormControl sx={{minWidth:'80px'}} fullWidth>
                              <Select
                              style={{color:'white', height:'20px'}}
                              className="tdVariable"
                              defaultValue={''}
                              
                                onChange={(e) =>handleChange(e,'cinco', index)}
                              >
                                <MenuItem  value={undefined}></MenuItem>
                                <MenuItem  value={5}>5</MenuItem>
                                <MenuItem  value={10}>10</MenuItem>
                                <MenuItem  value={15}>15</MenuItem>
                                <MenuItem  value={20}>20</MenuItem>
                                <MenuItem  value={25}>25</MenuItem>
                                <MenuItem  value={0}>X</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </td>
                      </tr>
                      <tr>
                        <td className="tdVariable">
                          <Box  >
                            <FormControl sx={{minWidth:'80px'}} fullWidth>
                              <Select
                              style={{color:'white', height:'20px'}}
                              className="tdVariable"
                              defaultValue={''}
                              
                                onChange={(e) =>handleChange(e,'seis', index)}
                              >
                                <MenuItem  value={6}>6</MenuItem>
                                <MenuItem  value={12}>12</MenuItem>
                                <MenuItem  value={18}>18</MenuItem>
                                <MenuItem  value={24}>24</MenuItem>
                                <MenuItem  value={30}>30</MenuItem>
                                <MenuItem  value={0}>X</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </td>
                      </tr>
                      <tr>
                        <td className="tdVariable">
                          <Box  >
                            <FormControl sx={{minWidth:'80px'}} fullWidth>
                              <Select
                              style={{color:'white', height:'20px'}}
                              className="tdVariable"
                                label=""
                                defaultValue={''}
                                onChange={(e) =>handleChange(e,'escalera', index)}
                              >
                                <MenuItem  value={20}>20</MenuItem>
                                <MenuItem  value={25}>25</MenuItem>
                                <MenuItem  value={0}>X</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </td>
                      </tr>
                      <tr>
                        <td className="tdVariable">
                          <Box  >
                            <FormControl sx={{minWidth:'80px'}} fullWidth>
                              <Select
                              style={{color:'white', height:'20px'}}
                              className="tdVariable"
                                label=""
                                defaultValue={''}
                                onChange={(e) =>handleChange(e,'full', index)}
                              >
                                <MenuItem  value={30}>30</MenuItem>
                                <MenuItem  value={35}>35</MenuItem>
                                <MenuItem  value={0}>X</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </td>
                      </tr>
                      <tr>
                        <td className="tdVariable">
                          <Box  >
                            <FormControl sx={{minWidth:'80px'}} fullWidth>
                              <Select
                              style={{color:'white', height:'20px'}}
                              className="tdVariable"
                                label=""
                                defaultValue={''}
                                onChange={(e) =>handleChange(e,'poker', index)}
                              >
                                <MenuItem  value={40}>40</MenuItem>
                                <MenuItem  value={45}>45</MenuItem>
                                <MenuItem  value={0}>X</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </td>
                      </tr>
                      <tr>
                        <td className="tdVariable">
                          <Box  >
                            <FormControl sx={{minWidth:'80px'}} fullWidth>
                              <Select
                              style={{color:'white', height:'20px'}}
                              className="tdVariable"
                                label=""
                                defaultValue={''}
                                onChange={(e) =>handleChange(e,'generala', index)}
                              >
                                <MenuItem  value={50}>50</MenuItem>
                                <MenuItem  value={55}>55</MenuItem>
                                <MenuItem  value={0}>X</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </td>
                      </tr>
                      <tr>
                        <td className="tdVariable">
                          <Box  >
                            <FormControl sx={{minWidth:'80px'}} fullWidth>
                              <Select
                              style={{color:'white', height:'20px'}}
                              className="tdVariable"
                                label=""
                                defaultValue={''}
                                onChange={(e) =>handleChange(e,'dobleGenerala', index)}
                              >
                                <MenuItem  value={100}>100</MenuItem>
                                <MenuItem  value={105}>105</MenuItem>
                                <MenuItem  value={0}>X</MenuItem>
                              </Select>
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
