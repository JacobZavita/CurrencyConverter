const router = require('express').Router()

router.use('/api', require('./favoriteRoutes.js'))
router.use('/api', require('./userRoutes.js'))

module.exports = router