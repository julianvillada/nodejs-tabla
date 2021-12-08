
const { crearArchivo } = require('./helpers/multiplicar');
const  argv  = require('./config/yargs');

require('colors');


console.clear();


crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo, ' creado '.underline.yellow))
    .catch( err => console.log( err ));



























    // console.log(' base: yargs', argv.b ); 

// console.log( base );

// const base = 7;



// const [ , , arg3 = 'base = 2' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');


