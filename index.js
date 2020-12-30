const request = process.argv[2];
const parameter = process.argv.slice(3);
const controller = require('./controller/controller')

// console.log(request);
// console.log(parameter);
switch (request) {
    case 'help':
        controller.help()
        break;
    case 'movie:all':
        // console.log('melihat list film');
        controller.list()
        break;
    case 'movie:close':
        // console.log('menandakan film telah berakhir');
        controller.update(parameter[0])
        break;
    case 'movie:buy':
        // console.log('membeli tiket film');
        controller.add(parameter[0],parameter[1],parameter[2],parameter[3],parameter[4])
        break;
    case 'movie:view':
        // console.log('menampilkan satu film dengan tiket-tiketnya');
        controller.view(parameter[0])
        break;
    case 'movie:delete':
        // console.log('menghapus film');
        controller.delete(parameter[0])
        break;
    default:
        console.log('kode error\nketik \'node index.js help\' untuk melihat list command\n');
        break;
}