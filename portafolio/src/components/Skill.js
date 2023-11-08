import React from "react";
import styleSkill from "./Skill.module.css";
import skills from "../img/Skills.png";


const Skill = () => {
    return (
        <div className={styleSkill.Skill}>
            <img src={skills} alt="Habalilidades"></img>
        </div>
    )
}


export default Skill;