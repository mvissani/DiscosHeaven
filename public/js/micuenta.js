const form = document.getElementById("registro-form");
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const password = document.getElementById('password');

const errorNombre = document.getElementById('errorNombre');
const errorApellido = document.getElementById('errorApellido');
const errorEmail = document.getElementById('errorEmail');
const errorPassword = document.getElementById('errorPassword');
const mensajeExito = document.getElementById('mensajeExito');

const inputs = document.querySelectorAll('#registro-form input');
const cdContainer = document.querySelector('.cd-container');

// Validación
form.addEventListener('submit', e => {
    e.preventDefault();

    [errorNombre, errorApellido, errorEmail, errorPassword].forEach(el => el.classList.remove('visible'));
    mensajeExito.classList.remove('visible');

    let valido = true;

    if (nombre.value.trim().length < 3) {
        errorNombre.classList.add('visible');
        valido = false;
    }
    if (apellido.value.trim().length < 3) {
        errorApellido.classList.add('visible');
        valido = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        errorEmail.classList.add('visible');
        valido = false;
    }
    if (password.value.length < 6) {
        errorPassword.classList.add('visible');
        valido = false;
    }

    if (valido) {
        mensajeExito.classList.add('visible');
        cdContainer.classList.add('completed');

        setTimeout(() => {
            mensajeExito.classList.remove('visible');
            form.reset();
            cdContainer.classList.remove('completed');
        }, 2000);
    }
});

// Animación según campos
function checkForm() {
    let allFilled = true;
    inputs.forEach(input => {
        if (input.value.trim() === "") allFilled = false;
    });

    if (allFilled) {
        cdContainer.classList.add('completed');
    } else {
        cdContainer.classList.remove('completed');
    }
}

inputs.forEach(input => input.addEventListener('input', checkForm));

