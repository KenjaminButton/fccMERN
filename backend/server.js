import express from "express";
import 'dotenv/config'
import mongoose from "mongoose";
import  {Book} from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js'


const app = express();

// Middleware for parsing request body
app.use(express.json())

app.get('/', (req, res) => {
  // console.log(req)
  return res.status(234).send('Welcome to Kenjamin Button land')
})

// https:localhost:5555/books
app.use('/books', booksRoute)


mongoose.connect(process.env.ATLAS_URI)
  .then( () => {
    console.log('App connected to database')
    app.listen(process.env.PORT, () => {
      console.log(`APP is listening to port: ${process.env.PORT}`)
    })
  })
  .catch( (error) => {
    console.log(error)
  })
