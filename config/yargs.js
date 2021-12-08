const argv = require ('yargs')
    .option('b', {
        alias:'base',
        type:'number',
        demandOption: true,
        describe : 'Es la base de la tabla multiplicar'
    })
    .option('l', {
        alias:'listar',
        type:'boolean',
        default: 10,
        describe : 'Es el listado hasta donde quieres la taula la tabla'
    })
    .option('h', {
        alias:'hasta',
        type:'numero',
        default: 10,
        describe : 'hasta donde quiero mi tabla'
    })
    .check( ( argv, options ) => {
        if( isNaN( argv.b)){
            throw 'La base tiene que ser un numero  '
        }
        return true;
    } )
    .argv; 

    module.exports = argv;