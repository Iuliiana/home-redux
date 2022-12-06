import React from 'react';
import FormInput from "./FormInput";
import {Input} from "../../../ui/input/Input";
import {SAVE_PROMO_PRODUCT_ITEM} from "../../../redux/actions/productActions";
import {useDispatch} from "react-redux";

const FormPromoData = (props) => {
    const {
        promoList,
        promoItem
    } = props

    const dispatch = useDispatch();


    const handleChangeInput = (e) => {
        dispatch({
            type: SAVE_PROMO_PRODUCT_ITEM,
            payload: {
                promoFieldName: e.target.name,
                promoFieldValue: e.target.value
            }
        });
    }
    return (
        <div className="form-row">
            <FormInput>
                Акция действует до
                <Input type="date" className="form-control" name="active_to"
                       value={promoItem.active_to}
                       onChange={(e) => handleChangeInput(e)}
                       placeholder="Акция действует до" required/>
            </FormInput>

            <div className="form-group col-md-6">
                <label>Название акции
                    <select className="form-control" name="type_id" value={promoItem.type_id}
                            onChange={(e) => handleChangeInput(e)}>
                        {promoList.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
                    </select>
                </label>
            </div>
            <p>Цены</p>
            <FormInput>
                <Input type="number" className="form-control" name="old_price"
                       value={promoItem.price.old_price}
                       onChange={(e) => handleChangeInput(e)}
                       placeholder="Старая цена" required/>
            </FormInput>
            <FormInput>
                <Input type="number" className="form-control" name="percent"
                       value={promoItem.price.percent}
                       onChange={(e) => handleChangeInput(e)}
                       placeholder="Скидка в процентах" required/>
            </FormInput>
            <FormInput>
                <Input type="number" className="form-control" name="current_price"
                       value={promoItem.price.current_price}
                       onChange={(e) => handleChangeInput(e)}
                       placeholder="Новая цена по акции" required/>
            </FormInput>
        </div>
    );
}

export {FormPromoData};