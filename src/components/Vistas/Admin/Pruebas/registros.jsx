import { useState } from "react";

const Registros = () => {
  //estado inicial del formulario
  const datosFormulario = {
    nombre: "",
    apellido: "",
    correo: "",
  };
  //estado inicial para alerta
  const initialStateInput = {
    input: "",
    message: "",
    state: false,
  };
  //estado para manejar los valores del formulario
  const [formulario, setFormulario] = useState(datosFormulario);
  //estado para manejar las alertas de validacion
  const [alerta, setAlerta] = useState([initialStateInput]);
  //funcion para obtener lo de los inputs
  const ManejarEventosDeInputs = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    //actualizamos los valores capturados anuestro estado de formularo
    setFormulario({ ...formulario, [name]: value });
  };{/** */}
  //funcion que se va a encargar de validar los campos
  const handleLoginSeccion = (e) => {
    e.preventDefault();
    //ordenamos los datos para enviarloa a la validacion
    let verificarInputs = [
      { nombre: "nombre", value: formulario.nombre },
      { nombre: "apellido", value: formulario.apellido },
      { nombre: "email", value: formulario.correo },
    ];
    //enviamos los datos a la funcion de validacion y recibimos las validaciones
    const datosValidados = ValidarInputs(verificarInputs);
  };

  console.log(formulario);
  return (
    <>
      <form>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div class="bg-gray-300 p-4 rounded-xl">
              <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
                Registro
              </h2>
              <div class="relative mb-4">
                <label for="full-name" class="leading-7 text-sm text-gray-600">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={formulario.nombre}
                  onChange={ManejarEventosDeInputs}
                />
              </div>
              <div class="relative mb-4">
                <label for="full-name" class="leading-7 text-sm text-gray-600">
                  Apellido
                </label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={formulario.apellido}
                  onChange={ManejarEventosDeInputs}
                />
              </div>
              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Correo
                </label>
                <input
                  type="email"
                  id="corre"
                  name="correo"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={formulario.correo}
                  onChange={ManejarEventosDeInputs}
                />
              </div>
              <input
                class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                value="Guardar"
              />
            </div>
          </div>
        </section>
      </form>
    </>
  );
};
export default Registros;
