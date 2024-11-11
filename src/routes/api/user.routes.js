const { getAllUser, createUser, getUserById } = require('../../controllers/user.controller');

const router = require('express').Router();

router.get('/', getAllUser)
router.get('/:userId', getUserById)
router.post('/', createUser)

module.exports = router;