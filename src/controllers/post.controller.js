const {insertPost, selectAllPost, selectPostByUser} = require('../models/post.model')

const getAllPost = async (req, res, next) => {
    try {
        const [result] = await selectAllPost();
        res.json(result)
    }
    catch (error) {
        next(error)
    }
}

const getPostByUser = async (req,res, next)=>{
    try {
        const [result] = await selectPostByUser(req.params.users_id)
        res.json(result) 
        
    } catch (error) {
        next(error)
    }
}

const createPost = async (req, res, next) => {
    try {
        console.log(req.body)
        const [result] = await insertPost(req.body)
        res.json(result)
    }
    catch (error) {
        next(error)
    }
}

module.exports = {
    getAllPost,
    getPostByUser,
    createPost
}