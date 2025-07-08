const VALID_EMAIL = 'arloma49@gmail.com';
const VALID_PASSWORD = 'contraseñaSegura';

document.querySelectorAll('.toggle-password').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = btn.previousElementSibling;
    const icon = btn.firstElementChild;
    const isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    icon.classList.toggle('fa-eye', !isHidden);
    icon.classList.toggle('fa-eye-slash', isHidden);
  });
});

document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username || !password) {
    alert('Por favor completa todos los campos');
    return;
  }
  if (username !== VALID_EMAIL || password !== VALID_PASSWORD) {
    alert('Usuario o contraseña incorrectos');
    return;
  }
  window.location.href = 'https://soucklast.github.io/portafolio/';
});

document.getElementById('registerForm').addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('regEmail').value.trim();
  const pass = document.getElementById('regPassword').value;
  const confirm = document.getElementById('regConfirm').value;
  if (!email || !pass || !confirm) {
    alert('Completa todos los campos');
    return;
  }
  if (pass !== confirm) {
    alert('Las contraseñas no coinciden');
    return;
  }
  alert('¡Cuenta creada con éxito! Ahora inicia sesión.');
  toggleForms(); 
});

const loginSection = document.getElementById('loginSection');
const registerSection = document.getElementById('registerSection');
const toggleForms = () => {
  loginSection.classList.toggle('hidden');
  registerSection.classList.toggle('hidden');
};
document.getElementById('showRegister').addEventListener('click', e => { e.preventDefault(); toggleForms(); });
document.getElementById('showLogin').addEventListener('click', e => { e.preventDefault(); toggleForms(); });