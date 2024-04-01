import React, { useEffect, useState } from "react";
import "./tablastyle.css";
import { TextField, Box, Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import NativeSelect from '@mui/material/NativeSelect';
// import TextField from '@mui/material/TextField';

export const Generala = () => {
  const [jugadores, setJugadores] = useState([]);
  const [open, setOpen] = useState(false);
  const [gameInit, setGameInit] = useState(false);
  const [turn,setTurn] = useState('')
  
  
  
  useEffect(() => {
    console.log(jugadores);
  }, [gameInit]);

  useEffect(() => {
   console.log(turn)
  }, [turn])
  

  

  const agregarJugador = () => {
    const cantJugadores = Number(
      prompt("indica la cantidad de jugadores en números")
    );

    for (let index = 0; index < cantJugadores; index++) {
      const jugador = prompt(`Nombre de Jugador ${index + 1}`);
      jugadores.push({
        name: jugador,
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
      });
    }


    setGameInit(true);
    setTurn(`jugador0`)
  };



  const handleChange = (e) => {
    const { value } = e.target
    const valorElegido = e.target.name;
      const numJugador = e.target.id;

      // console.log(valorElegido);
      console.log(numJugador);
      const newJugadores = [...jugadores];
      newJugadores[numJugador] = {
          ...newJugadores[numJugador],
          [valorElegido]: Number(value),
        };

        const turno = numJugador < jugadores.length-1 ? Number(numJugador)+1 : 0;
        setJugadores(newJugadores);
        setTurn(`jugador${turno}`)
        console.log(turn)
    };

  return (
    <div className="divContainerGenerala"
      style={{
        backgroundColor: "black",
        color: "white",
        alignContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        {!gameInit ? (
          <div
            style={{ width: "100%", height: "100vh", alignContent: "center" }}
          >
            <button onClick={agregarJugador}>Comenzar juego</button>
          </div>
        ) : (
          <div style={{}}>
            <div
              style={{ display: "flex", flex: 50, justifyContent: "center" }}
            >
              <div>
                <table className="tablaFija">
                  <thead >
                    <tr>
                      <th>Puntaje / Jugador</th>
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
                      <td  >Doble Generala</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "black",
                          background: "lightgreen",
                          fontWeight: 900,
                          fontSize: 18,
                        }}
                      >
                        Total
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {jugadores.map((jugador, index) => (
                <div key={index} style={{ textAlign: "center" }}>
                  <table className="tabla"
                  style={{
                    backgroundColor: turn === `jugador${index}` ? 'darkolivegreen' :'',
                    
                    }}>
                    <thead>
                      <tr>
                        {" "}
                        <th className="cabeceraJugador"
                        style={{
                          backgroundColor: turn === `jugador${index}` ? 'lightblue' :'',
                          color: turn === `jugador${index}` ? 'black' :'',
                          }}
                          > {jugador.name} </th>{" "}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {" "}
                        <td>
                          {" "}
                          <Box  sx={{ minWidth: 80,height:'21px'}}>
                            <FormControl  fullWidth>
                              <NativeSelect  style={{color:'white',paddingLeft:30}}
                                defaultValue={''}
                                onChange={handleChange}
                                name='uno'
                                id={index}

                              >
                                <option style={{color:'black', textAlign:'center', }} value={null}></option>
                                <option style={{color:'black', textAlign:'center'}} value={1}>1</option>
                                <option style={{color:'black', textAlign:'center'}} value={2}>2</option>
                                <option style={{color:'black', textAlign:'center'}} value={3}>3</option>
                                <option style={{color:'black', textAlign:'center'}} value={4}>4</option>
                                <option style={{color:'black', textAlign:'center'}} value={5}>5</option>
                                <option style={{color:'black', textAlign:'center'}} value={0}>X</option>
                              </NativeSelect>
                            </FormControl>
                          </Box>
                        </td>{" "}
                      </tr>
                      <tr>
                        {" "}
                        <td>
                          {" "}
                          <Box  sx={{ minWidth: 80,height:'21px',paddingRight:0}}>
                            <FormControl sx={{paddingRight:0}} fullWidth>
                              <NativeSelect  style={{color:'white',paddingLeft:30}}
                                defaultValue={''}
                                onChange={handleChange}
                                name='dos'
                                id={index}
                              >
                                <option style={{color:'black', textAlign:'center'}} value={null}></option>
                                <option style={{color:'black', textAlign:'center'}} value={2}>2</option>
                                <option style={{color:'black', textAlign:'center'}} value={5}>4</option>
                                <option style={{color:'black', textAlign:'center'}} value={6}>6</option>
                                <option style={{color:'black', textAlign:'center'}} value={8}>8</option>
                                <option style={{color:'black', textAlign:'center'}} value={10}>10</option>
                                <option style={{color:'black', textAlign:'center'}} value={0}>X</option>
                              </NativeSelect>
                            </FormControl>
                          </Box>
                        </td>{" "}
                      </tr>
                      <tr>
                        {" "}
                        <td>
                          {" "}
                          <Box  sx={{ minWidth: 80,height:'21px'}}>
                            <FormControl  fullWidth>
                              <NativeSelect  style={{color:'white',paddingLeft:30}}
                                defaultValue={''}
                                onChange={handleChange}
                                name='tres'
                                id={index}
                              >
                                <option style={{color:'black', textAlign:'center'}} value={null}></option>
                                <option style={{color:'black', textAlign:'center'}} value={3}>3</option>
                                <option style={{color:'black', textAlign:'center'}} value={6}>6</option>
                                <option style={{color:'black', textAlign:'center'}} value={9}>9</option>
                                <option style={{color:'black', textAlign:'center'}} value={12}>12</option>
                                <option style={{color:'black', textAlign:'center'}} value={15}>15</option>
                                <option style={{color:'black', textAlign:'center'}} value={0}>X</option>
                              </NativeSelect>
                            </FormControl>
                          </Box>
                        </td>{" "}
                      </tr>
                      <tr>
                        {" "}
                        <td style={{}}>
                          {" "}
                          <Box  sx={{ minWidth: 80,height:'21px'}}>
                            <FormControl  fullWidth>
                              <NativeSelect  style={{color:'white',paddingLeft:30}}
                                defaultValue={''}
                                onChange={handleChange}
                                name='cuatro'
                                id={index}
                              >
                                <option style={{color:'black', textAlign:'center'}} value={null}></option>
                                <option style={{color:'black', textAlign:'center'}} value={4}>4</option>
                                <option style={{color:'black', textAlign:'center'}} value={8}>8</option>
                                <option style={{color:'black', textAlign:'center'}} value={12}>12</option>
                                <option style={{color:'black', textAlign:'center'}} value={16}>16</option>
                                <option style={{color:'black', textAlign:'center'}} value={20}>20</option>
                                <option style={{color:'black', textAlign:'center'}} value={0}>X</option>
                              </NativeSelect>
                            </FormControl>
                          </Box>
                        </td>{" "}
                      </tr>
                      <tr>
                        {" "}
                        <td>
                          {" "}
                          <Box  sx={{ minWidth: 80,height:'21px'}}>
                            <FormControl  fullWidth>
                              <NativeSelect  style={{color:'white',paddingLeft:30}}
                                defaultValue={''}
                                onChange={handleChange}
                                name='cinco'
                                id={index}
                              >
                                <option style={{color:'black', textAlign:'center'}} value={null}></option>
                                <option style={{color:'black', textAlign:'center'}} value={5}>5</option>
                                <option style={{color:'black', textAlign:'center'}} value={10}>10</option>
                                <option style={{color:'black', textAlign:'center'}} value={15}>15</option>
                                <option style={{color:'black', textAlign:'center'}} value={20}>20</option>
                                <option style={{color:'black', textAlign:'center'}} value={25}>25</option>
                                <option style={{color:'black', textAlign:'center'}} value={0}>X</option>
                              </NativeSelect>
                            </FormControl>
                          </Box>
                        </td>{" "}
                      </tr>
                      <tr>
                        {" "}
                        <td>
                          {" "}
                          <Box  sx={{ minWidth: 80,height:'21px'}}>
                            <FormControl  fullWidth>
                              <NativeSelect  style={{color:'white',paddingLeft:30}}
                                defaultValue={''}
                                onChange={handleChange}
                                name='seis'
                                id={index}
                              >
                                <option style={{color:'black', textAlign:'center'}} value={null}></option>
                                <option style={{color:'black', textAlign:'center'}} value={6}>6</option>
                                <option style={{color:'black', textAlign:'center'}} value={12}>12</option>
                                <option style={{color:'black', textAlign:'center'}} value={18}>18</option>
                                <option style={{color:'black', textAlign:'center'}} value={24}>24</option>
                                <option style={{color:'black', textAlign:'center'}} value={30}>30</option>
                                <option style={{color:'black', textAlign:'center'}} value={0}>X</option>
                              </NativeSelect>
                            </FormControl>
                          </Box>
                        </td>{" "}
                      </tr>
                      <tr>
                        {" "}
                        <td>
                          {" "}
                          <Box  sx={{ minWidth: 80,height:'21px'}}>
                            <FormControl  fullWidth>
                              <NativeSelect  style={{color:'white',paddingLeft:30}}
                                defaultValue={''}
                                onChange={handleChange}
                                name='escalera'
                                id={index}
                              >
                                <option style={{color:'black', textAlign:'center'}} value={null}></option>
                                <option style={{color:'black', textAlign:'center'}} value={20}>20</option>
                                <option style={{color:'black', textAlign:'center'}} value={25}>25</option>
                                <option style={{color:'black', textAlign:'center'}} value={0}>X</option>
                              </NativeSelect>
                            </FormControl>
                          </Box>
                        </td>{" "}
                      </tr>
                      <tr>
                        {" "}
                        <td>
                          {" "}
                          <Box  sx={{ minWidth: 80,height:'21px'}}>
                            <FormControl  fullWidth>
                              <NativeSelect  style={{color:'white',paddingLeft:30}}
                                defaultValue={''}
                                onChange={handleChange}
                                name='full'
                                id={index}
                              >
                                <option style={{color:'black', textAlign:'center'}} value={null}></option>
                                <option style={{color:'black', textAlign:'center'}} value={30}>30</option>
                                <option style={{color:'black', textAlign:'center'}} value={35}>35</option>
                                <option style={{color:'black', textAlign:'center'}} value={0}>X</option>
                              </NativeSelect>
                            </FormControl>
                          </Box>
                        </td>{" "}
                      </tr>
                      <tr>
                        {" "}
                        <td>
                          {" "}
                          <Box  sx={{ minWidth: 80,height:'21px'}}>
                            <FormControl  fullWidth>
                              <NativeSelect  style={{color:'white',paddingLeft:30}}
                                defaultValue={''}
                                onChange={handleChange}
                                name='poker'
                                id={index}
                              >
                                <option style={{color:'black', textAlign:'center'}} value={null}></option>
                                <option style={{color:'black', textAlign:'center'}} value={40}>40</option>
                                <option style={{color:'black', textAlign:'center'}} value={45}>45</option>
                                <option style={{color:'black', textAlign:'center'}} value={0}>X</option>
                              </NativeSelect>
                            </FormControl>
                          </Box>
                        </td>{" "}
                      </tr>
                      <tr>
                        {" "}
                        <td>
                          {" "}
                          <Box  sx={{ minWidth: 80,height:'21px'}}>
                            <FormControl  fullWidth>
                              <NativeSelect  style={{color:'white',paddingLeft:30}}
                                defaultValue={''}
                                onChange={handleChange}
                                name='generala'
                                id={index}
                              >
                                <option style={{color:'black', textAlign:'center'}} value={null}></option>
                                <option style={{color:'black', textAlign:'center'}} value={50}>50</option>
                                <option style={{color:'black', textAlign:'center'}} value={55}>55</option>
                                <option style={{color:'black', textAlign:'center'}} value={0}>X</option>
                              </NativeSelect>
                            </FormControl>
                          </Box>
                        </td>{" "}
                      </tr>
                      <tr>
                        {" "}
                        <td>
                          {" "}
                          <Box  sx={{ minWidth: 80,height:'21px'}}>
                            <FormControl  fullWidth>
                              <NativeSelect  style={{color:'white',paddingLeft:30}}
                                onChange={handleChange}
                                defaultValue={''}
                                name='dobleGenerala'
                                id={index}
                              >
                                <option style={{color:'black', textAlign:'center'}} value={null}></option>
                                <option style={{color:'black', textAlign:'center'}} value={100}>100</option>
                                <option style={{color:'black', textAlign:'center'}} value={105}>105</option>
                                <option style={{color:'black', textAlign:'center'}} value={0}>X</option>
                              </NativeSelect>
                            </FormControl>
                          </Box>
                        </td>{" "}
                      </tr>
             


                      <tr>
                        {" "}
                        <td
                          style={{
                            color: "black",
                            background: "green",
                            fontWeight: 900,
                            fontSize: 18,
                          }}
                          name="total"
                        >
                          {" "}
                          {                         
                          new Intl.NumberFormat().format(jugador.uno+jugador.dos+jugador.tres+jugador.cuatro+jugador.cinco+jugador.seis+jugador.escalera+jugador.full+jugador.poker+jugador.generala+jugador.dobleGenerala)
                          }{" "}
                        </td>{" "}
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}

              {/* {jugadores.map((jugador) =>(
            <div style={{textAlign:'center'}} >
                <table className='tabla'>
                    <thead>
                    <tr> <th>{jugador.name}</th> </tr>
                    </thead>
                    <tbody>
                    <tr> <td>{jugador.uno}</td> </tr>
                    <tr> <td>{jugador.dos}</td> </tr>
                    <tr> <td>{jugador.tres}</td> </tr>
                    <tr> <td>{jugador.cuatro}</td> </tr>
                    <tr> <td>{jugador.cinco}</td> </tr>
                    <tr> <td>{jugador.seis}</td> </tr>
                    <tr> <td>{jugador.escalera}</td> </tr>
                    <tr> <td>{jugador.full}</td> </tr>
                    <tr> <td>{jugador.poker}</td> </tr>
                    <tr> <td>{jugador.generala}</td> </tr>
                    <tr> <td>{jugador.dobleGenerala}</td> </tr>
                    </tbody>
                </table>
            </div>
            ))} */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
