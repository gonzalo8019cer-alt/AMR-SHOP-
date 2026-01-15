let productos = []; let usuarios = []; let carrito = [];
document.addEventListener('DOMContentLoaded', ()=>{
  const formLogin = document.getElementById('form-login');
  const formRegistro = document.getElementById('form-registro');
  if(formLogin){ formLogin.addEventListener('submit', e=>{
    e.preventDefault();
    alert('Bienvenido a AMR-HUMO');
    window.location.href='tienda.html';
  }); }
  if(formRegistro){ formRegistro.addEventListener('submit', e=>{
    e.preventDefault();
    alert('Usuario registrado correctamente');
    formRegistro.classList.add('hidden');
    formLogin.classList.remove('hidden');
  }); }
});
function agregarAlCarrito(i){ alert('Producto agregado al carrito'); }
