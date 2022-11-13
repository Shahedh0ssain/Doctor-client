import { format } from 'date-fns/esm';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {toast } from 'react-toastify';

const BookingModal = ({ date, treatment, setTreatment,refetch }) => {

    const [user, loading, error] = useAuthState(auth);
    const { _id, name, slots } = treatment;
    console.log(refetch);

    const handleBooking = e => {

        e.preventDefault();

        const slot = e.target.slot.value;
        const formatteDate = format(date, 'PP');


        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatteDate,
            slot,
            patient: user?.email,
            patientName: user?.displayName,
            phone: e.target.phone.value
        }
        //data sent to database
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {   
                       
                console.log(data);

                if(data.success){

                    toast("data set success!");
                }else{
                    toast("You already have an appinment");
                }
                refetch();
                setTreatment(null);
            })

    }
    return (

        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <form onSubmit={handleBooking} className="modal-box grid grid-cols justify-items-center gap-4">

                    <label htmlFor="booking-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary"> Booking for : {treatment.name}</h3>

                    <input type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xs" />
                    <select name='slot' className="select select-bordered w-full max-w-xs">

                        {
                            slots.map(slot => <option value={slot}>{slot}</option>)
                        }
                    </select>
                    <input type="text" name='name' value={user?.displayName} readOnly disabled placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="email" value={user?.email} readOnly disabled placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input type="phone" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                    <input type="submit" value="Submit" placeholder="Type here" className="btn btn-secondary w-full max-w-xs" />

                    {/* <label  type="submit" value="Submit" htmlFor="booking-modal-6" className="btn btn-secondary w-full max-w-xs ">Book Now</label> */}
                </form>
            </div>
        </div>
    );
};

export default BookingModal;