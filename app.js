import express from 'express'
import appRouter from './routes/index.js'
import bodyParser from 'body-parser'
import cors from 'cors'

const app=express()


app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use(express.json())
app.use(bodyParser.json())

app.use("/api/v1",appRouter)
export default app