import React from 'react';

const ShowCase1 = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl py-10 px-5">
            <figure className='h-80 w-1/2'>
                <img src="/treatment.png" alt="Album" />
            </figure>
            <div className="card-body w-1/2">
                <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">Get Start</button>
                </div>
            </div>
        </div>
    );
};

export default ShowCase1;