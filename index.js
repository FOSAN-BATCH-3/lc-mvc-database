const request =  process.argv[2];
const parameter = process.argv.slice(3);
const moviesController = require('./controller/moviesController');

switch (request) {
    case 'movie:all':
        moviesController.all()
        break;
    case 'movie:close':
        moviesController.close(parameter[0])
        break;
    case 'movie:buy':
        moviesController.buy(parameter[0],parameter[1],parameter[2],parameter[3],parameter[4])
    default:
        break;
}