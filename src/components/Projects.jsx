import React from "react";
import PROJECTS from "../data/projects";

const Project = props => {
    const {title, description, link, image} = props.project;
    return(
        <div style={{display:'inline-block', width: 300, margin:10}}>
            <h2>{title}</h2>
            <img src={image} alt="Portfolio" style={{width:200, height:120}}/>
            <p>{description}</p>
            <a href={link} >{link}</a>
        </div>
    );
}


const Projects = () =>  (
    <div>
        <h2>Heighlighted Projects</h2>
        <div>
            {PROJECTS.map( item => <Project key={item.id} project={item}/>)} 
        </div>
    </div>
)

export default Projects;