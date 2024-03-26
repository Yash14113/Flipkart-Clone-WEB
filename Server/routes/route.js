import express from 'express';
import { userSignup } from '../controller/product.js';
import { getallproducts } from '../controller/product.js';
import { getProductbyid } from '../controller/product.js';
import { addPaymentgateway } from '../controller/product.js';

const router=express.Router();

router.post('/signup',userSignup);
router.get('/products',getallproducts);
router.get('/product/:id',getProductbyid)
router.post('/payment',addPaymentgateway);

export default router;