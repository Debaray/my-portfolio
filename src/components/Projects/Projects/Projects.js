import React from 'react';
import cleanIt from '../../../images/projects/cleanit.png'
import groceryDaily from '../../../images/projects/groceryDaily.png'
import soccerMania from '../../../images/projects/soccerMania.png'
import gotchaRides from '../../../images/projects/gotcharides.png'
import hungryMonster from '../../../images/projects/hungryMonster.png'
import SingleProject from '../SingleProject/SingleProject';
import './Projects.css';
const Projects = () => {
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
            title: "Soccer Maina",
            image: soccerMania,
            liveLink: "https://friendly-kilby-270bfa.netlify.app/",
            githubLink:"https://github.com/Debaray/soccer-mania",
            description:"This website was mainly developed for soccer fans.",
            technologyUsed:"React.js, Bootstrap, Netlify, REST-API.",
            listItem1:"Users can know about soccer league history.",
            listItem2:"users can know about when they founded and which country started this league.",
            listItem3:""

        },
        {
            title: "Gotcha Rides",
            image: gotchaRides,
            liveLink: "https://react-auth-784f7.web.app/",
            githubLink:"https://github.com/Debaray/gotcha-rides",
            description:"Front-End Website Design for a Vehicle Service Company.",
            technologyUsed:"React.js, Bootstrap, Firebase, REST-API.",
            listItem1:"Users can search by their pickup and destination location then see available rides.",
            listItem2:"Bus, Train, Bike, Car service are available",
            listItem3:"Users should log in for getting the service. Users can log in 3 ways."
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
            <h2 className="text-center project-text-style">Projects</h2>
            <hr className="mb-5"/>
            <div className="project-style">
                {
                    projectDetails.map(project => <SingleProject project={project}></SingleProject>)
                }
            </div>


        </div>
    );
};

export default Projects;