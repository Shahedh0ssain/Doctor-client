import React from 'react';
import Service from './Service';

const Services = () => {
    return (
        <div className='px-10 my-32'>
            <h5 className='text-center text-xl'> OUR SERVICES</h5>
            <h1 className='text-center text-3xl'>Services We Provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 py-10'>
                <Service img='/whitening.png'></Service>
                <Service img='/whitening.png'></Service>
                <Service img='/whitening.png' ></Service>
            </div>
        </div>
    );
};

export default Services;