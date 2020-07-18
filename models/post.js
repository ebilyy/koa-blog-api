const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
  slug: {
    type: String,
    unique: true,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId
  },
  body: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  categories: {
    type: Array,
    required: true,
    default: []
  },
  related: {
    type: Array,
    default: []
  },
  title: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date
  }
})
const Post = mongoose.model('Post', postSchema)
module.exports = Post
