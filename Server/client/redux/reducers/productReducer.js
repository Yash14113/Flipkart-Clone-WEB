import * as actionTypes from '../constant/productconstants'


export const getProductsReducers=(state={products:[]},action)=>{

    switch(action.type){
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {products:action.payload}
        case actionTypes.GET_PRODUCTS_FAILED:
            return {error:action.payload}
        default:
            return state;
 }
}

export const getProductdetailReducers=(state={product:{}},action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAIL_REQUEST:
            return {loading:true};
        case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
            return {loading:false,product:action.payload};
        case actionTypes.GET_PRODUCT_DETAIL_FAIL:
            return {loading:false ,err:action.payload};
        case actionTypes.GET_PRODUCT_DETAIL_RESET:
            return {product:{}};
        default:
            return state;
    }
}

export const cartReducers=(state={cartItems:[]},action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            const item=action.payload;
            const exist=state.cartItems.find(product=>product.id===item.id);
            
            if(exist){
                return{...state,cartItems:state.cartItems.map(data=>data.product===exist.product?item:data)}
            }
            else{
                return{...state, cartItems:[...state.cartItems,item]}
            }
        case actionTypes.REMOVE_CART:
            return{...state,cartItems:state.cartItems.filter(product=>product.id !==action.payload)}
            
        default :
        return state;
        }
}
