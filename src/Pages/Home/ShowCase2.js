import React from 'react';

const ShowCase2 = () => {
    return (
        <section >
            <div style={{
                background: `url(/appointment.png)`
            }} className="flex justify-center items-center py-10 px-5">
                <div className='flex-1'>
                    <img src="/doctor.png" alt="Album" />
                </div>
                <div className="flex-1">
                    <h2 className="card-title text-white">Exceptional Dental Care, on Your Terms</h2>
                    <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Get Start</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowCase2;