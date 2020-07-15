// const ArticleModel = require()

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

}
const update = async (ctx, next) => {

}

const deleteById = async (ctx, next) =>{

}

module.exports = { getAll, getById, create, update, deleteById }
