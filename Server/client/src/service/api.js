
import axios from 'axios';

 
const URL='';

export const authenticateSignup= async(data)=>{
    try{
       await axios.post(`${URL}/signup`,data)
    }catch(error){
        console.log('error while signing up',error);
    }
}


export const payusingPaytm=async(data)=>{
    try{
     let res=await    axios.post(`${URL}/payment`,data)
     return res.data;
    }catch(err){
        console.log('error in payment',err)
    }
}
