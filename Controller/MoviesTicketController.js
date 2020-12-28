const MoviesTicketModel = require (`../Model/MoviesTicketModel.js`);
const MoviesTicketView = require (`../View/MoviesTicketView.js`);


class MoviesTicketController {

    static create(movies_id, name, Pnum, money, qty){
        MoviesTicketModel.create(movies_id, name, Pnum, money, qty, function(data){
            MoviesTicketView.show(data)
        })
    }

    static view(movie_id){
        MoviesTicketModel.view(movie_id,function(data){
            MoviesTicketView.show2(data)
        })
    }

}

module.exports= MoviesTicketController;