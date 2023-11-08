import React from "react";
import styleF from "./Contact.module.css";
//import Lin from "../img/linkedin.png";
//import Git from "../img/github1.png";
//import Email from "../img/email.png";
//import whast from "../img/whastapp.png";
import {AiOutlineSend, AiFillLinkedin, AiFillGithub, AiOutlineMail} from "react-icons/ai";
import {FaWhatsapp} from "react-icons/fa"; 

const Contact = () => {
    const email = 'jcrp_2005@hotmail.com';
    return(
        <footer className={styleF.Principal}>
            <h1>Contacto</h1>
            <div className={styleF.Contenedor}>
            <form className={styleF.Form} action="https://formspree.io/f/xwkdzarz" method="POST">
                <label htmlFor="nombre">Nombre:</label> <br />
                <input type="text" name="nombre" placeholder="Ingresa tu nombre:" id="nombre"/>
                <br/>
                <br/>
                <br/>
                <br/>
                <label htmlFor="email">Email:</label> <br />
                <input type="email" name="email" placeholder="Ingresa tu E-mail" id="email"/>
                <br/>
                <br/>
                <br/>
                <br/>
                <label htmlFor="mensaje">Mensaje:</label> <br />
                <textarea name="mensaje" placeholder="Escribe tu mensaje..." cols="50" rows="5" />
                <br/>
                <button type="submit">
                    Enviar <AiOutlineSend/>
                </button>
            </form>
            <div className={styleF.Link}>
                <AiFillLinkedin className={styleF.Linke}/><a href="https://www.linkedin.com/in/jefferc-romero/" target="_blank" rel="noopener noreferrer">in/jefferc-romero/</a>
                <br/> <br/> <br/> <br/>
                <AiFillGithub className={styleF.Git}/><a href="https://github.com/Camilop4" target="_blank" rel="noopener noreferrer">github.com/Camilop4</a>
                <br/> <br/> <br/> <br/>
                <AiOutlineMail className={styleF.Email}/><a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">jcrp_2005@hotmail.com</a>
                <br/> <br/> <br/> <br/>
                <FaWhatsapp className={styleF.Wast}/><a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">(+57)3043677861</a>
            </div>
            </div>
        </footer>
    );
};


export default Contact;

