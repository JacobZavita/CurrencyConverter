const router = require('express').Router()

router.use('/api', require('./favoriteRoutes'))

module.exports = router