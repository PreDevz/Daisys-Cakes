const { Schema, model } = require('mongoose');

const cakeSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 1,
  },
  description: {
    type: String,
    required: true
  },
  cakeUrl: [String]
})

const Cake = model('Cake', cakeSchema);

module.exports = Cake;