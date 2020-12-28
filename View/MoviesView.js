

class MoviesView{

    static showAll(data){
        let list = data [1]
        let book = data [0]

        console.log(
            `Movie List
===========
            `)
        for( let i = 0; i <list.length; i++){
            // console.log(list[i].id)
            let x = 0
            for(let j = 0; j < book.length; j++){
                if (list[i].id == book[j].movieid){
                    x = book[j].booked
                }
            }
            console.log(`[${list[i].status}] ${list[i].name} (${x}/${list[i].maxseats}) `)
        }
        
        
        
    }

    static showClose(id,data){
        if (data == 0){
            console.log (`Film tidak ditemukan`)
        }else{
        console.log (`Berhasil menutup film dengan id ${id}`)
        }
    }

    static show(hasil){
        console.log(hasil)
    }
}

module.exports = MoviesView;