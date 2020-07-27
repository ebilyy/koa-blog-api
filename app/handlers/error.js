module.exports = () => async (ctx, next) => {
  try {
    await next();
  } catch ({ status = 500, message = "server error", name, errors }) {
    if (name === "validationErrror") {
      ctx.status = 400;
      ctx.body = {
        errors: Object.values(errors).reduce(
          (errors, error) => ({
            ...errors,
            [eerror.path]: error.message,
          }),
          {}
        ),
      };
    } else {
      ctx.status = status;
      ctx.body = { status, message };
    }
  }
};
