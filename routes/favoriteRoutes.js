const router = require('express').Router()
const { Favorite, User } = require('../models')
const passport = require('passport')

router.get('/favorites', passport.authenticate('jwt'), (req, res) => {
  Favorite.find({})
    .then(favorites => res.json(favorites))
    .catch(err => console.log(err))
})

router.post('/favorites', passport.authenticate('jwt'), (req, res) => {
  Favorite.create({
    label: req.body.label,
    code: req.body.code,
    type: req.body.type,
    user: req.user._id
  })
    .then(favorite => {
      User.findByIdAndUpdate(req.user._id, { $push: { favorites: favorite._id } })
        .then(() => {
          res.json({
            id: favorite._id,
            label: req.body.label,
            code: req.body.code,
            type: req.body.type,
            user: req.user
          })
        })
    })
    .catch(err => console.log(err))
})

module.exports = router