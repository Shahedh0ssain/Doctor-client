import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import ShowCase1 from './ShowCase1';
import ShowCase2 from './ShowCase2';
import Tastimonial from './Tastimonial';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ShowCase1></ShowCase1>
            <ShowCase2></ShowCase2>
            <Tastimonial></Tastimonial>
        </div>
    );
};

export default Home;