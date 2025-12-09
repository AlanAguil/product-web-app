import '../styles/Style3.css';

const Login = () => {
  return (
    <div className="container login-container">
      <div className="logo text-center">
        <img src="/img/logo_Manos_Mexicanas-removebg-preview.png" alt="Manos Mexicanas Logo" />
      </div>
      <div className="login-form">
        <h2>Inicia Sesión</h2>
        <form id="login-form">
          <div className="form-group">
            <label htmlFor="Usuario">Nombre De Usuario</label>
            <input type="text" className="form-control" id="Usuario" placeholder="Nombre De Usuario" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" className="form-control" id="password" placeholder="Contraseña" required />
          </div>
          <div className="form-group text-right">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>
          <button type="submit" className="btn-login btn-block">
            Iniciar sesión
          </button>
          <div className="register-link">
            ¿No tienes cuenta? <a href="#">Registrarse</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

