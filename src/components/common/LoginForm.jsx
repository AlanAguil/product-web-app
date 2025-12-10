import '../../styles/common/LoginForm.css';
import AuthInput from '../ui/AuthInput';
import AuthButton from '../ui/AuthButton';

const LoginForm = ({ formData, onChange, onSubmit, errors = {} }) => {
  return (
    <div className="form-container sign-in">
      <form onSubmit={onSubmit} noValidate>
        <h1>Iniciar sesión</h1>
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
          type="password"
          name="password"
          value={formData.password}
          onChange={onChange}
          placeholder="Contraseña"
          required
          error={errors.password}
        />
        <a href="#" id="contra">¿Olvidaste tu contraseña?</a>
        <AuthButton type="submit" variant="primary">
          Iniciar sesión
        </AuthButton>
      </form>
    </div>
  );
};

export default LoginForm;

