import React from 'react';
import AuthLayout from '@/components/layout/Layout';
import Waves from '@/components/layout/Waves';
// @ts-ignore
import { LoginForm, RegisterForm, useAuthForm } from '@/modules/auth';

const Login: React.FC = () => {
  const {
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
  } = useAuthForm();

  return (
    <div className="body-container">
      <Waves />
      <AuthLayout
        isActive={isActive}
        onToggleToLogin={toggleToLogin}
        onToggleToRegister={toggleToRegister}
      >
        <RegisterForm
          formData={registerForm}
          isLoading={isLoading}
          onChange={handleRegisterChange}
          onSubmit={handleRegisterSubmit}
          errors={errors}
        />
        <LoginForm
          formData={loginForm}
          isLoading={isLoading}
          onChange={handleLoginChange}
          onSubmit={handleLoginSubmit}
          errors={errors}
        />
      </AuthLayout>
    </div>
  );
};

export default Login;
