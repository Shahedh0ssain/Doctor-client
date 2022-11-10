import React from 'react';

const From = () => {
    return (
        <section style={{
            background: `url(/appointment.png)`
        }} className='px-10 md:px-0  py-20 md:py-32 '>
            <div className='w-full md:w-2/4 mx-auto  flex flex-col'>
                <h5 className='text-white text-xl'>Contact Us</h5>
                <h1 className='text-white text-3xl mb-2'>Stay connected with us</h1>
                <input type="text" placeholder="Search…" className="input input-bordered mb-2" />
                <input type="text" placeholder="Search…" className="input input-bordered mb-2" />
                <textarea className="textarea textarea-bordered mb-2" placeholder="Bio"></textarea>
                <div><button className='btn btn-primary'>Submit</button></div>
            </div>
        </section>
    );
};

export default From;