import { products } from "./constant/data.js";
import Product from "./model/products_schema.js";

const Defaultdata= async()=>{
    try{
        await Product.deleteMany({});
        await Product.insertMany(products)
        console.log("data imported")

    }
    catch(error){
        console.log('error while iniserting data',error.message);
    }
}

export default Defaultdata;