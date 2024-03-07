import { commonPasswords, ValidacionClave } from './data'

import {
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneMayusculasYMinusculas,
  tieneNombreUsuario,
  tieneNumeros,
  tienePalabrasComunes,
} from './validaciones'

const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  if (!tieneMayusculasYMinusculas(clave).esValida) {
    return tieneMayusculasYMinusculas(clave)
  }
  if (!tieneNumeros(clave).esValida) {
    return tieneNumeros(clave)
  }
  if (!tieneCaracteresEspeciales(clave).esValida) {
    return tieneCaracteresEspeciales(clave)
  }
  if (!tieneLongitudMinima(clave).esValida) {
    return tieneLongitudMinima(clave)
  }
  if (!tieneNombreUsuario(nombreUsuario, clave).esValida) {
    return tieneNombreUsuario(nombreUsuario, clave)
  }
  if (!tienePalabrasComunes(clave, commonPasswords).esValida) {
    return tienePalabrasComunes(clave, commonPasswords)
  } else {
    return { esValida: true }
  }
}
console.log(validarClave('Irene', '!Ftomatitos1', commonPasswords))
