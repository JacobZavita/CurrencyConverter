module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mondodb://localhost/currency_converter_db',  {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

