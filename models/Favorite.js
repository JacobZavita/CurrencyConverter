const { model, Schema } = require('mongoose')

const Favorite = new Schema({
  label: String,
  code: String,
  type: String
})

module.exports = model('Favorite', Favorite)