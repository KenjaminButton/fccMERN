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

// Route to POST a new book
// http://localhost:5555/books
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

// Route to GET all books
// http://localhost:5555/books
app.get('/books', async (request, response) => {
  try {
    const books = await Book.find({})
    response.status(200).json({
      count: books.length,
      data: books
    })
  } catch(error) {
    console.log(error.message)
    response.status(500).send({message: error.message})
  }
})

// Route to GET one book by id
// http://localhost:5555/books/14783495
app.get('/books/:id', async (request, response) => {
  try {
    const {id} = request.params;
    const book = await Book.findById(id)
    response.status(200).json(book)
    
  } catch(error) {
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
