import React from "react";
import styleAbout from "./About.module.css";
import Me from "../img/hoja de vida.png";
import flecha1 from "../img/FlechaLado.gif";
import flecha2 from "../img/FlechaAbajo.gif";
import { FaDownload } from "react-icons/fa";

const About = () => {

    const cvFileName =  'CV.pdf';
    const cvDownloadLink = `/assets/${cvFileName}`;



    return (
        <body className={styleAbout.Container}>

            <div className={styleAbout.About}> 
               <h1>Acerca de mi</h1> 
               <a href={cvDownloadLink} download> <FaDownload className={styleAbout.Icon} /></a> <span>Descarga mi hoja de vida</span>           
            </div>
            

            <div className={styleAbout.Me}>
            <img src={Me} alt="acerca de mi" />
            <p>Durante más de 16 años, mi carrera en electrónica y sistemas siempre incluyó referencias a la programación. En los últimos dos años, he llevado esta referencia a la práctica, adquiriendo habilidades específicas en desarrollo web y convirtiéndome en un desarrollador full-stack</p>
            </div>
                      

            <div className={styleAbout.Presentacion}>
            <p>Soy desarrollador Full-Stack con un enfoque en la creacion de aplicaciones web creativas y funcionales. Graduado de Henry un bootCamp de mas de 800 horas de programacion, trabajando con varias tecnoclogias</p>
            <img src={flecha1} alt="presentacion " />
            <p>Mi objetivo es combinar mi pasion por la programacion con mi habilidad para desarrollar soluciones innovadoras que satisfagan las necesidades del usuario</p>
            <img src={flecha2} alt="FlechaAbajo" />
            </div>

            <div className={styleAbout.Presentacion2}>
            <p>Estoy buscando oportunidades para aplicar y expandir mis habilidades como desarrollador en un etorno colaborativo. Estoy emocionado por contribuir a proyectos significativos y seguir aprendiendo en un entorno profesional</p>
            </div>

        </body>
    );
};

export default About;