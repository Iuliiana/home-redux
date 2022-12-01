import React from 'react';
import {ServiceItem} from "./ServiceItem";
import {useSelector} from "react-redux";


const ServiceList = () => {
    const services = useSelector((state) => state.servicesList)
    return (
        <>
            <ul>
                {services.map(service => {
                    return <ServiceItem key={service.id} {...service}/>
                })}
            </ul>
        </>
    );
}

export {ServiceList};
