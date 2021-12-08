
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10  ) => {

    try {

        
        let salida = '';
        let consola = '';

        for ( let i = 1 ; i <= hasta; i++) {
            salida  += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'x'.blue } ${ i } ${'='.blue} ${ base * i }\n`;
        };

        if ( listar ) {
            
            console.log('================='.green);
            console.log('   Tabla del : ', base );
            console.log('================='.green);

            console.log( consola );
        }

        

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida); 

        return`tabla-${ base }.txt`.rainbow;

    }catch (err) {
        throw err;
    }
   
}

module.exports = {
  crearArchivo
}


































 // console.log( salida );

    // fs.writeFileSync( `tabla-${ base }.txt`, salida); 

    // console.log(`tabla-${ base }.txt creada`);

    // fs.writeFileSync( `tabla-${ base }.txt`, salida);

    // ( salida )
    //     ? resolve ( `tabla-${ base }.txt creada` )
    //     : reject (` no se pudo multiplicar la tabla del : ${ base }`);
