import { stringConstants } from './string.constants';

export const handleNumericChange = (e, onChange) => {
  const numericValue = e.target.value.replace(/[^0-9]/g, '');

  if (onChange) {
    onChange({
      target: {
        name: e.target.name,
        value: numericValue,
      },
    });
  }
};

export const validateIsRequired = (value) => {
  if (!value || value.toString().trim() === '') {
    return stringConstants.validation.required;
  }
  return null;
};

export const validateEmailFormat = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    return stringConstants.validation.emailFormat;
  }
  return null;
};

export const validateMinLength = (value, minLength) => {
  if (!value || value.length < minLength) {
    return stringConstants.validation.minLength(minLength);
  }
  return null;
};

export const validateMaxLength = (value, maxLength) => {
  if (!value || value.length > maxLength) {
    return stringConstants.validation.maxLength(maxLength);
  }
  return null;
};

export const validateNoSpecialChars = (value) => {
  const regex = /^[a-zA-Z0-9\s]*$/;
  if (!regex.test(value)) {
    return stringConstants.validation.noSpecialChars;
  }
  return null;
};

export const validateFormRules = (formData, rules) => {
  const errors = {};

  for (const field in rules) {
    const fieldRules = rules[field];
    const value = formData[field];

    for (const rule of fieldRules) {
      const { fn, args = [] } = rule;
      const error = fn(value, ...args);

      if (error) {
        errors[field] = error;
        break; // Stop validating this field
      }
    }
  }

  return errors;
};

