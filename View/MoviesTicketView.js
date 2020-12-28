

class MoviesTicketView{

    static show(hasil){
        console.log(hasil)
    }

    static show2(hasils){

        if  (hasils == 0){
            console.log('Film tidak ditemukan')
        }else{
        console.log(`
        id : ${hasils[0].id}, ${hasils[0].name}
        `)
        hasils.forEach((hasil,b) => {
            console.log(`${b+1}. ${hasil.code} -${hasil.name}-, contact : ${hasil.phonenumber} `)
        });
    }
}
}


module.exports = MoviesTicketView;