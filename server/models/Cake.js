// This model will be for every cake
// Should include: title, description, image url(s), 
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
  cakeUrl: [
    {
      url: String
    }
  ]
})

const Cake = model('Cake', cakeSchema);

module.exports = Cake;