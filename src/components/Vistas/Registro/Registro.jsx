import { React, useState } from "react";
import { Navbar } from "../Navbar";
import Footer from "../Footer";
import Typing from "../Registro/Typing.gif";
import "../Registro/registro.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  const Navigate = useNavigate();
  //estado inicial del formulario
  const datosFormulario = {
    nombreReg: "",
    apellidoReg: "",
    emailReg: "",
    contraseñaReg: "",
    deptoReg: "",
    municipioReg: "",
    nieReg: "",
    telReg: "",
  };

  //estado inicial de la alerta (campos vacios)
  const initialStateInput = {
    valorInput: "",
    mensaje: "",
    estado: false,
  };

  //Valores validos para el correo
  const isValidEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //Estado para manejar los valores del formulario
  const [formulario, setFormulario] = useState(datosFormulario);

  //Estado para manejar las alertas de validación
  const [alerta, setAlerta] = useState([initialStateInput]);

  //Función para obtener lo de los inputs
  const ManejarEventoDeInputs = (event) => {
    //La propiedad target del event nos permitirá obtener los valores
    const name = event.target.name;
    const value = event.target.value;
    //Actualizamos los valores capturados a nuestro estado de formulario
    setFormulario({ ...formulario, [name]: value });
  };

  //Funcion que se va a encargar de validar los campos
  const handleRegistro = (e) => {
    e.preventDefault(); //Previene el comportamiento por defecto que trae consigo el evento

    //Ordenamos los datos para enviarlos a la validación
    let verificarInputs = [
      { nombre: "nombre", value: formulario.nombreReg },
      { nombre: "apellido", value: formulario.apellidoReg },
      { nombre: "email", value: formulario.emailReg },
      { nombre: "contraseña", value: formulario.contraseñaReg },
      { nombre: "departamento", value: formulario.deptoReg },
      { nombre: "municipio", value: formulario.municipioReg },
      { nombre: "departamento", value: formulario.nieReg },
    ];

    //Enviamos los datos a la funcion de validación y recibimos las validaciones
    const datosValidados = ValidarInputs(verificarInputs);
    console.log(datosValidados);

    //Enviamos las validaciones al estado que se va a encargar de mostrarlas en el formulario
    setAlerta(datosValidados);

    //Obtenemos el total de validación
    const totalValidaciones = datosValidados
      .filter((input) => input.estado === false)
      .map((estado) => {
        return false;
      });
    console.log("Total de validaciones", totalValidaciones.length);

    //Validacion para enviar los datos al servidor
    if (totalValidaciones.length >= 9) {
      console.log("Enviar al servidor");

      //ALERT TO NAVIGATE
      const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Ingreso de datos existoso",
      });

      //NAVIGATE ROUTE
      setTimeout(() => {
        Navigate("/PanelEstudiante");
      }, 2000);
    }
  };
  const ValidarInputs = (data) => {
    console.log(data);
    //Declaramos un arreglo el cual se va a encargar de guardar las validaciones
    let errors = [];

    //Recibidos los datos a validar
    const datosDelFormulario = data;

    //!Proceso de validacion
    // eslint-disable-next-line array-callback-return
    datosDelFormulario.map((valorInput) => {
      // eslint-disable-next-line default-case
      switch (valorInput.nombre) {
        case "email": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Por favor ingresa tu correo electrónico",
              estado: true,
            });
          } else if (!isValidEmail.test(valorInput.value)) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Ingresa un correo electrónico válido",
              estado: true,
            });
          } else {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "",
              estado: false,
            });
          }

          break;
        }

        case "password": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Por favor ingresar tu contraseña",
              estado: true,
            });
          } else if (valorInput.value.length < 8) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "La contraseña debe tener al menos 8 caracteres",
              estado: true,
            });
          } else {
            var mayus = false;
            var minus = false;
            var num = false;
            var caracter_raro = false;

            for (var i = 0; i < valorInput.value.length; i++) {
              if (
                valorInput.value.charCodeAt(i) >= 65 &&
                valorInput.value.charCodeAt(i) <= 90
              ) {
                mayus = true;
              } else if (
                valorInput.value.charCodeAt(i) >= 97 &&
                valorInput.value.charCodeAt(i) <= 122
              ) {
                minus = true;
              } else if (
                valorInput.value.charCodeAt(i) >= 48 &&
                valorInput.value.charCodeAt(i) <= 57
              ) {
                num = true;
              } else {
                caracter_raro = true;
              }
            }

            if (
              mayus === true &&
              minus === true &&
              num === true &&
              caracter_raro === true
            ) {
              errors.push({
                valorInput: valorInput.nombre,
                mensaje: "",
                estado: false,
              });
            } else {
              errors.push({
                valorInput: valorInput.nombre,
                mensaje:
                  "Ingresar una combinación correcta de almenos 8 caracteres",
                estado: false,
              });
            }
            break;
          }
        }
      }
    });
    //Retornamos el total de validaciones
    return errors;
  };

  console.log(formulario);

  return (
    <>
      <Navbar />
      <section className="text-gray-400">
        <div className=" mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="ml-auto md:mr-4 mb-4 md:mb-0 rounded-md p-2">
            <img src={Typing} alt="Inicio Sesion" />
          </div>
          <form className="bg-white p-14 rounded-lg shadow-md">
            <div className="w-full mx-auto max-w-md">
              <h2 className="text-xl font-font1 text-[#1b69bf] mb-4 tracking-wide">
                Regístrate
              </h2>
              <div className="grid grid-cols-2 gap-4 flex-col">
                <div>
                  <label
                    className="block font-font2 text-[#1b69bf] mb-2"
                    for="nombre"
                  >
                    Nombre:
                  </label>
                  <input
                    className="placeholder-border rounded-lg px-3 py-2 w-full font-font3"
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formulario.nombreReg}
                    onChange={ManejarEventoDeInputs}
                    placeholder="Nombre"
                    required
                  />
                </div>

                {/*<!--apellido-->*/}
                <div>
                  <label
                    className="block mb-2 font-font2 text-[#1b69bf]"
                    for="apellido"
                  >
                    Apellido:
                  </label>
                  <input
                    className="placeholder-border rounded-lg px-3 py-2 w-full font-font3"
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={formulario.apellidoReg}
                    onChange={ManejarEventoDeInputs}
                    placeholder="apellido"
                    required
                  />
                </div>

                {/*<!--mail/contraseña-->*/}
                <div>
                  <label
                    className="block font-font2 text-[#1b69bf]"
                    for="email"
                  >
                    Correo electrónico:
                  </label>
                  <input
                    className="placeholder-border rounded-lg px-3 py-2 w-full font-font3"
                    type="text"
                    id="email"
                    name="email"
                    value={formulario.emailReg}
                    onChange={ManejarEventoDeInputs}
                    placeholder="Correo Electrónico"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block font-font2 text-[#1b69bf]"
                    for="contraseña"
                  >
                    Contraseña:
                  </label>
                  <input
                    className="placeholder-border rounded-lg px-3 py-2 w-full font-font3"
                    type="texto"
                    id="contraseña"
                    name="contraseña"
                    value={formulario.contraseñaReg}
                    onChange={ManejarEventoDeInputs}
                    placeholder="Contraseña"
                    required
                  />
                </div>

                {/*<!--depto/municipio-->*/}
                <div>
                  <label
                    className="block font-font2 text-[#1b69bf]"
                    for="departamento"
                  >
                    Departamento:
                  </label>
                  <select
                    className="placeholder-border rounded-lg px-3 py-2 w-full font-font3 text-[#1b69bf]"
                    id="departamento"
                    name="departamento"
                    value={formulario.deptoReg}
                    onChange={ManejarEventoDeInputs}
                  ></select>
                </div>

                <div>
                  <label
                    className="block font-font2 text-[#1b69bf]"
                    for="municipio"
                  >
                    Municipio:
                  </label>
                  <select
                    className="placeholder-border rounded-lg px-3 py-2 w-full font-font3 text-[#1b69bf]"
                    id="municipio"
                    name="municipio"
                    value={formulario.municipioReg}
                    onChange={ManejarEventoDeInputs}
                    required
                  ></select>
                </div>

                {/*<!--nie/tel-->*/}
                <div>
                  <label className="block font-font2 text-[#1b69bf]" for="nie">
                    Nie:
                  </label>
                  <input
                    className="placeholder-border rounded-lg px-3 py-2 w-full text-[#1b69bf]"
                    type="text"
                    id="nie"
                    name="nie"
                    value={formulario.nieReg}
                    onChange={ManejarEventoDeInputs}
                    placeholder="0000000"
                    required
                  />
                </div>

                <div>
                  <label
                    className="block font-font2 text-[#1b69bf]"
                    for="phone"
                  >
                    Teléfono:
                  </label>
                  <input
                    className="placeholder-border rounded-lg px-3 py-2 w-full"
                    id="phone"
                    type="text"
                    value={formulario.telReg}
                    onChange={ManejarEventoDeInputs}
                    placeholder="0000-0000"
                    for="telefono"
                  ></input>
                </div>

                {/*<!--nac/gen-->*/}
                <div>
                  <label
                    className="block font-font2 text-[#1b69bf]"
                    for="fecha-nacimiento"
                  >
                    Fecha de nacimiento:
                  </label>
                  <input
                    className="placeholder-border rounded-lg px-3 py-2 w-full font-font3"
                    type="date"
                    id="fecha-nacimiento"
                    name="fecha-nacimiento"
                    value={formulario.nacimientoReg}
                    onChange={ManejarEventoDeInputs}
                    required
                  ></input>
                </div>
                <div>
                  {" "}
                  <label className="block text-[#1b69bf]" for="genero">
                    Género:
                  </label>
                  <select
                    className="placeholder-border rounded-lg px-3 py-2 w-full font-font3"
                    id="genero"
                    name="genero"
                    required
                  >
                    <option
                      className="block text-[#1b69bf]"
                      value=""
                      disabled
                      selected
                    >
                      Género
                    </option>
                    <option value="mujer">Femenino</option>
                    <option value="hombre">Masculino</option>
                    <option value="hombre">Otro</option>
                  </select>
                </div>
              </div>
              <br />
              <button
                id="submitButton"
                className="bg-[#1b69bf] hover:bg-[#328BD9] text-white py-2 px-8 rounded-md mb-4"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Registro;
