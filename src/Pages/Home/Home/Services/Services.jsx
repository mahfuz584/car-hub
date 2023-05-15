import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services,setServices] = useState([]);
     useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
     },[])
    return (
        <div>
            <div className='text-center w-[717px] mx-auto space-y-[20px]'>
                <p className='text-[#FF3811] font-bold text-xl'>Services</p>
                <p className='text-5xl font-bold'>Our Service Area</p>
                <p className=''>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-3 gap-y-5  px-6 py-10 rounded-lg drop-shadow-lg border-2 my-5'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service = {service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;