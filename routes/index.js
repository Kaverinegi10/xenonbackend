import { Router } from "express";
import userRouter from "./userRoute.js";
const appRouter =Router()

appRouter.use('/users',userRouter)

export default appRouter