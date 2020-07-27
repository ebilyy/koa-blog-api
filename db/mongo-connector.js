const mongoose = require("mongoose");
mongoose.Promise = Promise;

const runDb = (mongoUri) => {
  if (!mongoUri) {
    throw new Error("Mongo uri is not defined!");
  }
  return new Promise((res, rej) => {
    mongoose
      .connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((mongodb) => {
        res(mongodb);
        console.log("mongodb conected!");
      })
      .catch((err) => {
        rej(err);
      });
  });
};
module.exports = runDb;
