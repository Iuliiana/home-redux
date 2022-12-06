// eslint-disable-next-line no-unused-vars
import React from 'react';
import {RESET_STATE_PRODUCT_ITEM, SAVE_PRODUCT_ITEM, SAVE_PROMO_PRODUCT_ITEM} from "../actions/productActions";
import {isObject} from "../../helper";

const initialState = {
    is_active: 1,
    name: '',
    slug: '',
    price: '',
    currency: 'RUR',
    is_promo: 0,
    promo: {
        id: '',
        active_to: '',
        type_id: 2,
        price: {
            current_price: '',
            old_price: '',
            percent: ''
        }
    },
    preview_image: process.env.REACT_APP_URL + '/brackley-photographer.png',
    categoryIds: []
};

function ProductItemReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_PRODUCT_ITEM:
            let {fieldName, fieldValue} = action.payload;
            if (typeof fieldValue === 'boolean') {
                fieldValue = Number(fieldValue);
            }
            return {...state, [fieldName]: fieldValue};
        case SAVE_PROMO_PRODUCT_ITEM:
            let {promoFieldName, promoFieldValue} = action.payload;
            const promoData = state.promo;
            let result = '';
            if (promoData.hasOwnProperty(promoFieldName)) {
                result = {...promoData, [promoFieldName]: promoFieldValue}
            } else {
                Object.keys(promoData).forEach(key => {
                    if (isObject(promoData[key]) && promoData[key].hasOwnProperty(promoFieldName)) {
                        result = {...promoData, [key]: {...promoData[key], [promoFieldName]: promoFieldValue}}
                    }
                })
            }
            return {...state, promo: result};
        case RESET_STATE_PRODUCT_ITEM:
            return initialState;
        default:
            return state;
    }
}

export default ProductItemReducer;