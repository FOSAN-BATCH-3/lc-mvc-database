const koneksi = require ('../connection.js');



class MoviesModel{

    static list (cb){
        let query = ` SELECT movieId, movies.name,movies.maxSeats,movies.status,
        COUNT (ticketcode) AS booked
        FROM  movietickets JOIN movies ON (movies.Id = movietickets.movieId)
        GROUP BY movies.name, movieId, movies.maxSeats, movies.status
        ;`;

        koneksi.query(query,function(err,res){
            if (err){
                cb(err)
            }else {
                let x = res.rows
                let query2 = `SELECT *
                FROM movies`

                koneksi.query(query2,function(errr,ress){
                    if (err){
                        cb(errr)
                    }else{
                        cb([x,ress.rows])
                    }
                })
                
            }
        })
    }

    static close (id,cb){
        let query = ` UPDATE Movies
        SET status = 'CLOSE'
        WHERE id = $1;`;

        let value =[id]

        koneksi.query(query,value,function(err,res){
            if (err){
                cb(err)
            }else{
                cb(res.rowCount)
            }
        })
    }

    static delete(id,cb){
        let query = `DELETE FROM movies
        WHERE id = $1 ;`;
        let value = [id]

        koneksi.query(query,value,function(err,res){
            if (err){
                cb(err)
            }else{
                if (res.rows.length == 0){
                    console.log('Maaf film tidak ditemukan')
                }else{
                cb(res.rows)
                }
            }
        })
    }

}

module.exports = MoviesModel;