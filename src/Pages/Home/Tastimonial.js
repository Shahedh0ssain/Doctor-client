import React from 'react';
import Review from './Review';

const Tastimonial = () => {
    return (
        <section  className='px-5 py-10'>
            <h5 className='text-center'>Testimonial</h5>
            <h1 className='text-center'>What out Patiants</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 py-10'>
                <Review></Review>
                <Review></Review>
                <Review></Review>
            </div>
        </section>
    );
};

export default Tastimonial;