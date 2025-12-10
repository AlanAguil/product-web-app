import '../../styles/common/LoginForm.css';
import AuthInput from '../ui/AuthInput';
import AuthButton from '../ui/AuthButton';
import { handleNumericChange } from '../../utils/general.functions';

const RegisterForm = ({ formData, onChange, onSubmit, errors = {} }) => {
  
  const handlePhoneChange = (e) => {
    handleNumericChange(e, onChange);
  };

  return (
    <div className="form-container sign-up">
      <form onSubmit={onSubmit} noValidate>
        <h1>Crear cuenta</h1>
        <AuthInput
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
          placeholder="Nombre"
          required
          error={errors.name}
        />
        <AuthInput
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          placeholder="Email" 
          required
          error={errors.email}
        />
        <AuthInput
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handlePhoneChange}
          placeholder="Número de teléfono"
          required
          error={errors.phoneNumber}
        />
        <AuthInput
          type="password"
          name="password"
          value={formData.password}
          onChange={onChange}
          placeholder="Contraseña"
          required
          error={errors.password}
        />
        <AuthInput
          type="password"
          name="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={onChange}
          placeholder="Repetir contraseña"
          required
          error={errors.passwordConfirm}
        />
        <AuthButton type="submit" variant="primary">
          Registrarse
        </AuthButton>
      </form>
    </div>
  );
};

export default RegisterForm;

