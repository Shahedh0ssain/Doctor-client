import React, { useEffect, useState } from 'react';
import Service from './Service';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns/esm';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AppoinmentServices = ({ date }) => {

    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    const {data:services,isLoading,refetch} = useQuery(['available',formattedDate],()=>fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
        );

        if(isLoading){
           return <Loading></Loading>
        }
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formattedDate])

    let footer = <p>Please pick a day.</p>;
    if (date) {
        footer = <p>{format(date, 'PP')}.</p>;
    }
    return (
        <div>
            <h2 className='text-center text-xl '>Aviable appoinment services : {footer} </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
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
                refetch = {refetch}

            ></BookingModal>}
        </div>
    );
};

export default AppoinmentServices;