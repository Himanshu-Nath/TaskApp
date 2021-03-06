const mongoose = require('mongoose');

module.exports = function () {
  const app = this;

  mongoose.connect(app.get('mongodb'), {
    useNewUrlParser: true
  });
  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
