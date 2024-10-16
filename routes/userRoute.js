import { Router } from "express";
import { userLogin, userSignup } from "../controllers/userController.js";

const userRouter =Router()
userRouter.get('/',()=>{console.log("helo get")})
userRouter.post('/login',userLogin)
userRouter.post('/signup',userSignup)
userRouter.get('/logout',userLogout)

export default userRouter