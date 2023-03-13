const {crearArchivo} = require('./helpers/multiplicar.js')
const argv = require('./config/yargs')
const colors = require('colors')

console.clear();
// console.log(argv.b, argv.l);


crearArchivo(argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
  .catch(error => console.log(error));

