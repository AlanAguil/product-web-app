.document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    // Aquí puedes agregar la lógica para manejar el inicio de sesión
    // Por ejemplo, podrías enviar una solicitud a tu servidor para verificar las credenciales

    console.log('Nombre De Usuario:', user);
    console.log('Contraseña:', password);

    // Simulación de redirección después de iniciar sesión
    window.location.href = 'index.html';
});
