import React from 'react';
import {ProductForm} from "../components/catalog/ProductForm";
import {ProductList} from "../components/catalog/ProductList";

const Catalog = () => {
    return (
        <>
            <ProductForm/>
            <hr/>
            <ProductList/>
        </>
    );
}

export {Catalog};