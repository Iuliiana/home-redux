import React, {useEffect, useState} from 'react';
import {Input} from "../../ui/input/Input";
import {useDispatch} from "react-redux";
import {FILTER_SERVICES} from "../../redux/actions/servicesActions";

const ServiceFilter = () => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('');

    const handleSearchQuery = (e) => {
        setFilter(e.target.value);
    }

    useEffect(() => {
        dispatch({
            type: FILTER_SERVICES,
            payload: filter
        })
    }, [filter])


    return (
        <Input placeholder="Поиск" type="text" className="search" name="search" value={filter}
               onChange={(e) => handleSearchQuery(e)}/>
    );
}

export default ServiceFilter;