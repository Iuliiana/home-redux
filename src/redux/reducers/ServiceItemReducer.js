// eslint-disable-next-line no-unused-vars
import React from 'react';
import {CHANGE_STATE_SERVICE_ITEM, RESET_STATE_SERVICE_ITEM, SAVE_SERVICE_ITEM} from "../actions/servicesActions";

const initialState = {
    id: 0,
    name: '',
    price: ''
}

function ServiceItemReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_SERVICE_ITEM:
            const {fieldName, fieldValue} = action.payload;
            return {...state, [fieldName]: fieldValue};
        case CHANGE_STATE_SERVICE_ITEM:
            const {id, name, price} = action.payload;
            return {...state, id: id, name: name, price: price}
        case RESET_STATE_SERVICE_ITEM:
            return initialState;
        default:
            return state;
    }
}

export default ServiceItemReducer;