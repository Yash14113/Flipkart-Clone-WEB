import { Box,styled,Button } from "@mui/material"
import {ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../../redux/actions/productaction";
import { useState } from "react";
import { payusingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

const Left = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))
const Image = styled('img')({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '95%'
});

const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;




function Actionitem({product}){
    const navigate=useNavigate()
    const dispatch=useDispatch();
    const {id}=product;
    const [quantity,setQuantity]=useState(1)

    function addItemToCart(){
        dispatch(addtoCart(id,quantity))
        navigate('/cart');
    }

    const buyNow=()=>{
       let res= payusingPaytm({amount:500,email:'test@gmail.com'})
        let info={
            action:'http://securegw-stage.paytm.in/order/process',
            params:res
        }
        post(info);
    }

    return (
        <Left>
            <Image src={product.detailUrl} />
            <StyledButton onClick={addItemToCart} variant="contained"  style={{marginRight: 10, background: '#ff9f00'}} ><Cart/>Add to Cart</StyledButton>
            <StyledButton onClick={()=>buyNow()} variant ='contained' style={{background: '#fb641b'}} ><Flash/>Buy Now</StyledButton>
        </Left>
    )
}

export default Actionitem;

