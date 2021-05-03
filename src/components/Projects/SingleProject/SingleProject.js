import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe} from '@fortawesome/free-solid-svg-icons';
import './SingleProject.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
const SingleProject = (props) => {
    useEffect(() =>{
        Aos.init({duration: 1500})
    },[])
    const { project } = props;
    console.log(project);
    return (
        <div data-aos="fade-up" className="row border rounded p-5 mt-5">
            <div  className="col-md-6 ">
                <a title="Live Link" href={project.liveLink} target="_blank" rel="noreferrer" >
                    <h1 className="anchor-style">{project.title}</h1></a>
                <p>{project.description}</p>
                <ul>
                   {project.listItem1? <li className="mt-3">{project.listItem1}</li> : <></>}
                   {project.listItem2? <li className="mt-3">{project.listItem2}</li> : <></>}
                   {project.listItem3? <li className="mt-3">{project.listItem3}</li> : <></>}
                </ul>
                <div>
                    <p><span style={{ fontWeight: 'bold' }}>Technology Used: </span>{project.technologyUsed}</p>
                </div>
            </div>
            <div className="col-md-6 projectImg bg-dark rounded">
                <a title="Live Link" href={project.liveLink} target="_blank" rel="noreferrer">
                    <img src={project.image} alt="" className="mt-5 img-fluid img-thumbnail rounded trans-image" />
                </a>
                <div className="text-center my-5">
                    <a href={project.liveLink} target="_blank" className="btn btn-primary mr-2 font-weight-bold" rel="noreferrer">
                        <span className="ml-2"><FontAwesomeIcon icon={faGlobe} /> Website</span>
                    </a>
                    <a href={project.githubLink}target="_blank" className="btn btn-light mr-2 font-weight-bold" rel="noreferrer">
                        <span className="ml-2"><FontAwesomeIcon icon={faGithub} /> See Code</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;