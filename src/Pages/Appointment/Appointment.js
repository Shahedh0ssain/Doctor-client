import React, { useState } from 'react';
import AppoinmentServices from './AppoinmentServices';
import AppointmentBanner from './AppointmentBanner';

const Appointment = () => {

    const [date, setDate] = useState(new Date());

    const tretmenttBtn = ()=>{
       console.log('Click');
    }

    return (
        <div className='mx-10'>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AppoinmentServices tretmenttBtn={tretmenttBtn} date={date} setDate={setDate}></AppoinmentServices>
        </div>
    );
};

export default Appointment;