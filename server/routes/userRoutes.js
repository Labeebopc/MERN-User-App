import express from 'express'

import {Login, Signup, verifyToken} from '../controllers/userController.js'

const router = express.Router()

router.post('/signup', Signup)
router.post('/login', Login)
router.get('/user', verifyToken)






export default router;
