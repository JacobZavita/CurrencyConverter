module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/currency_converter_db',  {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

