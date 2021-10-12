const { model, Schema } = require('mongoose')

const Favorite = new Schema({
  code: String,
  type: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = model('Favorite', Favorite)