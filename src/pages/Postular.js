import React from 'react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Info from '../components/Info';
import Posts from '../components/Posts';
import Pagination from '../components/Pagination';
import Detalle from '../components/Detalle';
import Elecciones from '../components/Elecciones';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

import './Postular.css';



function Postular() {
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
            "tipo": "Laboratorio"
        },
        {
            "id": 2,
            "ramo": "Bases de Datos",
            "profesor": "Marcelo Mendoza",
            "pago": "$45000",
            "vacantes": "2",
            "semestre": "Par e impar",
            "sigla": "INF-239",
            "tipo": "Cátedra"        },
        {
            "id": 3,
            "ramo": "Diseño Interfaces Usuarias",
            "profesor": "Lioubov Dombrovskaia",
            "pago": "$55000",
            "vacantes": "2",
            "semestre": "Par",
            "sigla": "INF-322",
            "tipo": "Cátedra"        },
        {
            "id": 4,
            "ramo": "Estadística Computacional",
            "profesor": "Ricardo Ñanculef",
            "pago": "$50000",
            "vacantes": "1",
            "semestre": "Par e impar",
            "sigla": "INF-280",
            "tipo": "Cátedra"
        },
        {
            "id": 5,
            "ramo": "Estructuras de Datos",
            "profesor": "Diego Arroyuelo",
            "pago": "$50000",
            "vacantes": "3",
            "semestre": "Par e impar",
            "sigla": "INF-134",
            "tipo": "Cátedra"
        },
        {
            "id": 6,
            "ramo": "Estructuras Discretas",
            "profesor": "Claudio Lobos",
            "pago": "$50000",
            "vacantes": "1",
            "semestre": "Par e impar",
            "sigla": "INF-152",
            "tipo": "Cátedra"
        },
        {
            "id": 7,
            "ramo": "Informática Teórica",
            "profesor": "Andrés Moreira",
            "pago": "$50000",
            "vacantes": "1",
            "semestre": "Par e impar",
            "sigla": "INF-155",
            "tipo": "Cátedra"
        },
        {
            "id": 8,
            "ramo": "Inteligencia Artificial",
            "profesor": "Elizabeth Montero",
            "pago": "$55000",
            "vacantes": "1",
            "semestre": "Par",
            "sigla": "INF-295",
            "tipo": "Laboratorio"
        },
        {
            "id": 9,
            "ramo": "Investigación de Operaciones",
            "profesor": "Nicolás Rojas",
            "pago": "$50000",
            "vacantes": "2",
            "semestre": "Impar",
            "sigla": "INF-293",
            "tipo": "Cátedra"
        },
        {
            "id": 10,
            "ramo": "Lenguajes de Programación",
            "profesor": "José Luis Marti",
            "pago": "$50000",
            "vacantes": " 2",
            "semestre": "Par e impar",
            "sigla": "INF-253",
            "tipo": "Cátedra"
        },
        {
            "id": 11,
            "ramo": "Sistemas Distribuidos",
            "profesor": "Erika Rosas",
            "pago": "$55000",
            "vacantes": "2",
            "semestre": "Par",
            "sigla": "INF-343",
            "tipo": "Laboratorio"
        },
        {
            "id": 12,
            "ramo": "Sistemas Operativos",
            "profesor": "Victor Tapia",
            "pago": "$50000",
            "vacantes": "1",
            "semestre": "Par e impar",
            "sigla": "INF-246",
            "tipo": "Cátedra"
        }
	];
	
	//Current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
	
    const [clickedRamo, SetClickedRamo] = useState(posts[0]);
    const [eleccion, SetEleccion] = useState({
        "ramo": "",
        "sigla": ""
    });

    //Set page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	
	//Cargar info adicional ramo
    const detalleRamo = (post) => SetClickedRamo(post);
    
    //Marcar ramo para postular
    const elegido = (materia) => SetEleccion(materia);

    return (
		<div className="postular">
			<Navbar />
            <Grid
			container
			direction="column"
			alignItems="center"
			>
                <h1 style={{color: "black"}}>Procesos activos</h1>
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
                            Postular
                        </Box>
                    </Typography>
				</Breadcrumbs>
            </Grid>

            
			<Info
            
            subtitulo="Aca puedes postular a las ayudantías vigentes y ver su información"
            />
			<div className="container-postular">
				<div className="container-tabla">
					<Posts posts={currentPosts} loading={loading} detalleRamo={detalleRamo} elegido={elegido}/>
					<Pagination
						postsPerPage={postsPerPage}
						totalPosts={posts.length}
						paginate={paginate}
					/>
				</div>
				<div className="container-detalle">
					<Detalle asignatura={clickedRamo}/>
                    <Elecciones eleccion={eleccion}/>
                    <div className="container-btn-postular">
                        <a href="/home" className="btn-postular">Postular</a>
                    </div>
				</div>
			</div>
		</div>
    );
}

export default Postular;
