import {legacy_createStore as createStore, combineReducers, compose} from "redux";
import ServiceListReducer from "./reducers/ServiceListReduser";
import ServiceItemReducer from "./reducers/ServiceItemReducer";
import ProductListReducer from "./reducers/ProductListReducer";
import ProductItemReducer from "./reducers/ProductItemReducer";

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const reducer = combineReducers({
    servicesList: ServiceListReducer,
    serviceItem: ServiceItemReducer,
    productsData: ProductListReducer,
    productItem: ProductItemReducer,

});

function configureStore() {
    return createStore(
        reducer,
        undefined,
        compose(
            ReactReduxDevTools,
        )
    )
}

export default configureStore;