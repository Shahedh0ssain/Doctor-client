import React from 'react';
import Review from './Review';

const Tastimonial = () => {
    const reviews = [
        {
            id:1,
            name:"Winson Herry",
            area:'California',
            img:'/people1.png',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id:1,
            name:"Winson Herry",
            area:'California',
            img:'/people2.png',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id:1,
            name:"Winson Herry",
            area:'California',
            img:'/people3.png',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        }
    ]
    return (
        <section className='px-10 my-32'>
            <div className='flex justify-between items-center'>
                <div>
                    <h5 className=' text-xl'>Testimonial</h5>
                    <h1 className=' text-3xl'>What out Patiants</h1>
                </div>
                <div>
                    <img className='w-16 md:w-44' src="/quote.svg" alt="" srcSet="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 py-10'>
               {
                reviews.map(review => <Review
                  key={review.id}
                  review={review}

                ></Review>)
               }
                
            </div>
        </section>
    );
};

export default Tastimonial;