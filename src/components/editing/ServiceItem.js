import React from 'react';
import propTypes from "prop-types";
import {Button} from "../../ui/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {
    CHANGE_STATE_SERVICE_ITEM,
    DELETE_SERVICE_ITEM,
    RESET_STATE_SERVICE_ITEM
} from "../../redux/actions/servicesActions";


const ServiceItem = (props) => {
    const {id, name, price} = props;
    const dispatch = useDispatch();
    const serviceItem = useSelector(state => state.serviceItem)
    const isCurrentItem = serviceItem.id === id;

    const handleEditingServiceItem = () => {
        if (!isCurrentItem) {
            dispatch({
                type: CHANGE_STATE_SERVICE_ITEM,
                payload: props
            })
        }
    }

    const handleDeleteServiceItem = (id) => {
        dispatch({
            type: DELETE_SERVICE_ITEM,
            payload: id
        })

        // певый вариант нажатия на крестик - удалить элемент и зачистить форму (можно просто удалить и не зачищать форму)
        if (isCurrentItem) {
            dispatch({type: RESET_STATE_SERVICE_ITEM});
        }

        //второй вариант нажатием на крестик - выходить из режима редактирования без сохр.изменений
        // if (isCurrentItem) {
        //     dispatch({type: RESET_STATE_SERVICE_ITEM});
        // } else {
        //     dispatch({
        //         type: DELETE_SERVICE_ITEM,
        //         payload: id
        //     })
        // }
    }

    return (
        <li className={isCurrentItem ? 'active' : ''}>
            <p>{name}</p>
            <p>{price}</p>
            <Button className="edit-button" onClick={handleEditingServiceItem}>✎</Button>
            {/*третий вариант задания с крестиком - не показывать крестик во время редактирования*/}
            {/*{!isCurrentItem &&*/}
            <Button className="delete-button" onClick={() => handleDeleteServiceItem(id)}>✘</Button>
            {/*}*/}
        </li>
    );
}

export {ServiceItem};

ServiceItem.propTypes = {
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired
};