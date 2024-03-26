import {Box, Button, Typography,styled} from '@mui/material';
import {Login, ShoppingCart} from '@mui/icons-material';
import LoginDialogue from '../Login/Login';
import { useContext, useState } from 'react';
import { DataContext } from '../../../context/dataprovider';

const Wrapper=styled(Box)`
    display:flex;
    margin-top:0 3% 0 auto;
    &>button, &>p, &> div{
        margin-right:40px;
        font-size:16px;
        aling-item:center;
    }
`
const Container=styled(Box)`
    display:flex;
`
const LoginButton=styled(Button)`
    color:#2874F0;
    background:#FFFFFF;
    padding:5px 4px;
    text-transform:none;
    box-shadow:none;
    font-weight:600;
    border-radius:2px;
    height:32px
`

function CustomButton(){
    const [login,setLogin]=useState(false)
    const {account}=useContext(DataContext)

    function handle(){
        setLogin(true)
    }
    return (
        <Wrapper>

            {
                account?<Typography>{account}</Typography>
                :<LoginButton variant='contained' onClick={()=>handle()}>Login</LoginButton>

            }
            <Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
            <Typography style={{marginTop:3}}>More</Typography>

            <Container>
                <ShoppingCart/>
                <Typography>Cart</Typography>
            </Container>
            <LoginDialogue login={login} setLogin={setLogin}></LoginDialogue>
        </Wrapper>
    )
}


export default CustomButton;


