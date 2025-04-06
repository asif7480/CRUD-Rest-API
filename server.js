import express from "express"
import morgan from "morgan"
import cors from "cors"
import dotenv from "dotenv/config"
import { connectDB } from "./config/db.mjs"
import errorHandler from "./middlewares/error.middleware.mjs"
import routes from "./routes/index.mjs"

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan("tiny"))

const port = process.env.PORT || 5000

app.use(routes)

app.use(errorHandler)
connectDB()
app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})
