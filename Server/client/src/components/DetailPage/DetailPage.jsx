import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { getProductdetail } from "../../../redux/actions/productaction"
import { Box, Typography,styled, Grid } from "@mui/material"
import Actionitem from "./ActionItem"
import ProductDetail from "./ProductDetails"

const Component=styled(Box)`
    background:#F2F2F2;


`
const Container=styled(Grid)`
    background:#FFFFFF;
    display:flex
`


const Right=styled(Grid)(({theme})=>({
    marginLeft:'36%',
    marginTop:'-36%',
    [theme.breakpoints.down('md')]:{
        marginTop:'5%',
        marginLeft:'8%'
    }
}))


function DetailPage(){
    const dispatch=useDispatch()
    const {id}=useParams();
    const {loading,product}=useSelector(state=>state.getProductdetail)
    const fassured= 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
   
    useEffect(()=>{
        if(product&&id!==product.id)
            dispatch(getProductdetail(id))
    },[dispatch,id,loading,product]);


    return (
         <Component>
              { 
                product && Object.keys(product).length && 
                <Container container>
                   <Grid item lg={4} md={4} sm={8} xs={12}>
                        <Actionitem product={product}/>
                    </Grid> 
                    <Right item lg={8} md={8} sm={12}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography style={{marginTop:5,color:'#878787',fontSize:13}}>8 Ratings & 1 Review
                        <span><img src={fassured} style={{width:77,marginLeft:20}}/></span>
                        </Typography>
                        <Typography>
                            <span style={{fontSize:20}}>$ {product.price.cost}</span>&nbsp;&nbsp;&nbsp;
                            <span style={{color:'#878787'}}><strike>${product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{color:'#388E3C'}}>{product.price.discount} Off</span>
                        </Typography>
                        <ProductDetail product={product}/>
                    </Right>
                </Container>
              }  
         </Component>

    )
}


export default DetailPage
