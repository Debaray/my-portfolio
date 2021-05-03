import React from 'react';
import Header from '../Header/Header';
import HomeProjects from '../HomeProjects/HomeProjects';
import HomeSkills from '../HomeSkills/HomeSkills';
import ContactMe from '../../ContactMe/ContactMe';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <HomeSkills></HomeSkills>
            <HomeProjects></HomeProjects>
            <ContactMe></ContactMe>
           
        </div>
    );
};

export default Home;