class MovieView{
    static showData(data){
        for(let i= 0; i < data.length; i++){
            console.log(`[${data[i].status}] ${data[i].name}`);
        }
    }
    static close(data){
        if(data.id){
            console.log(`
            SUCCESS
            =======
            berhasil menutup film dengan id ${data.id}`);
        }else{
            console.log(`
            ERROR
            =======
            Film tidak ditemukan`);
        }
    }
}

module.exports = MovieView;