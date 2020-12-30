const koneksi = require('../connection')

class indexModel{
    static list(cb){
        let query = `SELECT * from movies ORDER BY id ASC;`;
        
        koneksi.query(query, function(err, res){
            if(err){
                cb(err)
            }else{
                cb(res.rows)
            }
        })
    }

    static update(id, cb){
        let query = `UPDATE movies SET status=$1 where id=$2;`;
        let statusBaru = 'CLOSE';
        let value= [statusBaru, id]
        
        koneksi.query(query, value, function(err, res){
            if(err){
                cb(err)
            }else{
                // console.log(res.rowCount)
                if (res.rowCount == 0) {
                    cb(`\nERROR\n=======\ngagal menutup film dengan id ${id}`)
                }
                else{
                    cb(`\nSUCCES\n=======\nberhasil menutup film dengan id ${id}`)
                }

            }
        })
    }

    static buy(id, name, phone, money, qty,cb){
        let query = `SELECT * from movies ORDER BY id ASC;`;
        
        koneksi.query(query, function(err, res){
            if(err){
                cb(err)
            }else{
                // console.log(res.rows);
                let button = false;
                for (let h = 0; h < res.rows.length; h++) {
                    if (res.rows[h].id==id) {
                        button = true
                    }
                }
                if (button == true) {
                    if (res.rows[id].status == 'CLOSE') {
                        cb('Maaf film status CLOSED')
                    }
                    else{
                        let harga = res.rows[id].price*qty;
                        if (money<harga) {
                            cb(`SUCCES\n=======\nMaaf uang anda tidak cukup untuk membeli tiket ini. harga tiket satuan film ${res.rows[id].name} adalah Rp.${res.rows[id].price}`)
                        }
                        else{
                            for (let j = 0; j < qty; j++) {
                                let random = Math.floor(Math.random()*100000)
                                let kode = res.rows[id].code + random
                                let nomor = phone.toString()
                                nomor=nomor[0]+nomor[1]+nomor[2]+'*****'
                                let query = 'INSERT INTO movietickets (movieid, ticketcode, customername, phonenumber) VALUES ($1,$2,$3,$4)'
                                koneksi.query(query, [id, kode, name, nomor], (err, res) => {
                                    if(err){
                                        console.log(err.stack)
                                    } else {
                                        console.log(`====[PROCCES COMPLETE]====`)
                                    }
                                  })
                                cb(`SUCCES\n=======\nBerhasil membuat tiket dengan\nNama : ${name}\nFilm : ${res.rows[id].name}\nCode : ${kode}\nPhone : ${nomor}\n`)
                            }
                            let saldo = money - (res.rows[id].price * qty)
                            console.log(`sisa saldo = Rp.${saldo}`);
                        }
                    }
                }
                else{
                    cb(`ERROR\n=====\nFilm dengan id ${id} tidak tersedia`)
                }   
            }
        })
    }

    static view(id, cb){
        let query = `SELECT * FROM movietickets ;`;
        
        koneksi.query(query, function(err, res){
            if(err){
                cb(err)
            }else{
                // cb(res.rows)
                let button = false;
                for (let h = 0; h < res.rows.length; h++) {
                    if (res.rows[h].movieid==id) {
                        button = true
                    }
                }
                if (button == true) {
                    let num = 0
                    for (let i = 0; i < res.rows.length; i++) {
                        if (res.rows[i].movieid == id) {
                            num++
                            cb(`${num}. ${res.rows[i].ticketcode} - ${res.rows[i].customername}, contact: ${res.rows[i].phonenumber}`)
                        }
                    }
                }
                else{
                    cb(`ERROR\n=====\nfilm tidak ditemukan`)
                }
            }
        })
    }

    static hapus(id, cb){
        let query = `DELETE FROM movies where id= $1;`;
        let value= [id]
        koneksi.query(query,value, function(err, res){
            if(err){
                cb(err)
            }else{
                cb(`SUCCES\n=====\nfilm berhasil dihapus\n`)
            }
        })
    }
    
}

module.exports = indexModel