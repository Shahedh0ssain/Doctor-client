import { format } from 'date-fns/esm';
import React from 'react';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const BookInfo = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        const { _id, name, slots } = treatment;
        console.log(_id, name, slot);
        setTreatment(null);
    }
    return (

        <div>
            {/* The button to open modal */}
            {/* <label htmlFor="booking-modal-6" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <form onSubmit={BookInfo} className="modal-box grid grid-cols justify-items-center gap-4">

                    <label htmlFor="booking-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary"> Booking for : {treatment.name}</h3>

                    <input type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xs" />
                    <select name='slot' className="select select-bordered w-full max-w-xs">

                        {
                            slots.map(slot => <option  value={slot}>{slot}</option>)
                        }
                    </select>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input type="submit" value="Submit" placeholder="Type here" className="btn btn-secondary w-full max-w-xs" />

                    {/* <label  type="submit" value="Submit" htmlFor="booking-modal-6" className="btn btn-secondary w-full max-w-xs ">Book Now</label> */}


                </form>
            </div>
        </div>
    );
};

export default BookingModal;