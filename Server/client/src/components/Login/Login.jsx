import {Button,styled, Dialog,Box, TextField, Typography} from '@mui/material'
import { useState } from 'react'
import { authenticateSignup } from '../../service/api'
import { useContext } from 'react'
import { DataContext } from '../../../context/dataprovider'

const Component=styled(Box)`
    height:70vh;
    width: 90vh;
    display:flex;
`
const Image=styled(Box)`
    background:#2874f0 url( https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 80% no-repeat ;
    height:82.8%;
    width:35%;
    padding: 45px 35px ;
`
const Wrapper=styled(Box)`
    display:flex;
    flex-direction:column;
    padding:25px 35px;
    flex:1;
    &>div,&>button,&>p{
        margin-top:20px
    }
`
const LoginButton=styled(Button)`
    text-transform:none;
    background:#FB641B;
    color:#fff;
    height:48px;
    border-radius:2px;
`
const RequestOTP=styled(Button)`
    text-transform:none;
    background:#FFF;
    color:#2874f0;
    height:48px;
    border-radius:2px;
    box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
`
const Text=styled(Typography)`
    color:grey;

`
const Text2=styled(Typography)`
    font-weight:600;
    cursor:pointer;
    color:#2874f0

`
const accountinitial={
    login:{
        view:'login',
        heading:'Login',
        subHeading:' Get acess to your Orders,Wishlist and Recommendations'

    },
    signup:{
        view:'signup',
        heading:'Looks like you"re new here',
        subHeading:'Sign up with your mobile number to get started'

    }
}
const initialdata={
    firstname:'',
    lastname:'',
    email:'',
    username:'',
    password:'',
    phonenumber:''
}

function LoginDialogue({setLogin,login}){
    const [account,toggleAccount]=useState(accountinitial.login)
    const [data,setData]=useState(initialdata)
    const {setAccount}=useContext(DataContext)

    function handleClose(){
    setLogin(false)
    toggleAccount(accountinitial.login)
   }

   
   function Toggle(){
    toggleAccount(accountinitial.signup);
   }
//    function close(){
//     setSignup('login')
//    }

   function handlechange(e){

    // e.stopPropgation();
    setData({
        ...data,
        [e.target.name]:e.target.value
    })}
     
    async function handlesubmit(e){
        
           let res=await authenticateSignup(data)
            console.log(res);
            if(!res)return ;
            handleClose();
            setAccount(data.firstname)
    }
    return (
        <Dialog open={login} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
            <Component>

                <Image>
                    <Typography variant='h5' style={{color:'white'}}>{account.heading}</Typography>
                    <Typography style={{marginTop:20, color:'white'}}>
                        {account.subHeading}
                    </Typography>
                </Image>
                {
                    // (signup==='login')

                    account.view==='login'?<Wrapper >
                    <TextField variant='standard' label='Enter Email/Mobile number'/>
                    <TextField variant='standard' label='Enter Password'/>
                    <Text>By continuing, you agree to flipkart's Teams of use and Privacy Policy</Text>
                    <LoginButton>
                        Login
                    </LoginButton>
                    <Typography style={{textAlign:'center'}}>Or</Typography>
                    <RequestOTP>Request OTP</RequestOTP>
                    <Text2 onClick={Toggle}>New to Flipkart? Create an account</Text2>
                </Wrapper>
                :
                <Wrapper >
                    
                    <TextField variant='standard' name='firstname' onChange={handlechange} label='Enter Firstname'/>
                    <TextField variant='standard' name='lastname' onChange={handlechange}label='Enter Lastname'/>
                    <TextField variant='standard' name='username' onChange={handlechange}label='Enter Username'/>
                    <TextField variant='standard' name='email' onChange={handlechange}label='Enter Email'/>
                    <TextField variant='standard' name='password' onChange={handlechange}label='Enter Password'/>
                    <TextField variant='standard' name='phonenumber' onChange={handlechange}label='Enter Phone Number'/>

                    <LoginButton onClick={handlesubmit}>
                        SignUp
                    </LoginButton>
                </Wrapper>
                }
                
            </Component>
        </Dialog>
    )
}


export default LoginDialogue;