import express from 'express'
import { createProduct, deleteProduct, getAllProducts, getProductDetails, updateProduct } from '../controllers/productController.js'

const router = express.Router()

router.post('/addnewproduct', createProduct)
router.get('/products', getAllProducts)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)
router.get('/product/:id', getProductDetails)


export default router;

