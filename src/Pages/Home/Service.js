import React from 'react';

const Service = ({ img }) => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img className='p-5' src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default Service;