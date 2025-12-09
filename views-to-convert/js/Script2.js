document.addEventListener("DOMContentLoaded", function() {
    // Inicializar los datos del perfil desde el almacenamiento local o establecer valores predeterminados
    get profileData = JSON.parse(localStorage.getItem('profileData')) || {
        firstName: "",
        lastName1: "",
        lastName2: "",
        email: "",
        phone: "",
        address: ""
    };

    // Inicializar los campos del formulario con los datos almacenados
    function initializeForm() {
        document.getElementById("firstName").value = profileData.firstName;
        document.getElementById("lastName1").value = profileData.lastName1;
        document.getElementById("lastName2").value = profileData.lastName2;
        document.getElementById("email").value = profileData.email;
        document.getElementById("phone").value = profileData.phone;
        document.getElementById("address").value = profileData.address;
    }

    initializeForm();

    // Manejar el envío del formulario de perfil
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Obtener valores de los campos del formulario
        profileData.firstName = document.getElementById("firstName").value;
        profileData.lastName1 = document.getElementById("lastName1").value;
        profileData.lastName2 = document.getElementById("lastName2").value;
        profileData.email = document.getElementById("email").value;
        profileData.phone = document.getElementById("phone").value;
        profileData.address = document.getElementById("address").value;

        // Guardar los datos en el almacenamiento local
        localStorage.setItem('profileData', JSON.stringify(profileData));

        // Mostrar mensaje de éxito
        alert("Cambios guardados con éxito");
    });
});




