import React from 'react';

const ShowCase2 = () => {
    return (
        <section >
            <div style={{
                background: `url(/appointment.png)`
            }} className=" h-min flex justify-center items-center p-5 md:p-0 lg:p-0  my-32 ">
                <div className='hidden md:block flex-1'>
                    <img src="/doctor-small.png" alt="Album" className='max-h-full h-auto mt-[-100px]' />
                </div>
                <div className="flex-1">
                    <h2 className="card-title text-white text-4xl">Exceptional Dental Care, on Your Terms</h2>
                    <p className='text-white pb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Get Start</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowCase2;