import { useState } from 'react';
import LoginForm from '../components/common/LoginForm';
import RegisterForm from '../components/common/RegisterForm';
import AuthLayout from '../components/layout/AuthLayout';
import '../styles/pages/Login.css';
import { validateEmailFormat, validateFormRules, validateIsRequired, validateMinLength, validateMaxLength } from '../utils/general.functions';
import { stringConstants } from '../utils/string.constants';

const loginRules = {
  email: [
    { fn: validateIsRequired },
    { fn: validateEmailFormat },
    { fn: validateMaxLength, args: [256] }
  ],
  password: [
    { fn: validateIsRequired },
    { fn: validateMinLength, args: [8] },
    { fn: validateMaxLength, args: [256] }
  ]
};

const Login = () => {

  const [isActive, setIsActive] = useState(false);

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

  const [errors, setErrors] = useState({});

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const rulesResults = validateFormRules(loginForm, loginRules);
    setErrors(rulesResults);
    return Object.keys(rulesResults).length === 0;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Lógica de login se implementará después
      console.log('Login form submitted:', loginForm);
    }
  };

  const validateRegisterForm = () => {

    const registerRules = {
      name: [
        { fn: validateIsRequired },
        { fn: validateMinLength, args: [3] },
        { fn: validateMaxLength, args: [256] }
      ],
      email: [
        { fn: validateIsRequired },
        { fn: validateEmailFormat },
        { fn: validateMaxLength, args: [256] }
      ],
      phoneNumber: [
        { fn: validateIsRequired },
        { fn: validateMinLength, args: [10] },
        { fn: validateMaxLength, args: [15] }
      ],
      password: [
        { fn: validateIsRequired },
        { fn: validateMinLength, args: [8] },
        { fn: validateMaxLength, args: [256] }
      ],
      passwordConfirm: [
        { fn: validateIsRequired },
        { fn: validateMinLength, args: [8] },
        { fn: validateMaxLength, args: [256] },
        {
          fn: (value, matchValue) => (value !== matchValue ? stringConstants.validation.passwordsMustMatch : null),
          args: [registerForm.password]
        }
      ]
    };

    const rulesResults = validateFormRules(registerForm, registerRules);
    setErrors(rulesResults);
    return Object.keys(rulesResults).length === 0;
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if (validateRegisterForm()) {
      // Lógica de registro se implementará después
      console.log('Register form submitted:', registerForm);
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

  return (
    <>
      <AuthLayout
        isActive={isActive}
        onToggleToLogin={toggleToLogin}
        onToggleToRegister={toggleToRegister}
      >
        <RegisterForm
          formData={registerForm}
          onChange={handleRegisterChange}
          onSubmit={handleRegisterSubmit}
          errors={errors}
        />
        <LoginForm
          formData={loginForm}
          onChange={handleLoginChange}
          onSubmit={handleLoginSubmit}
          errors={errors}
        />
      </AuthLayout>
    </>
  );
};

export default Login;
