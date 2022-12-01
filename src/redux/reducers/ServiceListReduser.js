// eslint-disable-next-line no-unused-vars
import React from 'react';
import {serviceList} from "../../data/data";
import uuid from "react-uuid";
import {
    ADD_SERVICE_ITEM,
    DELETE_SERVICE_ITEM,
    EDIT_SERVICE_ITEM
} from "../actions/serviceListActions";

const initialState = serviceList;

function ServiceListReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SERVICE_ITEM:
            const {name, price} = action.payload;
            return [...state, {id: uuid(), name: name, price: price}];
        case DELETE_SERVICE_ITEM:
            const id = action.payload;
            const index = state.findIndex(service => service.id === id);
            state.splice(index, 1)
            return [...state];
        case EDIT_SERVICE_ITEM:
            const serviceItem = action.payload;
            const serviceIndex = state.findIndex(service => service.id === serviceItem.id);
            state[serviceIndex] = {...serviceIndex, ...serviceItem}
            return [...state];
        default:
            return state;
    }
}

export default ServiceListReducer;