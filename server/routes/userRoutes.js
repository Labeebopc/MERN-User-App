import express from 'express'

import {getUser, Login, Signup, verifyToken} from '../controllers/userController.js'

const router = express.Router()

router.post('/signup', Signup)
router.post('/login', Login)
router.get('/user', verifyToken, getUser)






export default router;
