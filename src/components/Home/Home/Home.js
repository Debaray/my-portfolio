import React from 'react';
import Header from '../Header/Header';
import HomeProjects from '../HomeProjects/HomeProjects';
import HomeSkills from '../HomeSkills/HomeSkills';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HomeSkills></HomeSkills>
            <HomeProjects></HomeProjects>
           
        </div>
    );
};

export default Home;