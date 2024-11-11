const pool = require("../config/db");

function insertUser({ email, username, password, image }) {
    return pool.query(
        'INSERT INTO user (email, username, password, image) VALUES (?,?,?,?)', [email, username, password, image]
    )
}

function selectAllUser(){
    return pool.query('SELECT * FROM user')
}

async function selectUserById(id) {
    const [user] = await pool.query(
        'SELECT * FROM user WHERE id = ?', [id])
    if (user.length === 0) {
        return null
    }
    return user[0]

}

module.exports = {
    selectAllUser, selectUserById, insertUser
}