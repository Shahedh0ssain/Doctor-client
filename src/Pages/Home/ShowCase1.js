import React from 'react';

const ShowCase1 = () => {
    return (
        // <div className="card lg:card-side bg-base-100  px-32 my-32 ">
        //     <figure className=' w-1/2'>
        //         <img className='max-h-full h-80' src="/treatment.png" alt="Album" />
        //     </figure>
        //     <div className="card-body w-1/2">
        //         <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
        //         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
        //         <div className="card-actions justify-start">
        //             <button className="btn btn-primary">Get Start</button>
        //         </div>
        //     </div>
        // </div>
        <section className='my-32 px-2 md:px-10'>
            <div className=" flex flex-col md:flex-row items-center">
                <figure className=''>
                    <img className='w-full h-full md:h-[400px] px-2 md:px-10' src="/treatment.png" alt="Album" />
                </figure>
                <div className="flex-1 px-2 md:px-10">
                    <h2 className=" text-3xl pb-5">Exceptional Dental Care, on Your Terms</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                </div>
            </div>
        </section>
    );
};

export default ShowCase1;