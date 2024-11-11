const pool = require("../config/db");

function selectAllPost() {
    return pool.query('SELECT post.*, user.* FROM post JOIN user ON post.users_id = user.id')
}

function selectPostByUser(users_id) {
    return pool.query('SELECT post.*, user.*  FROM post INNER JOIN user ON post.users_id = user.id WHERE post.users_id = ?', [users_id])
}
function insertPost({ title, description, date, category, users_id }) {
    return pool.query(
        'INSERT INTO post (title, description, date, category, users_id) VALUES (?,?,?,?,?)', [title, description, date, category, users_id]
    )
}


module.exports = {
    selectAllPost, selectPostByUser, insertPost
}