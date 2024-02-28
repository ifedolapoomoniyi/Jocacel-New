const mongoose = require('mongoose');

const projectsSchema = new mongoose.Schema({
  details : {
    type: String,
    required: true
  },
  image : {
    type: String,
    required: false
  },
  name : {
    type: String,
    required: false
  },
  type: {
    type: String,
    required: false,
  }
});

module.exports = Projects = mongoose.model('projects', projectsSchema);
