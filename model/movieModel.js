const koneksi = require('../connection')

class MovieModel{
    static all(cb){
        let query = `SELECT * FROM movies;`

        koneksi.query(query, (err,res) =>{
            if(err){
                cb(err)
            }else{
                // console.log(res);
                cb(res.rows)
            }
        })
    }
    static close(id, cb){
        let query = `UPDATE movies SET status = 'CLOSED' WHERE id = $1 RETURNING *;`;
        let value = [id];
        koneksi.query(query, value, (err,res) => {
            if(err){
                console.log(err);
                cb(err)
            }else{
                // console.log(res);
                cb(res.rows[0])
            }
        })
    }
}

module.exports = MovieModel;