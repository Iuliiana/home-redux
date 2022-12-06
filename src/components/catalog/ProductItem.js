import React from 'react';
import propTypes from "prop-types";

ProductItem.defaultProps = {
    preview_image: process.env.REACT_APP_URL + '/brackley-photographer.png',
};

function ProductItem(props) {
    //ru в константы env  можно было
    let formatter = new Intl.NumberFormat("ru", {
        style: "currency",
        currency: props.currency,
        minimumFractionDigits: 0,
        currencyDisplay: 'symbol'
    });

    const isPromoItem = props.promo !== null && new Date() < new Date(props.promo?.active_to);

    return (
        <div className="card" style={{width: '18rem'}}>
            {isPromoItem && <div className="promo-percent">{props.promo?.price?.percent}%</div>}
            <img className="card-img-top" src={props.preview_image} alt={props.name}/>
            <div className="card-body">
                <h5 className="card-title">
                    {isPromoItem
                        ? <>
                            <span className="old-price"><s>{formatter.format(Number(props.promo?.price?.old_price))}</s></span>
                            <span
                                className="current-price">{formatter.format(Number(props.promo?.price?.current_price))}</span>
                        </>
                        : <span className="current-price">{formatter.format(Number(props.price))}</span>
                    }
                </h5>
                <a href={props.slug}>{props.name}</a>
            </div>
        </div>
    );
}


ProductItem.propTypes = {
    id: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
    is_active: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    slug: propTypes.string.isRequired,
    price: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
    currency: propTypes.string.isRequired,
    promo: propTypes.oneOfType([
        propTypes.oneOfType([propTypes.any]),
        propTypes.objectOf(propTypes.shape({
            id: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
            active_to: propTypes.string.isRequired,
            type_id: propTypes.number.isRequired,
            price: propTypes.objectOf(propTypes.shape({
                current_price: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
                old_price: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
                percent: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
            }))
        }))
    ]),
    preview_image: propTypes.string,
    categoryIds: propTypes.arrayOf(propTypes.oneOfType([propTypes.string, propTypes.number])),
};

export default ProductItem;