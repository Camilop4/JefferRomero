import React from "react";
import styleSkill from "./Skill.module.css";
import {FaRegCheckCircle, FaHtml5, FaReact } from "react-icons/fa";
import {FaCss3Alt, FaAngular} from "react-icons/fa6";
import {BiLogoPostgresql, BiLogoMongodb, BiLogoRedux} from "react-icons/bi";
import {SiSequelize} from "react-icons/si";
import {DiJavascript} from "react-icons/di";
import {AiFillGithub} from "react-icons/ai";
import {TbBrandNodejs} from "react-icons/tb";




const Skill = () => {
    return (
        <div className={styleSkill.Skill}>
            <h1 className={styleSkill.titulo}>Skills</h1>

            <div className={styleSkill.Soft}>
    
                <h2>SOFT SKILLS</h2>
                
                <FaRegCheckCircle />Exelente comunicacion <br />
                    <br />  
                <FaRegCheckCircle /> Buen trabajo en equipo  <br />
                    <br />
                <FaRegCheckCircle />Capacidad de adaptacion <br />
                    <br /> 
                <FaRegCheckCircle />Educacion constante  <br />
                    <br />
                <FaRegCheckCircle />Proactividad     
                
            </div>

            <div className={styleSkill.Hard}>
                <h2>HARD SKILLS</h2>
                
                
                    <FaCss3Alt className={styleSkill.Icon}/>  
                    <FaAngular className={styleSkill.Icon}/> 
                    <FaHtml5 className={styleSkill.Icon}/> 
                    <FaReact className={styleSkill.Icon}/> 
                    <BiLogoPostgresql className={styleSkill.Icon}/> 
                    <BiLogoMongodb className={styleSkill.Icon}/> 
                    <BiLogoRedux className={styleSkill.Icon}/> 
                    <SiSequelize className={styleSkill.Icon}/> 
                    <AiFillGithub className={styleSkill.Icon}/> 
                    <TbBrandNodejs className={styleSkill.Icon}/> 
                    <DiJavascript className={styleSkill.Icon}/>






            </div>
        </div>
    )
}


export default Skill;