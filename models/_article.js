const mongoose = require('mongoose');
const Schema = mongoose.Schema

const articleScheme = new Schema(
  {
    slug: String,
    content: String,
    // category: 
    description: String,
    title: String,
    image: String
  })

  