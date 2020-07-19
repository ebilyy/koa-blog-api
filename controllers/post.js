const Post = require('../models/post')

const getAll = async (ctx, next)=> {
  ctx.body = {
    all: 'asd'
  }
}

const getById = async (ctx, next) => {
  const id = ctx.params.id

  let post
  try {
    post = Post.findOne({ slug: id })
  } catch (error) {

    console.log(error)
    return next({ status: 400, message: error.message })
  }
  ctx.json(post)
  ctx.body = {
    id
  }
}

const create = async (ctx, next) => {
  let post
  try {
    post = await Post.create(ctx.request.body).catch((err) => {
      return next({ status: 400, message: err.message })
    })
  } catch (error) {
    console.log(error)
    return next({ status: 400, message: error.message })
  }
  return res.json(post)
}
const update = async (ctx, next) => {

}

const deleteById = async (ctx, next) =>{

}

module.exports = { getAll, getById, create, update, deleteById }
