const router = require('express').Router()

router.use('/post', require('./api/post.routes'))
router.use('/user', require('./api/user.routes'))

module.exports = router