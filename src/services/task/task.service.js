// Initializes the `task` service on path `/tasks`
const createService = require('feathers-mongoose');
const createModel = require('../../models/task.model');
const hooks = require('./task.hooks');
const filters = require('./task.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'task',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/tasks', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const taskService = app.service('tasks');

  taskService.hooks(hooks);

  if (taskService.filter) {
    taskService.filter(filters);
  }
};
