const fs = require('fs')
const colors = require('colors')

const crearArchivo = async (base = 5, listar, hasta = 10) => {

  let salida = '';

  for (let i = 1; i <= hasta; i++) {
    salida += `${base}\t *\t ${i}\t =\t ${base * i}\n`;
  }

  if(listar) {
    console.log('============================='.green)
    console.log('\tTabla del:', base)
    console.log('============================='.green)
    console.log(salida);
  }
    
  try {
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`

  } catch (error) {
    throw error;
  }

}

module.exports = {
  crearArchivo,
}