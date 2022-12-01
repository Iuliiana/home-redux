import React from 'react';
import ServiceForm from "../components/editing/ServiceForm";
import {ServiceList} from "../components/editing/ServiceList";


const Editing = () => {
    return (
        <>
            <ServiceForm/>
            <ServiceList/>
        </>
    );
}

export {Editing};