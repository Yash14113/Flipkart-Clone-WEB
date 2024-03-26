import NavBar from "./Navbar";
import Banner  from "./Banner";
import {Box,styled} from '@mui/material'
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getProducts } from "../../../redux/actions/productaction";
import Slide from "./slide";
import MidSlide from "./MidSlide";

const Component=styled(Box)`
    padding: 10px ;
    background:#F2F2F2;
`

function Home(){

    const {products}=useSelector(state=>state.getProducts)
    // const Product=Object.entries(products)
    console.log( products);

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])

    return (
        <>
        <NavBar/>
        <Component>
        <Banner/>
        <MidSlide products={products} title="Deals of the Day" timer={true}/>
        <Slide products={products} title='Top Buyings' timer={false}/>
        <Slide products={products} title="Your Choices" timer={false}/>

        </Component>

        
        </>
        )
}

export default Home;