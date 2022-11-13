import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppoinment = () => {

    const [appoinment, setAppionment] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppionment(data))
        }
    }, [user])
    console.log(appoinment);

    return (
        <div className=''>
            <h1 className=' text-2xl'>My Appoinment :{appoinment.length} </h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            appoinment.map((a,index)=><tr>
                                <th>{index + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.patient}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinment;