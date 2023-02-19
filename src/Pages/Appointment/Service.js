import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    console.log(service);
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body flex justify-center ">
                    <h2 className="text-2xl text-center text-secondary">{name}</h2>
                    <p className='text-center'>
                        {
                            slots.length ? <span className='text-center'>{slots[0]}</span> : <span className='text-center text-red-400'>No slots avilable</span>
                        }
                    </p>
                    <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <div className="card-actions justify-center">
                       
                        <label onClick={() => setTreatment(service)}
                            disabled={slots.length === 0}
                            className="btn btn-secondary" htmlFor="booking-modal-6" >Book appoinment</label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;