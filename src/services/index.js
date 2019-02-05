const task = require('./task/task.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(task);
};
