import mongoose from "mongoose";


export const Connection=async(URL)=>{
    // const URL=`mongodb+srv://${username}:${password}@cluster0.6g5jnj3.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useunifiedTopology:true,useNewUrlParser:true})
        console.log("Connected");
    }
    catch(err){
        console.log('Error while connecting to the database',err.message)
    }
}


export default Connection;
