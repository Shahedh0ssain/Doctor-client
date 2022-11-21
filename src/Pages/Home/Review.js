import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='py-5'>{review.review}</p>
                <div className="flex items-center">

                    <div className="avatar pr-5">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img className='' src={review.img} alt="" srcSet="" />
                        </div>
                    </div>
                    <div>
                        <h2 className="">{review.name}</h2>
                        <h2 className="">{review.area}</h2>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;