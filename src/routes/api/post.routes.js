const router = require('express').Router()
const { getAllPost, createPost, getPostByUser } = require('../../controllers/post.controller')


router.get('/', getAllPost)
router.get('/:users_id', getPostByUser)
router.post('/', createPost)

module.exports = router