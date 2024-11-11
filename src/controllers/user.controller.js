const { insertUser, selectUserById, selectAllUser } = require("../models/user.model")

const getAllUser = async (req, res, next)=>{
    try {
        const [result] = await selectAllUser()
        res.json(result)
    } catch (error) {
        next(error)
    }
}


const getUserById = async (req, res, next) => {
    const { userId } = req.params;
    try {
        const user = await selectUserById(userId)
        console.log(user)

        if (!user) { return res.status(404).json({ message: 'El id de usuario no existe' }) }

        res.json(user)
    }
    catch (error) {
        next(error)
    }
}
const createUser = async (req, res, next) => {
    try {
        const [result] = await insertUser(req.body)
        const user = await selectUserById(result.insertId)
        res.json(user)
    }
    catch (error) {
        next(error)
    }
}

module.exports = {
    getAllUser,
    getUserById,
    createUser
}