import express from "express";
import 'dotenv/config'
import mongoose from "mongoose";
import  {Book} from './models/bookModel.js';

const app = express();

// Middleware for parsing request body
app.use(express.json())

app.get('/', (req, res) => {
  // console.log(req)
  return res.status(234).send('Welcome to Kenjamin Button land')
})

// Route to save a new book
app.post('/books', async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear'
      })
    }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear
    }

    const book = await Book.create(newBook)
    return response.status(201).send(book)

  } catch (error) {
    console.log(error.message)
    response.status(500).send({message: error.message})
  }
})

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
