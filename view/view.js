class indexView{
    static comand(){
        console.log(`        $ node index.js help
        $ node index.js movie:all
        $ node index.js movie:close <movieId>
        $ node index.js movie:buy <movieId> <name> <phone> <money> <qty>
        $ node index.js movie:view <movieId>
        $ node index.js movie:delete <movieId>`);
    }
    static list(data){
        // console.log(data);
        console.log(`Movie List\n==========`);
        for (let i = 0; i < data.length; i++) {
            console.log(`[${data[i].status}] ${data[i].name}`);
            
        }
    }
    static show(data){
        console.log(data);
    }
}

module.exports = indexView