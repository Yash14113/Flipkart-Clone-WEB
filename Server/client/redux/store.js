import {createStore,combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension'
import { thunk } from 'redux-thunk';
import { getProductdetailReducers, getProductsReducers ,cartReducers} from './reducers/productReducer';
const reducer=combineReducers(
    {
        getProducts:getProductsReducers,
        getProductdetail:getProductdetailReducers,
        cart:cartReducers
    }
);

const middleware=[thunk]



const store= createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)



export default store;
