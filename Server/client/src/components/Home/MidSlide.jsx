import Slide from "./slide"
import { Box,styled } from "@mui/material"

const Component=styled(Box)`
    display:flex;

`
const Left=styled(Box)(({theme})=>({
    width:'83%',
    [theme.breakpoints.down('md')]:{
        width:'100%'
    }
}));
const Right=styled(Box)(({theme})=>({

    background:'#FFFFFF',
    padding:'5px',
    marginTop:'10px',
    marginLeft:'5px',
    width:'17%',
    textAlign:'center',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }

}));

function MidSlide({products,title,timer}) {
    const addURL='https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <Component> 
            <Left>
                <Slide title={title} timer={timer} products={products} />
            </Left>

            <Right >
                <img src={addURL} alt="" style={{width:240, height:333}} />
            </Right>
        </Component>
    )
}

export default MidSlide;
