import React, { useEffect, useState } from 'react';
import Service from './Service';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns/esm';
import BookingModal from './BookingModal';

const AppoinmentServices = ({ date, setDate }) => {

    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    let footer = <p>Please pick a day.</p>;
    if (date) {
        footer = <p>{format(date, 'PP')}.</p>;
    }
    return (
        <div>
            <h2 className='text-center text-xl '>Aviable appoinment services : {footer} </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                    
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}

                    ></Service>)
                }

            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}

            ></BookingModal>}
        </div>
    );
};

export default AppoinmentServices;