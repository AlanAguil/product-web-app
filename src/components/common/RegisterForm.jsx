import '../../styles/common/login.form.css';
import Input from '../ui/Input';
import Button from '../ui/Button';

const RegisterForm = ({ formData, onChange, onSubmit, errors = {} }) => {

  return (
    <div className="form-container sign-up">
      <form onSubmit={onSubmit} noValidate>
        <h1>Crear cuenta</h1>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
          placeholder="Nombre"
          required
          error={errors.name}
          maxLength={256}
        />
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          placeholder="Email"
          required
          error={errors.email}
          maxLength={256}
        />
        <Input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={onChange}
          placeholder="Número de teléfono"
          required
          error={errors.phoneNumber}
          maxLength={15}
        />
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={onChange}
          placeholder="Contraseña"
          required
          error={errors.password}
          maxLength={256}
        />
        <Input
          type="password"
          name="passwordConfirm"
          value={formData.passwordConfirm}
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

