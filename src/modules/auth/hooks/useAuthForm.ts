import { useState, type ChangeEvent, type FormEvent } from 'react';
import {
  handleNumericChange,
  validateEmailFormat,
  validateFormRules,
  validateIsRequired,
  validateMaxLength,
  validateMinLength,
  type ValidationRule,
  type RuleFn
} from '@/utils/general.functions';
import { stringConstants } from '@/utils/string.constants';

const loginRules: Record<string, ValidationRule[]> = {
  email: [
    { fn: validateIsRequired as RuleFn },
    { fn: validateEmailFormat as RuleFn },
    { fn: validateMaxLength as RuleFn, args: [256] }
  ],
  password: [
    { fn: validateIsRequired as RuleFn },
    { fn: validateMaxLength as RuleFn, args: [256] }
  ]
};

const registerRules = (password: string): Record<string, ValidationRule[]> => ({
  name: [
    { fn: validateIsRequired as RuleFn },
    { fn: validateMinLength as RuleFn, args: [3] },
    { fn: validateMaxLength as RuleFn, args: [256] }
  ],
  email: [
    { fn: validateIsRequired as RuleFn },
    { fn: validateEmailFormat as RuleFn },
    { fn: validateMaxLength as RuleFn, args: [256] }
  ],
  phoneNumber: [
    { fn: validateIsRequired as RuleFn },
    { fn: validateMinLength as RuleFn, args: [10] },
    { fn: validateMaxLength as RuleFn, args: [15] }
  ],
  password: [
    { fn: validateIsRequired as RuleFn },
    { fn: validateMinLength as RuleFn, args: [8] },
    { fn: validateMaxLength as RuleFn, args: [256] }
  ],
  passwordConfirm: [
    { fn: validateIsRequired as RuleFn },
    { fn: validateMinLength as RuleFn, args: [8] },
    { fn: validateMaxLength as RuleFn, args: [256] },
    {
      fn: ((value: string, matchValue: string) => (value !== matchValue ? stringConstants.validation.passwordsMustMatch : null)) as RuleFn,
      args: [password]
    }
  ]
});

export const useAuthForm = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Form states
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const [registerForm, setRegisterForm] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleNumericChange(e, (event: any) => {
      setRegisterForm(prev => ({
        ...prev,
        [event.target.name]: event.target.value
      }));
    });
  };

  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegisterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'phoneNumber') {
      handlePhoneChange(e);
      return;
    }

    setRegisterForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateLoginResult = (): boolean => {
    const rulesResults = validateFormRules(loginForm, loginRules);
    setErrors(rulesResults);
    return Object.keys(rulesResults).length === 0;
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateLoginResult()) {
      setIsLoading(true);
      // Simulando petición a API
      setTimeout(() => {
        setIsLoading(false);
        console.log('Login form submitted:', loginForm);
      }, 1000);
    }
  };

  const validateRegisterResult = (): boolean => {
    const rulesResults = validateFormRules(registerForm, registerRules(registerForm.password));
    setErrors(rulesResults);
    return Object.keys(rulesResults).length === 0;
  };

  const handleRegisterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateRegisterResult()) {
      setIsLoading(true);
      // Simulando petición a API
      setTimeout(() => {
        setIsLoading(false);
        console.log('Register form submitted:', registerForm);
      }, 1000);
    }
  };

  const toggleToRegister = () => {
    setErrors({});
    setIsActive(true);
  };

  const toggleToLogin = () => {
    setErrors({});
    setIsActive(false);
  };

  return {
    isActive,
    isLoading,
    loginForm,
    registerForm,
    errors,
    handleLoginChange,
    handleRegisterChange,
    handleLoginSubmit,
    handleRegisterSubmit,
    toggleToRegister,
    toggleToLogin
  };
};
