const request = process.argv[2]
const param = process.argv.slice(3)


const MoviesController = require (`./Controller/MoviesController.js`)
const MoviesTicketController = require (`./Controller/MoviesTicketController.js`)
switch (request){
    case ('movie:all'):
        MoviesController.All()
    break;
    case ('movie:close'):
        MoviesController.close(param[0])
    break;
    case ('movie:buy'):
        MoviesTicketController.create(param[0],param[1],param[2],param[3],param[4])
    break;
    case ('movie:view'):
        MoviesTicketController.view(param[0])
    break;
    case ('movie:delete'):
        MoviesController.delete(param[0])
    break;
    case ('test'):
        MoviesTicketController.test(param[0])
    break;
    default :
        console.log ('input  salah')
    break;
}


