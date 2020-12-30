const view = require('../view/view')
const model = require('../model/model')

class indexController{
    static help(){
        view.comand();
    }
    static list(){
        model.list(function (data) {
            view.list(data)
        })
    }
    static update(id){
        model.update(id, function (data) {  
            view.show(data)
        })
    }
    static add(id, name, phone, money, qty) {
        model.buy(id, name, phone, money, qty, function (data) {  
            view.show(data)
        })
    }
    static view(id){
        model.view(id, function (data) {
            view.show(data)
        })
    }
    static delete(id){
        model.hapus(id, function (data) {
            view.show(data)
        })
    }
}

module.exports = indexController