const fs = require('fs');
const colors=require('colors');


let listarTabla = (base, limite) => {

    if (!Number(base)) {
        reject('el valor introducido no es un número');
        return;
    }

    for (let i=1;i<=limite;i++){

        console.log(`${base} * ${i} = ${base*i}`);
    }

}


let crearArchivo = (base,limite) => {


    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('el valor introducido no es un número');
            return;
        }

        let data = '';

        for (let i = 1; i <=limite; i++) {
            data += `${base}*${i}=${base * i} \n`;
        }



        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) { reject(err) }
            else {
                resolve(`tabla-${base}.txt`)
            }

            console.log('The file has been saved!');
        });

    })

}

module.exports = {
    crearArchivo,
    listarTabla
}