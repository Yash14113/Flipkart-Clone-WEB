

import * as actionTypes from '../constant/productconstants';
import axios from 'axios';

const URL='';

export const getProducts = () => async (dispatch) => {
    try {
        const response= await axios.get(`${URL}/products`);
        const data=response.data;
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
        

    } catch (error) {
        // console.log(error.response.data)
        // console.log(error);
        dispatch({ type: actionTypes.GET_PRODUCTS_FAILED, payload: error.response });
    }
};

export const getProductdetail=(id)=> async(dispatch)=>{
    try{    
        dispatch({type:actionTypes.GET_PRODUCT_DETAIL_REQUEST})
        const {data}=await axios.get(`${URL}/product/${id}`)
        dispatch({type:actionTypes.GET_PRODUCT_DETAIL_SUCCESS,payload:data})

    }
    catch(err){
        dispatch({type:actionTypes.GET_PRODUCT_DETAIL_FAIL,payload:err.message})
    }
}

export const addtoCart=(id,quantity)=>async(dispatch)=>{
    try{
        const {data}= await axios.get(`${URL}/product/${id}`)
        dispatch({type:actionTypes.ADD_TO_CART,payload:{...data,quantity}})

    }catch(err){
        dispatch({type:actionTypes.ADD_TO_CART_ERROR,payload:err.message})
    }
}

export const removeCart=(id)=>(dispatch)=>{

        dispatch({type:actionTypes.REMOVE_CART,payload:id})
}
