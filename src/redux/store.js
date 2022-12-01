import {legacy_createStore as createStore, combineReducers, compose} from "redux";
import ServiceListReducer from "./reducers/ServiceListReduser";
import ServiceItemReducer from "./reducers/ServiceItemReducer";

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const reducer = combineReducers({
    servicesList: ServiceListReducer,
    serviceItem: ServiceItemReducer,
});

function configureStore() {
    return createStore(
        reducer,
        undefined,
        compose(
            ReactReduxDevTools,
        ))
}

export default configureStore;