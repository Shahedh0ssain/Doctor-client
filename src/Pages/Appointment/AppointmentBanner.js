
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date,setDate}) => {
   

    // const classNames: ClassNames = {
    //     ...styles,
    //     head: 'custom-head'
    // };
   

    return (
        <div className="hero min-h-screen ">
            <div className=" hero-content flex-col lg:flex-row-reverse ">
                <img src="/chair.png" className="w-[500px]  " />
                <div className='w-full'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                        
                </div>
             
            </div>
        </div>
    );
};

export default AppointmentBanner;