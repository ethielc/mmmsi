import React from 'react';
import Navbar from '../components/Navbar';
import {Button,TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
	root: {
	  '& .MuiTextField-root': {
		margin: theme.spacing(2),
		width: '33ch',

	  },
	},
  }));
  function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
function Cuenta() {

	
	const classes = useStyles();

	const [open, setOpen] = React.useState(false);
  
	const handleClick = () => {
	  setOpen(true);
	};
  
	const handleClose = (event, reason) => {
	  if (reason === 'clickaway') {
		return;
	  }
  
	  setOpen(false);
	};
	let history = useHistory();
	function home(){
		history.push("/home")
	}
    return (
		<div className="cuenta">
			<Navbar />
			
			<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			>

				<h1 height="1px">Mi perfil</h1>
				<Breadcrumbs aria-label="breadcrumb" >
					<Link color="inherit" href="/home" border="solid" style={{color: "black", fontSize:"16px"}}>
                        <Typography variant="subtitle2"  style={{color: "black", fontSize:"16px"}}>
                            <Box fontWeight="fontWeightBold" m={2}>
                                Home
                            </Box>
                        </Typography>
					</Link>
					
					<Typography variant="subtitle2"  style={{color: "black", fontSize:"16px"}}>
                        <Box fontWeight="fontWeightBold" m={1}>
                            Cuenta
                        </Box>
                    </Typography>
				</Breadcrumbs>


				<form className={classes.root} noValidate autoComplete="off">
				<TextField disabled id="standard-disabled" label="Correo electrónico" variant="outlined" defaultValue="maria.paz@sansano.usm.cl" />
				<TextField id="filled-basic" label="Nuevo correo electrónico" variant="outlined"/>
				</form>

				<form className={classes.root} noValidate autoComplete="off">
				<TextField disabled id="standard-disabled" label="Número de contacto" variant="outlined" defaultValue="+56 9 7323 6282" />
				<TextField id="filled-basic" label="Nuevo número" variant="outlined" />
				</form>

				<form className={classes.root} noValidate autoComplete="off">
				<TextField
					disabled id="standard-disabled"
					label="Contraseña"
					type="password"
					autoComplete="current-password"
					variant="outlined"
					defaultValue="asdasdaasdasd"
					/>
					<TextField
					id="filled-basic"
					label="Nueva contraseña"
					type="password"
					autoComplete="current-password"
					variant="outlined"
					/>
				</form>

				<form className={classes.root} noValidate autoComplete="off">
				<TextField disabled id="standard-disabled" label="Prioridad"  defaultValue="10.958" variant="outlined" />
				<TextField id="filled-basic" label="Nueva prioridad" variant="outlined" />
				</form>

				<form className={classes.root} noValidate autoComplete="off">
				<TextField disabled id="standard-disabled" label="Carrera" variant="outlined" defaultValue="Ingenieria Civil Informática" />
				<TextField id="filled-basic" label="Nueva carrera" variant="outlined" />
				</form>

				<form className={classes.root} noValidate autoComplete="off">
				<TextField disabled id="standard-disabled" label="Sede" variant="outlined" defaultValue="San Joaquín" />
				<TextField id="filled-basic" label="Nueva sede" variant="outlined" />
				</form>

				<Button
				variant="contained"
				color="default"
				className={classes.button}
				startIcon={<CloudUploadIcon />}
				style={{
					borderRadius: 5,
					padding: "13px 36px",
					fontSize: "13px",
					margin: "10px"
				}}
				>
					Subir resumen académico
				</Button>

				<Grid
				container
				direction="column"
				justify="center"
				alignItems="center"
				>
					
					<Button
					style={{
						borderRadius: 5,
						backgroundColor: "#009879",
						padding: "13px 36px",
						fontSize: "13px",
						margin: "10px"
					}}
					variant="contained"
					color="primary"
					size="medium"
					onClick={handleClick}
					className={classes.button}
					startIcon={<SaveIcon />}
					>
					Guardar cambios
					</Button>
					<Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
					<Alert onClose={handleClose} severity="success">
						Cambios realizados correctamente
					</Alert>
					</Snackbar>
				
					<Button onClick ={home}
					style={{
						borderRadius: 5,
						backgroundColor: "#009879",
						padding: "13px 36px",
						fontSize: "13px",
						margin: "5px"
					}} 
					variant="contained" 
					color="primary">
						Volver
					</Button>

				</Grid>


			</Grid>


		</div>
    );
}

export default Cuenta;
