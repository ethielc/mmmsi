import React from 'react';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import Pagination from '../components/Pagination';
import Hechas from '../components/Hechas';
import Info from '../components/Info';
import Detallep from '../components/Detallep';
import './Postulaciones.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';


function Postulaciones() {
    const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(false);
    const [postsPerPage] = useState(6);

    const posts = [
        {
            "id": 1,
            "ramo": "Algoritmos y Complejidad",
            "profesor": "Diego Arroyuelo",
            "pago": "$60000",
            "vacantes": "3",
            "semestre": "Par e impar",
			"sigla": "INF-221",
            "estado": "Aceptado",
            "tipo": "Laboratorio"
        },
        {
            "id": 2,
            "ramo": "Diseño Interfaces Usuarias",
            "profesor": "Lioubov Dombrovskaia",
            "pago": "$55000",
            "vacantes": "2",
            "semestre": "Par",
			"sigla": "INF-322",
            "estado": "En espera",
            "tipo": "Cátedra"
        },
        {
            "id": 3,
            "ramo": "Lenguajes de Programación",
            "profesor": "José Luis Marti",
            "pago": "$50000",
            "vacantes": " 2",
            "semestre": "Par e impar",
			"sigla": "INF-253",
            "estado": "En espera",
            "tipo": "Cátedra"
        }
	];
	
	//Current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
	
    const [clickedRamo, SetClickedRamo] = useState(posts[0]);

    //Set page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    //Cargar info adicional ramo
    const detalleRamo = (post) => SetClickedRamo(post);

    return (
		<div className="postular">
			<Navbar />
            <Grid
			container
			direction="column"
			alignItems="center"
			>
                <h1 style={{color: "black"}}>Mis postulaciones</h1>
                <Breadcrumbs aria-label="breadcrumb" >
					<Link color="inherit" href="/home" border="solid" style={{color: "black", fontSize:"16px"}}>
                        <Typography variant="subtitle2"  style={{color: "black", fontSize:"16px"}}>
                            <Box fontWeight="fontWeightBold" m={2}>
                                >Home
                            </Box>
                        </Typography>
					</Link>
					
					<Typography variant="subtitle2"  style={{color: "black", fontSize:"16px"}}>
                        <Box fontWeight="fontWeightBold" m={1}>
                            Postulaciones
                        </Box>
                    </Typography>
				</Breadcrumbs>
            </Grid>
            

			<Info
            
            subtitulo="Aca puedes consultar el estado de tus postulaciones y ver información de los ramos"
            />
			<div className="container-postulaciones">
				{/*<div className="info-usuario">
					<Usuario />
                </div>*/}
				<div className="container-tabla">
					<Hechas posts={currentPosts} loading={loading} detalleRamo={detalleRamo}/>
					<Pagination
						postsPerPage={postsPerPage}
						totalPosts={posts.length}
						paginate={paginate}
					/>
				</div>
                <div className="container-detalle-postulaciones">
                    <Detallep asignatura={clickedRamo} />
                </div>
			</div>
		</div>
    );
}

export default Postulaciones;
