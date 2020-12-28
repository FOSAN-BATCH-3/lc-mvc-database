const movieModel = require('../model/movieModel');
const MovieModel = require('../model/movieModel');
const movieView = require('../view/movieView');

class MovieController{
    static all(){
        movieModel.all(hasil =>{
            movieView.showData(hasil)
        })
    }
    static close(id){
        movieModel.close(id, hasil =>{
            movieView.close(hasil)
        })
    }
}

module.exports = MovieController;