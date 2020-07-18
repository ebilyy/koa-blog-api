const Post = require('../models/post')

const getAll = async (ctx, next)=> {
  ctx.body = {
    all: 'asd'
  }
}

const getById = async (ctx, next) => {
  const id = ctx.params.id
  console.log(id);
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
