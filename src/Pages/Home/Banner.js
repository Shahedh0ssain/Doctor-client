import React from 'react';
// vercel test
const Banner = () => {
    return (
        <div>
            <div style={{
                background: `url(/bg.png)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'

            }}  className="hero md:min-h-screen bg-base-200 px-2 md:px-10">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img srcSet="/chair.png" className="w-[500px]  mr-5" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;