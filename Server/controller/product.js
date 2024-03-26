import User from "../model/userschema.js";
import Product from "../model/products_schema.js";

export const userSignup=async(req,res)=>{
    try{
        const exist=await User.findOne({username: req.body.username})
        if(exist){
            return res.status(401).json({message:'user already exist'})
        }
        const user = req.body; 
        const newUser=new User(user);
        await newUser.save();
        // console.log(req.body);
        res.status(200).json({message: user})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}  

export const getallproducts= async(req,res)=>{
    try{
         const products= await Product.find({});

         res.status(200).json(products);
    }
    catch(err){
        res.status(500).json({message:err.message})         
    }

}

export const getProductbyid= async(req,res)=>{
    try{
        const id=req.params.id;
        const product =await Product.findOne({'id':id})
        res.status(200).json(product)
    }
    catch(err){
        res.status(500).json({message :err.message})
    }
}

export const addPaymentgateway =(res,req)=>{
    
}

