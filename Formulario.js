const usuarios = []

const formularioRegistro = document.querySelector(".form")
const contenedorHTML = document.querySelector("#contenedorUsuarios")

const renderizarUsuarios = () => {
  contenedorHTML.innerHTML = ""
  for (const usuario of usuarios) {
    contenedorHTML.innerHTML += `
        <div class="card-usuario">
            <h2>Nombre: ${usuario.nombre}</h2>
            <p>Email: <strong>${usuario.email}</strong></p>
            <p>Contraseña: <strong>${usuario.contrasena}</strong></p>
            <button class="btn-eliminar" id="btn-eliminar-${usuario.id}">X</button>
        </div>
        `
  }
  const btnsEliminar = document.getElementsByClassName("btn-eliminar")
  for (const btnEliminar of btnsEliminar) {
    btnEliminar.addEventListener("click", (event) => {
      const idUsuarioEliminar = event.target.id.split("-").pop()
      const posisionUsuario = usuarios.findIndex(usuario => usuario.id == idUsuarioEliminar)
      usuarios.splice(posisionUsuario, 1)
      renderizarUsuarios()
    })
  }
}
let contadorId = 0
formularioRegistro.addEventListener("submit", (event) => {
  event.preventDefault()
  /* console.log(formularioRegistro.nombreCompleto.value) */
  usuarios.push({
    nombre: formularioRegistro.nombreCompleto.value,
    email: formularioRegistro.correoElectronico.value,
    contrasena: formularioRegistro.contrasena.value,
    id: contadorId++
  })
  formularioRegistro.reset()
  renderizarUsuarios()



})