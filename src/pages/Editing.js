import React from 'react';
import ServiceForm from "../components/editing/ServiceForm";
import {ServiceList} from "../components/editing/ServiceList";
import ServiceFilter from "../components/editing/ServiceFilter";


const Editing = () => {
    return (
        <>
            <ServiceFilter/>
            <ServiceForm/>
            <ServiceList/>
        </>
    );
}

export {Editing};