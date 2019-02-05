const logger = require('winston');
const hooks = require('feathers-hooks');
const errors = require('feathers-errors');

const debug = require('debug').debug('raffia:user:hooks');

function filterSearch() {
  return (hook) => {
    console.log("--------2")
    let query = hook.params;
    console.log(query);
    if (query == undefined) {
      return Promise.reject(new errors.BadRequest('Bad request param is empty'));
    } else {

    }
    return Promise.resolve(hook);
  };
}

function filterSearchs() {
  return function (hook) {
    console.log("--------1");
    return hook.app.service('users')
      .get({
        query: {
          $sort: {
            priority: -1
          }
        }
      })
      .then((task) => {
        hook.result.task = task;  // note: full user object
        return Promise.resolve(hook);
      });
  };
}

module.exports = {
  before: {
    all: [],
    find: [
      filterSearch()      
    ],
    get: [
      filterSearchs()
    ],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
