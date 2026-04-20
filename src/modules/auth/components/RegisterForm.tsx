import React, { type FormEvent, type ChangeEvent } from 'react';
import '../styles/login.form.css';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

interface RegisterFormProps {
  formData: {
    name?: string;
    email?: string;
    phoneNumber?: string;
    password?: string;
    passwordConfirm?: string;
  };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  errors?: Record<string, string>;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ formData, onChange, onSubmit, errors = {} }) => {

  return (
    <div className="form-container sign-up">
      <form onSubmit={onSubmit} noValidate>
        <h1>Crear cuenta</h1>
        <Input
          type="text"
          name="name"
          value={formData.name || ''}
          onChange={onChange}
          placeholder="Nombre"
          required
          error={errors.name}
          maxLength={256}
        />
        <Input
          type="email"
          name="email"
          value={formData.email || ''}
          onChange={onChange}
          placeholder="Email"
          required
          error={errors.email}
          maxLength={256}
        />
        <Input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber || ''}
          onChange={onChange}
          placeholder="Número de teléfono"
          required
          error={errors.phoneNumber}
          maxLength={15}
        />
        <Input
          type="password"
          name="password"
          value={formData.password || ''}
          onChange={onChange}
          placeholder="Contraseña"
          required
          error={errors.password}
          maxLength={256}
        />
        <Input
          type="password"
          name="passwordConfirm"
          value={formData.passwordConfirm || ''}
          onChange={onChange}
          placeholder="Repetir contraseña"
          required
          error={errors.passwordConfirm}
          maxLength={256}
        />
        <Button type="submit" variant="primary">
          Registrarse
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
