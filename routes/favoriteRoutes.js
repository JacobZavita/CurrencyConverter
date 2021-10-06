const router = require('express').Router()
const { Favorite } = require('../models')

router.get('/favorites', (req, res) => {
  Favorite.find({})
    .then(favorites = > res.json(favorites))
    .catch(err => console.log(err))
})

router.post('/favorites', (req, res) => {
  Favorite.create(req.body)
    .then(favorite => res.json(favorite))
    .catch(err => console.log(err))
})

module.exports = router