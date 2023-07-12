import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { errorHandler, notfound } from './middleware/errorMiddleware.js'

const port = process.env.PORT || 5001

connectDB() // Connect to MongoDB

const app = express()

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Cookie parser middleware
app.use(cookieParser())

app.get('/', (req, res) => {
	res.send('API is running...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notfound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`))
