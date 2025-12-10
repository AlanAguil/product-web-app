export const stringConstants = {
  appName: 'Manos Mexicanas',
  validation: {
    required: 'Este campo es obligatorio.',
    emailFormat: 'El formato del correo electrónico no es válido.',
    noSpecialChars: 'No se aceptan caracteres especiales.',
    passwordsMustMatch: 'Las contraseñas no coinciden.',
    minLength: (min) => `Debe tener al menos ${min} caracteres.`,
    maxLength: (max) => `Debe tener menos de ${max} caracteres.`,
  },
};