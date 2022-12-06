// eslint-disable-next-line no-unused-vars
import React from 'react';
import {ADD_PRODUCT_ITEM} from "../actions/productActions";
import {productList} from "../../data/data";
import uuid from "react-uuid";
import slugify from "react-slugify";


const initialState = productList;

function ProductListReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT_ITEM:
            const item = action.payload;
            return {
                ...state, ['collection']: [...state.collection,
                    {
                        ...item,
                        id: uuid(),
                        slug: slugify(item.name),
                        promo: item.is_promo ? {...item.promo, id: uuid()} : null
                    }]
            };
        default:
            return state;
    }
}


export default ProductListReducer;