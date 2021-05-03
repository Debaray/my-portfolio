import React, { useEffect } from 'react';
import cleanIt from '../../../images/projects/cleanit.png'
import groceryDaily from '../../../images/projects/groceryDaily.png'
import hungryMonster from '../../../images/projects/hungryMonster.png'
import SingleProject from '../../Projects/SingleProject/SingleProject';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './HomeProject.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';

const HomeProjects = () => {
    useEffect(() =>{
        Aos.init({duration: 1500})
    },[])

    const projectDetails = [
        {
            title: "Clean It",
            image: cleanIt,
            liveLink: "https://complete-website-238b1.web.app/",
            githubLink:"https://github.com/Debaray/clean-it-client",
            description:"Complete MERN stack website for a Landry Service Company.",
            technologyUsed:"React.js, Node.js, Bootstrap, Firebase, MongoDB, Heroku, REST-API.",
            listItem1:"Customer can place services as per their need, payment with cards, and post review about the services.",
            listItem2:"Admin can add new services, manage services, update services status, add new admins to the system and check who places booking from the dashboard.",
            listItem3:"Separate user interface and functionality access for both admin and customer from their dashboard."
        },
        {
            title: "Grocery Daily",
            image: groceryDaily,
            liveLink: "https://full-stack-client-1ae48.web.app/",
            githubLink:"https://github.com/Debaray/grocery-daily-client",
            description:"Complete MERN stack website for those who are busy with their stuff. The company is ready to serve them with their daily grocery.",
            technologyUsed:"React.js, Node.js, Bootstrap, Firebase, MongoDB, Heroku, REST-API.",
            listItem1:"Customers can buy their daily necessary groceries from this website easily at a reasonable price.Before buying customers need to log in to the website.",
            listItem2:"After placing order customers can see how many products he/she ordered in the order list.",
            listItem3:"Admin can add or manage products."
        },
        {
            title: "Hungry Monster",
            image: hungryMonster,
            liveLink: "https://debaray.github.io/hungry-monster/",
            githubLink:"https://github.com/Debaray/hungry-monster",
            description:"This website is developed for food lovers. Basically for those who are always hungry and don’t understand what to eat.",
            technologyUsed:"HTML, Bootstrap,JavaScript, Netlify, REST-API.",
            listItem1:"Users can search their food by keyword.",
            listItem2:"They will also find the recipes for their searched food.",
            listItem3:""
        }
    ]
    return (
        <div className="container">
            <h2 data-aos="fade-down" className="text-center home-project-text-style">Projects</h2>
            <hr className="mb-5"/>
            <div className="home-project-style">
                {
                    projectDetails.map(project => <SingleProject project={project}></SingleProject>)
                }
            </div>
            <Link to="/projects"><Button variant="success" className="p-2 mt-4 home-project-button d-flex align-items-center justify-content-center" block>View All Projects  &nbsp; <FontAwesomeIcon icon={faArrowRight} /></Button></Link>


        </div>
    );
};

export default HomeProjects;