import React from 'react';
import Navbar from '../components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Box from '@material-ui/core/Box';

function createData(name, calories, fat) {
	return { name, calories, fat  };
  }
  
  const rows = [
	createData('Postulaciones', '05-03-2021', '05-04-2021'),
	createData('Selección de profesores', '06-04-2021', '10-04-2021' ),
	createData('Segundo llamado', '11-04-2021' , '17-04-2021' ),
	

  ];


const useStyles = makeStyles({
	root: {
	  minWidth: 875,
	  alignItems: 'center',
	  flexGrow: 1
	},
	bullet: {
	display: 'inline-block',
		
	  margin: '0 2px',
	  transform: 'scale(0.8)',
	},
	title: {
	  fontSize: 14,
	},
	pos: {
	  marginBottom: 12,
	  
	},
  });

function Home() {
 
  const classes = useStyles();
  

    return (
		<div className="home">
			<Navbar />

			<Grid
			container
			direction="column"
			alignItems="center"
			>
				<div>
      			<h1 style={{color: "black", margin:"10px"}}>Últimas novedades</h1>
      			</div>

				<Card className={classes.root} variant="outlined"
				style={{
					padding: "1px 15px",
					backgroundColor: "#009879",
					margin: "10px"
				}}>
				
					
					<CardContent alignItems="left">
							<Typography variant="h5" component="h2"style={{
								color: "white"
							}}>
								Inicio proceso de postulación 2021-1
							</Typography>
							<Typography variant="subtitle2" className={classes.title} align="left" color="textSecondary" gutterBottom
							style={{
								padding: "10px 10px",
								backgroundColor: "#009879",
								margin: "5px",
								color: "white",
								fontSize: "14px"
							}}>
								
								Fecha de publicación: 27/12/2020
							</Typography>

							<Card className={classes.root} variant="outlined"
								style={{
									padding: "0.1px 10px",
									backgroundColor: "white",
									margin: "10px"
							}}>
								
								<CardContent alignItems="left">
								<Typography variant="subtitle2"  style={{color: "black", fontSize:"16px", padding: "5px 1px"}}>
									<Box fontWeight="fontWeightBold" m={1}>
										Las fechas que se manejarán en el proceso son:
									</Box>
								</Typography>
								
								<Typography variant="subtitle2"  style={{color: "black", fontSize:"16px"}}>
									<Box fontWeight="fontWeightBold" m={1}>
										<TableContainer component={Paper} >

											<Table className={classes.table} size="small" aria-label="a dense table" >
												<TableHead>
												<TableRow>
													<TableCell>    	-		</TableCell>
													<TableCell align="right" variant="subtitle2"  style={{color: "black", fontSize:"14px", fontWeight:"bold"}}>Fecha inicio</TableCell>
													<TableCell align="right" variant="subtitle2"  style={{color: "black", fontSize:"14px", fontWeight:"bold"}}>Fecha término</TableCell>
													
												</TableRow>
												</TableHead>
												<TableBody>
												{rows.map((row) => (
													<TableRow key={row.name}>
													<TableCell component="th" scope="row" variant="subtitle2"  style={{color: "black", fontSize:"14px", fontWeight:"bold"}}>
														{row.name}
													</TableCell>
													<TableCell align="right" >{row.calories}</TableCell>
													<TableCell align="right">{row.fat}</TableCell>
													<TableCell align="right" variant="subtitle2"  style={{color: "black", fontSize:"14px", fontWeight:"bold"}}>{row.carbs}</TableCell>
													<TableCell align="right" variant="subtitle2"  style={{color: "black", fontSize:"14px", fontWeight:"bold"}}>{row.protein}</TableCell>
													</TableRow>
												))}
												</TableBody>
											</Table>
										</TableContainer>
									</Box>
								</Typography>

								<Typography variant="subtitle2"  style={{color: "black", fontSize:"16px", padding: "5px 1px"}}>
									<Box fontWeight="fontWeightBold" m={1}>
										Para cualquier consulta comunicarse al siguiente correo:
										<Link href="#"
										style={{
											padding: "1px 1px",
											backgroundColor: "white",
											margin: "4px"
										}}>
											spa@inf.utfsm.cl
										</Link>
									</Box>
										
									</Typography>
									

								</CardContent>
								
								
							</Card>					

				</CardContent>

				
    			</Card>
				
				<Grid
				container
				direction="column"
				alignItems="center"
				style={{
					borderRadius: 5,
					
					padding: "13px 100px",
					fontSize: "20px",
					margin: "5px"
				}}>
									
					<ButtonGroup variant="contained" size="large" color="primary" alignItems="center" aria-label="contained primary button group">
						<Button 
						style={{
							backgroundColor: "#009879",
						}}>1</Button>
						<Button style={{
							backgroundColor: "#009879",
						}}>2</Button>
						<Button style={{
							backgroundColor: "#009879",
						}}>3</Button>
					</ButtonGroup>
							
				</Grid>

				


			</Grid>
			

			

			

			
			

		</div>
    );
}

export default Home;
