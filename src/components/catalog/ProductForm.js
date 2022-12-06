import React from 'react';
import {Input} from "../../ui/input/Input";
import FormInput from "./form/FormInput";
import {useDispatch, useSelector} from "react-redux";
import uuid from "react-uuid";
import {SAVE_PRODUCT_ITEM, ADD_PRODUCT_ITEM} from "../../redux/actions/productActions";
import {FormPromoData} from "./form/FormPromoData";

const ProductForm = () => {
    const productsData = useSelector(state => state.productsData);
    const productItem = useSelector(state => state.productItem);
    const dispatch = useDispatch();

    const handleChangeInput = (e) => {
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        if (e.target.hasAttribute('multiple')) {
            value = Array.from(e.target.selectedOptions, option => option.value);
        }
        dispatch({
            type: SAVE_PRODUCT_ITEM,
            payload: {
                fieldName: e.target.name,
                fieldValue: value
            }
        });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: ADD_PRODUCT_ITEM,
            payload: productItem
        });

    }

    return (
        <>
            <form className="needs-validation" onSubmit={(e) => handleFormSubmit(e)}>
                <div className="form-row">
                    <FormInput className="form-check-label">
                        Активность {' '}
                        <Input type="checkbox" className="form-check-input" name="is_active"
                               placeholder="в продаже" required onChange={(e) => handleChangeInput(e)}/>
                    </FormInput>
                    <FormInput>
                        <Input type="text" className="form-control" name="name" value={productItem.name}
                               onChange={(e) => handleChangeInput(e)}
                               placeholder="Наименование товара" required/>
                    </FormInput>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Валюта
                            <select className="form-control" name="currency" value={productItem.currency}
                                    onChange={(e) => handleChangeInput(e)}>
                                {productsData.currency.map(item => <option key={uuid()}
                                                                           value={item}>{item}</option>)}
                            </select>
                        </label>
                    </div>

                    <FormInput>
                        <Input type="number" className="form-control" name="price" value={productItem.price}
                               placeholder="Текущая цена" required onChange={(e) => handleChangeInput(e)}/>
                    </FormInput>
                </div>
                <div className="form-row">

                    <FormInput className="form-check-label">
                        Акционный товар? {' '}
                        <Input type="checkbox" className="form-check-input" name="is_promo"
                               placeholder="Акция" onChange={(e) => handleChangeInput(e)}/>
                    </FormInput>
                </div>
                {
                    Boolean(productItem.is_promo) &&
                    <FormPromoData promoList={productsData.promo_list} promoItem={productItem.promo}
                                   onChange={(e) => handleChangeInput(e)}/>
                }
                <div className="form-row">
                    <FormInput>
                        <Input type="text" className="form-control" name="preview_image"
                               value={productItem.preview_image}
                               onChange={(e) => handleChangeInput(e)}
                               placeholder="Ссылка на картинку"/>
                    </FormInput>

                    <div className="form-group col-md-6">
                        <label>Категории товара
                            <select className="form-control" name="categoryIds" multiple={true}
                                    value={productItem.categoryIds}
                                    onChange={(e) => handleChangeInput(e)}>
                                {productsData.categories.map(item => <option key={item.id}
                                                                             value={item.id}>{item.name}</option>)}
                            </select>
                        </label>
                    </div>

                </div>
                <button className="btn btn-primary" type="submit">Сохранить</button>
            </form>
        </>
    );
}
export {ProductForm};
