import { ValidacionClave } from "./data"
export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  let resultado: ValidacionClave
  if (/[A-Z]/.test(clave)) {
    resultado = { esValida: true }
  } else {
    resultado = {
      esValida: false,
      error: 'Debe contener al menos una mayuscula',
    }
  }

  return resultado
}
export const tieneNumeros = (clave: string): ValidacionClave => {
  let resultado: ValidacionClave
  if (/[0-9]/.test(clave)) {
    resultado = { esValida: true }
  } else {
    resultado = { esValida: false, error: 'Debe contener al menos un numero' }
  }

  return resultado
}
export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  let resultado: ValidacionClave
  if (/[^A-Za-z0-9]/.test(clave)) {
    resultado = { esValida: true }
  } else {
    resultado = {
      esValida: false,
      error: 'Debe contener al menos un caracter especial',
    }
  }

  return resultado
}

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  let resultado: ValidacionClave

  if (clave.length > 8) {
    resultado = { esValida: true }
  } else {
    resultado = {
      esValida: false,
      error: 'Debe contener al menos 8 caracteres',
    }
  }

  return resultado
}
export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  const nombreUsuarioMinusculas = nombreUsuario.toLowerCase()
  const claveMinusculas = clave.toLowerCase()
  let resultado: ValidacionClave
  if (!claveMinusculas.includes(nombreUsuarioMinusculas)) {
    resultado = { esValida: true }
  } else {
    resultado = {
      esValida: false,
      error: 'No debe contener el nombre del usuario',
    }
  }
  return resultado
}
export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  let resultado: ValidacionClave
  if (
    !commonPasswords.some((commonPasswords) => clave.includes(commonPasswords))
  ) {
    resultado = { esValida: true }
  } else {
    resultado = { esValida: false, error: 'No debe contener palabras comunes' }
  }
  return resultado
}
