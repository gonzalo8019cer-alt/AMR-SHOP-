// Login admin
document.getElementById("loginAdminForm")?.addEventListener("submit", e=>{
  e.preventDefault();
  const usuario=document.getElementById("usuario").value;
  const clave=document.getElementById("clave").value;
  if(usuario==="admin" && clave==="1234"){
    sessionStorage.setItem("admin","true");
    window.location.href="admin.html";
  } else { alert("Usuario o contraseña incorrectos"); }
});

// CRUD Productos
let productos = JSON.parse(localStorage.getItem("productos")) || [];
const tablaProductos = document.getElementById("tablaProductos");
const formProducto = document.getElementById("formProducto");

function mostrarProductosAdmin(){
  tablaProductos.innerHTML='<tr><th>Nombre</th><th>Precio</th><th>Stock</th><th>Acciones</th></tr>';
  productos.forEach((p,index)=>{
    const tr = document.createElement("tr");
    tr.innerHTML=`<td>${p.nombre}</td><td>${p.precio}</td><td>${p.stock}</td>
    <td><button onclick="editarProducto(${index})">Editar</button>
    <button onclick="eliminarProducto(${index})">Eliminar</button></td>`;
    tablaProductos.appendChild(tr);
  });
}
mostrarProductosAdmin();

formProducto?.addEventListener("submit", e=>{
  e.preventDefault();
  const nombre=document.getElementById("nombreProd").value;
  const precio=parseFloat(document.getElementById("precioProd").value);
  const stock=parseInt(document.getElementById("stockProd").value);
  const index=productos.findIndex(p=>p.nombre===nombre);
  if(index>=0){productos[index]={nombre,precio,stock};}
  else{productos.push({nombre,precio,stock});}
  localStorage.setItem("productos",JSON.stringify(productos));
  mostrarProductosAdmin();
});

function editarProducto(index){
  document.getElementById("nombreProd").value=productos[index].nombre;
  document.getElementById("precioProd").value=productos[index].precio;
  document.getElementById("stockProd").value=productos[index].stock;
}

function eliminarProducto(index){
  productos.splice(index,1);
  localStorage.setItem("productos",JSON.stringify(productos));
  mostrarProductosAdmin();
}

// Cargar pedidos reales
function cargarPedidos(){
  const tablaPedidos = document.getElementById("tablaPedidos");
  let pedidos = JSON.parse(localStorage.getItem("pedidos"))||[];
  tablaPedidos.innerHTML='<tr><th>Cliente</th><th>Producto</th><th>Cantidad</th><th>Total</th></tr>';
  pedidos.forEach(p=>{
    const tr=document.createElement("tr");
    tr.innerHTML=`<td>${p.cliente}</td><td>${p.producto}</td><td>${p.cantidad}</td><td>${p.total}</td>`;
    tablaPedidos.appendChild(tr);
  });
}
cargarPedidos();

// Logout
function logout(){sessionStorage.removeItem("admin"); window.location.href="login.html";}