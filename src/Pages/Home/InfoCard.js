import React from 'react';

const infoCard = ({ img ,colorClass}) => {
    console.log(img)
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${colorClass}`}>
            <figure className='p-5'><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white">New album is released!</h2>
                <p className='text-white'>Click the button to listen on Spotiwhy app.</p>
              
            </div>
        </div>
    );
};

export default infoCard;