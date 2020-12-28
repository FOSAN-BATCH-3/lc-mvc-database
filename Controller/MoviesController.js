const MoviesModel = require ('../Model/MoviesModel')
const MoviesView =  require ('../View/MoviesView.js')


class MoviesController {

    static All(){
        MoviesModel.list(function(data){
            MoviesView.showAll(data)
        })
    }

    static close (id,cb){
        MoviesModel.close(id,function(cb){
            MoviesView.showClose(id,cb)
        })
    }

    static delete(id, cb){
        MoviesModel.delete(id,function(cb){
            MoviesView.show(cb)
        })
    }
}

module.exports = MoviesController;