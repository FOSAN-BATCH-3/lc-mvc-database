const koneksi = require('../connection.js');


class MoviesTicketModel{



    static create (movie_id, name,Pnum, money, qty, cb){

        let query = ` 
            SELECT price,status,code,name
            FROM Movies
            WHERE  id = $1;`;

        let value = [movie_id]


        koneksi.query(query,value,function(err,res){
            if (err){

                cb(err)
            }else{
                // console.log(res.rows)
              let  x = res.rows
              if (x.length == 0){
                console.log(`Film dengan id ${id} tidak di temukan`)
              }else{
                if ( x[0].status == 'CLOSE'){
                    console.log ('Maaf tiket sudah tidak bisa dibeli')
                }else {
                    if (money - (x[0].price * qty)  < 0){
                        console.log(`Maaf uang anda tidak cukup untuk membeli film ini, harga  satuan film ${x[0].name} adalah ${x[0].price}`)
                    }else {
                        // console.log(x.code)
                        let n = qty
                        for (let i = 0; i < n;  i++){
                        let y = Math.floor((Math.random()*10000))
                        let query2 = `INSERT INTO MovieTickets(movieId,customerName,phoneNumber,ticketCode)
                        VALUES ( $1, $2, $3, $4)
                        ;`;
                            // console.log(x[0].code+y)
                        let value2 = [movie_id,name,Pnum,(x[0].code+y) ]

                        koneksi.query(query2,value2, function(errr,ress){
                            if (err){
                                cb(errr)
                            } else {
                                cb (ress)
                            }
                        })
                    }
                    }
                }
            }
        }
        })

    }

    static view(movie_id, cb){
        let query= ` SELECT *
        FROM movieTickets
        JOIN Movies ON (MovieTickets.movieId = Movies.Id)
        WHERE movieId = $1`

        let value = [movie_id]

        koneksi.query(query,value,function(err,res){
            if (err){
                cb(err)
            }else{
                if (res.length == 0){
                    cb(res.rows.length)
                }
                cb(res.rows)
            }
        })
    }


}


module.exports = MoviesTicketModel; 