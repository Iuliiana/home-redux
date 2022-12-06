import React from 'react';
import {Input} from "../../ui/input/Input";
import {Button} from "../../ui/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {
    ADD_SERVICE_ITEM,
    EDIT_SERVICE_ITEM,
    RESET_STATE_SERVICE_ITEM,
    SAVE_SERVICE_ITEM
} from "../../redux/actions/servicesActions";
import {isEmptyObjParams} from "../../helper";


const ServiceForm = () => {
    const dispatch = useDispatch();
    const services = useSelector((state) => state);

    const handleInputChange = (e) => {
        const target = e.target;
        const value = (target.type !== 'number') ? target.value : Number(target.value)

        dispatch({
            type: SAVE_SERVICE_ITEM,
            payload: {
                fieldName: target.name,
                fieldValue: value
            },
        });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!isEmptyObjParams(services.serviceItem)) {
            if (services.serviceItem.id === 0) {
                dispatch({
                    type: ADD_SERVICE_ITEM,
                    payload: services.serviceItem
                });
            } else {
                dispatch({
                    type: EDIT_SERVICE_ITEM,
                    payload: services.serviceItem
                });
            }
            dispatch({type: RESET_STATE_SERVICE_ITEM});
        }
    }

    const handleCancelEdit = (e) => {
        e.preventDefault();
        dispatch({type: RESET_STATE_SERVICE_ITEM});
    }


    return (
        <form onSubmit={(e) => handleFormSubmit(e)}>
            <Input name="name" type="text" required placeholder="name" onChange={(e) => handleInputChange(e)}
                   value={services.serviceItem.name}/>
            <Input name="price" type="number" required placeholder="price" className={"number-default"}
                   onChange={(e) => handleInputChange(e)} value={services.serviceItem.price}/>
            <Button type="submit">Save</Button>
            {services.serviceItem.id !== 0 && <Button onClick={(e) => handleCancelEdit(e)}>Cancel</Button>}
        </form>
    );
}

export default ServiceForm;