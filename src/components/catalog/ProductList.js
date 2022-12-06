import React from 'react';
import {useSelector} from "react-redux";
import ProductItem from "./ProductItem";

const ProductList = () => {
    const productList = useSelector(state => state.productsData.collection);
    return (
        <>
            <ul style={{display: "flex", flexWrap: 'wrap'}}>
                {productList.map(product => {
                    return <ProductItem key={product.id} {...product}/>
                })}
            </ul>
        </>

    );
}

export {ProductList};