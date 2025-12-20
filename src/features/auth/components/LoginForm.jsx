import '../styles/login.form.css';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

const LoginForm = ({ formData, onChange, onSubmit, errors = {} }) => {
  return (
    <div className="form-container sign-in">
      <form onSubmit={onSubmit} noValidate>
        <h1>Iniciar sesión</h1>
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
          type="password"
          name="password"
          value={formData.password}
          onChange={onChange}
          placeholder="Contraseña"
          required
          error={errors.password}
          maxLength={256}
        />
        <a href="#" id="contra">¿Olvidaste tu contraseña?</a>
        {/*     <a href="#" id="return">Volver a la tienda</a> */}
        <Button type="submit" variant="primary">
          Iniciar sesión
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;

