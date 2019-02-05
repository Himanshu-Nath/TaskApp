// task-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const task = new Schema({
    name: {
      type: String,
      required: [true, 'Task Name is required']
    },
    category: {
      type: String,
      required: [true, 'Category Name is required']
    },
    priority: {
      type: Number,
      required: [true, 'Priority is required']
    },
    date: {
      type: Date,
      required: true
    },
    notes: {
      type: String,
      required: false
    },
    status: {
      type: String,
      default: "Active"
    },
    createdAt: { type: Date, 'default': Date.now },
    updatedAt: { type: Date, 'default': Date.now }
  }, {
    timestamps: true
  });

  return mongooseClient.model('task', task);
};
