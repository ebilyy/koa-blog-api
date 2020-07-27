const Post = require("../models/post");

const getAll = async (ctx, next) => {
  const page = parseInt(ctx.query.page);
  let posts;
  try {
    // ctx.router available
    const skipObj = page ? { skip: 12 * (page - 1), limit: 12 } : { limit: 12 };
    posts = await Post.find({}, {}, skipObj);
  } catch (error) {
    console.log(error);
    return next({ status: 400, message: error.message });
  }
  ctx.body = posts;
};

const getById = async (ctx, next) => {
  const id = ctx.params.id;

  let post;
  try {
    post = await Post.findOne({ slug: id });
  } catch (error) {
    console.log(error);
    return next({ status: 400, message: error.message });
  }
  // ctx.body = post;
  console.log(post);
  ctx.body = {
    ...post,
  };
};

const create = async (ctx, next) => {
  let post;
  try {
    post = await Post.create(ctx.request.body).catch((err) => {
      return next({ status: 400, message: err.message });
    });
  } catch (error) {
    console.log(error);
    return next({ status: 400, message: error.message });
  }
  return res.json(post);
};
const update = async (ctx, next) => {
  let post;
  const id = ctx.params.id;
  try {
    post = await Post.findOneAndUpdate({ slug: id }, { ...ctx.body }).catch(
      (err) => {
        return next({ status: 400, message: err.message });
      }
    );
    ctx.body = post;
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
};

const deleteById = async (ctx, next) => {
  let post;
  const id = ctx.params.id;
  try {
    post = await Post.findOneAndDelete({ slug: id }, { ...ctx.body }).catch(
      (err) => {
        return next({ status: 400, message: err.message });
      }
    );
    ctx.body = post;
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
};

module.exports = { getAll, getById, create, update, deleteById };
