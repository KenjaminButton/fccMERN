import express from "express";

// require('dotenv').config()
import 'dotenv/config'
import mongoose from "mongoose";

const app = express();

app.get('/', (req, res) => {
  // console.log(req)
  return res.status(234).send('Welcome to Kenjamin Button land')
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
