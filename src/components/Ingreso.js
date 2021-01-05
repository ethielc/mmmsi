import React from 'react'
import './Ingreso.css'
import { Grid,Paper,TextField,Avatar, Button,InputAdornment } from '@material-ui/core'
import { AccountCircle,LockRounded } from '@material-ui/icons'
import { useHistory } from "react-router-dom"

function Ingreso() {
    let history = useHistory();
    function handleClick(){
        history.push("/home")
    }

    const paperStyle={padding:20, height:'50vh', width:420}
    return(
        <Grid container style={{ minHeight: "100vh" }}>
            <Paper elevation={20} style={paperStyle}>
                <Grid 
                    container
                    item
                    xs={12}
                    sm={50}
                    alignItems="center"
                    direction="column"
                    justify="space-between"
                    style={{ padding: "0px" }}
                    >
                        <div />
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <img 
                                src="https://icons.iconarchive.com/icons/icons8/windows-8/256/Science-University-icon.png"
                                style={{ width: "30%", height: "50%", margin: "auto" }}
                                alt="brand"
                            />
                            <TextField label="Username" margin="normal" InputProps={{ startAdornment: (<InputAdornment position="start"><AccountCircle /></InputAdornment>), }} />
                            <TextField type="password" label="Password" margin="normal" InputProps={{ startAdornment: (<InputAdornment position="start"><LockRounded /></InputAdornment> ), }} />
                            <div style={{ height: 20 }} />
                            <Button color="primary" variant="contained" onClick={handleClick}
                                style={{
                                    borderRadius: 5,
                                    backgroundColor: "#009879",
                                    padding: "13px 36px",
                                    fontSize: "13px",
                                    margin: "5px"
                                }} >
                                Ingresar
                            </Button>
                            <Button style={{ textDecoration: "underline"}}>¿No tienes una cuenta? Crea una!</Button>
                        </div>
                    </Grid>
            </Paper>
        </Grid>
    )
}

export default Ingreso;