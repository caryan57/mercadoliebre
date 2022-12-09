let inputs = document.querySelector('.form').querySelectorAll('input');

const errorMsgs = {
  name: {
    valueMissing: 'Este campo no puede estar vacío',
    tooShort: 'Este nombre es demasiado corto',
  },
  username: {
    valueMissing: 'Este campo no puede estar vacío',
    tooShort: 'Este nombre de usuario es demasiado corto',
  },
  surname: {
    valueMissing: 'Este campo no puede estar vacío',
    tooShort: 'Este apellido es demasiado corto',
  },
  birth: {
    valueMissing: 'Este campo no puede estar vacío',
  },
  address: {
    valueMissing: 'Este campo no puede estar vacío',
    tooShort: 'Esta dirección es demasiado corta',
  },
  password: {
    valueMissing: 'Este campo no puede estar vacío',
    patternMismatch:
      'Por favor ingrese una contraseña de al menos 8 letras con 1 mayúscula, 1 número y 1 carácter especial',
  },
  rePassword: {
    valueMissing: 'Este campo no puede estar vacío',
  },
};

const errorTypes = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'customError',
  'tooShort',
];

inputs.forEach(input => {
  input.addEventListener('blur', e => {
    let error = '';
    let parent = input.parentElement;
    let errorSpan = parent.querySelector('.error-message');

    if (!input.validity.valid) {
      input.classList.add('error');
      errorTypes.forEach(errorType => {
        if (input.validity[errorType]) {
          let messages = errorMsgs[input.id][errorType];

          error = messages;
          errorSpan.innerHTML = error;
        }
      });
    } else if (errorSpan != null) {
      input.classList.remove('error');
      errorSpan.innerHTML = '';
    }
  });
});
