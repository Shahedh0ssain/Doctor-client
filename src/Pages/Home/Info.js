import React from 'react';
import InfoCard from './InfoCard'
// import clock from '../../assets/icons'//

const info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 px-2 md:px-10 my-10'>
            <InfoCard title='a'colorClass='bg-gradient-to-r from-primary to-secondary' img='/clock.svg'></InfoCard>
            <InfoCard title='c'colorClass='bg-gradient-to-r from-primary to-secondary' img='/marker.svg' ></InfoCard>
                <InfoCard title='v'colorClass='bg-gradient-to-r from-primary to-secondary' img='/phone.svg' ></InfoCard>
        </div>
    );
};

export default info;