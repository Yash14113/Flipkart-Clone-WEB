import {styled,Button, Box, Typography } from "@mui/material";
import { addEllipsis } from "../../utils/commonutils";
import GroupedButton from "./Button";
import { removeCart } from "../../../redux/actions/productaction";
import { useDispatch } from "react-redux";


const Component=styled(Box)`
    display:flex;
    border-top:1px solid lightgrey;

`
const Left=styled(Box)`
    margin:20px;
`

const Cost = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
`;

const MRP = styled(Typography)`
    color: #878787;
`;

const Discount = styled(Typography)`
    color: #388E3C;
`;
const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color:black;
    
`;


function cartItem({item}){

    const dispatch=useDispatch();
    
    const removeItemFromCart=(id)=>{
        dispatch(removeCart(id))
    }


    return(
        <Component>
            <Left>
                <img src={item.url}  style={{height:110 ,width:110}}/>
                <GroupedButton/>
            </Left>
            <Box style={{margin:20}}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <Typography style={{color:'grey', fontSize:14, marginTop:10}}>Seller:ReatailNet</Typography>
                <Typography style={{margin: '20px 0'}}>
                    <Cost component="span">₹{item.price.cost}</Cost>&nbsp;&nbsp;&nbsp;
                    <MRP component="span"><strike>₹{item.price.mrp}</strike></MRP>&nbsp;&nbsp;&nbsp;
                    <Discount component="span">{item.price.discount} off</Discount>
                </Typography>
                <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>

            </Box>
        </Component>
    )
}

export default cartItem;

