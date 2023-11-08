import React from "react";
import styleProject from "./Project.module.css";
import Rick from "../img/rickAndMorty.png";
import poke from "../img/pokeApi.png";
import dog from "../img/dogs.jpeg";
import videoGame from "../img/videoGames.png";
import FoodLand from "../img/logo-black.png";
import caract from "../img/caracterizacion.jpeg";
import petPasion from "../img/logo1.png";
import { FaGithub } from 'react-icons/fa';
import navegador from "../img/navegador.png";
import '@fortawesome/fontawesome-svg-core/styles.css';
import {Link} from "react-router-dom";


const Project = () => {


    const mostrarIconos = (id) => {
        document.getElementById(`iconos-${id}`).style.display = 'block';
    };
      
    const ocultarIconos = (id) => {
        document.getElementById(`iconos-${id}`).style.display = 'none';
    };

    return (
        <div className={styleProject.PContainer}> 

        <h1>
            Projectos
        </h1>

        <div className={styleProject.Project}
            onMouseOver={() => mostrarIconos(1)}
            onMouseOut={() => ocultarIconos(1)}
        >
            <img src={Rick} alt="Rick"></img>
            <h4>Este proyecto consiste en una aplicacion donde el usuario puede explorar los personajes de la serie, tambien puedes seleccionarlos en favoritos</h4>
            <p>PostgresSQL</p> <p>Sequelize</p> <p>Node.js</p><p>Express</p> <p>React</p> <p>Redux</p>
            <div className={styleProject.Iconos} id="iconos-1" >
                <a href="https://github.com/Camilop4/PI" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>

                <Link>
                    <img src={navegador} alt="Navegador" />
                </Link>
            </div>
        </div>

        <div className={styleProject.Project}
            onMouseOver={() => mostrarIconos(2)}
            onMouseOut={() => ocultarIconos(2)}
        >
            <img src={poke} alt="pokemon"></img>
            <h4>Es una aplicacion donde vas a poder encontar todos los pokemon y sus carateristicas tiene una interfaz intuitiva y accesible para todos se puede navegar entre las diversas funciones</h4>
            <p>PostgresSQL</p> <p>Sequelize</p> <p>Node.js</p><p>Express</p> <p>React</p> <p>Redux</p>
            <div className={styleProject.Iconos} id="iconos-2" >
                <a href="https://github.com/Camilop4/PI" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>

                <Link>
                    <img src={navegador} alt="Navegador" />
                </Link>
            </div>
        </div>

        <div className={styleProject.Project}
            onMouseOver={() => mostrarIconos(3)}
            onMouseOut={() => ocultarIconos(3)}
        >
            <img src={dog} alt="dogs"></img>
            <h4>En esta aplicacion aplicacion vas a poder navegar y filtrar entre los distintos clases y razas de la API de perros tambien podras agregar alguna otra raza que veas que haga falta</h4>
            <p>PostgresSQL</p> <p>Sequelize</p> <p>Node.js</p><p>Express</p> <p>React</p> <p>Redux</p>
            <div className={styleProject.Iconos} id="iconos-3" >
                <a href="https://github.com/Camilop4/PI" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>

                <Link>
                    <img src={navegador} alt="Navegador" />
                </Link>
            </div>
        </div>

        <div className={styleProject.Project}
            onMouseOver={() => mostrarIconos(4)}
            onMouseOut={() => ocultarIconos(4)}
        >
            <img src={videoGame} alt="games"></img>
            <h4>En esta aplicacion vas a poder navegar y filtrar entre los distintos video juegos de la API de VideoGames y tambien puedes agregar juegos creandolos en la aplicacion </h4>
            <p>PostgresSQL</p> <p>Sequelize</p> <p>Node.js</p><p>Express</p> <p>React</p> <p>Redux</p>
            <div className={styleProject.Iconos} id="iconos-4" >
                <a href="https://github.com/Camilop4/PI" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>

                <Link>
                    <img src={navegador} alt="Navegador" />
                </Link>
            </div>
        </div>

        <div className={styleProject.Project}
            onMouseOver={() => mostrarIconos(5)}
            onMouseOut={() => ocultarIconos(5)}
        >
            <img src={FoodLand} alt="Foodland" ></img>
            <h4>En esta aplicacion vas a encontar un E-comerce muy completo donde podras encontarar variedad de productos y agregarlos a tu carrito de compras para realizar el pedido y que te llegue a casa</h4>
            <p>PostgresSQL</p> <p>Sequelize</p> <p>Node.js</p><p>Express</p> <p>React</p> <p>Redux</p>
            <div className={styleProject.Iconos} id="iconos-5" >
                <a href="https://github.com/Camilop4/PI" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>

                <Link>
                    <img src={navegador} alt="Navegador" />
                </Link>
            </div>
        </div>

        <div className={styleProject.Project}
            onMouseOver={() => mostrarIconos(6)}
            onMouseOut={() => ocultarIconos(6)}
        >
            <img src={caract} alt="Caracterizacion"></img>
            <h4>Esta es una aplicacion realizada prara obtener datos demograficos de la zona donde se el usuario da sus datos y los datos de su nucleo familiar y el tipo clase de su vievienda</h4>
            <p>PostgresSQL</p> <p>Sequelize</p> <p>Node.js</p><p>Express</p> <p>React</p> <p>Redux</p>
            <div className={styleProject.Iconos} id="iconos-6" >
                <a href="https://github.com/Camilop4/PI" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>

                <Link>
                    <img src={navegador} alt="Navegador" />
                </Link>
            </div>
        </div>

        <div className={styleProject.Project}
            onMouseOver={() => mostrarIconos(7)}
            onMouseOut={() => ocultarIconos(7)}
        >
            <img src={petPasion} alt="PetPasion"></img>
            <h4>Es un E-comerce donde puedes encontarar variedad de productos en relacion a mascotas puedes agregar productos a tu carrito de compras filtar por nombre tener ofertas exclusivas</h4>
            <p>PostgresSQL</p> <p>Sequelize</p> <p>Node.js</p><p>Express</p> <p>React</p> <p>Redux</p>
            <div className={styleProject.Iconos} id="iconos-7" >
                <a href="https://github.com/Camilop4/PI" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>

                <Link>
                    <img src={navegador} alt="Navegador" />
                </Link>
            </div>
        </div>

        </div>
    );
};


export default Project;