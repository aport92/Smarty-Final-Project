
import { React, useState } from "react";
import { Navbar } from "../Navbar";
import Footer from "../Footer";
import { Link, useNavigate } from "react-router-dom";
import Aunthentication from "../InicioSesion/Authentication.gif";
import "../InicioSesion/iniciosesion.css";
import Swal from "sweetalert2";

const InicioSesion = () => {
  const Navigate = useNavigate();

  //Valores validos para el correo
  const isValidEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //!Estado inicial del formulario
  const datosLogin = {
    email: "",
    password: "",
  };

  //Estado inicial de la alerta
  const initialStateInput = {
    valorInput: "",
    mensaje: "",
    estado: false,
  };

  //Estado para manejar los valores del formulario
  const [formulario, setFormulario] = useState(datosLogin);

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
  const handleLoginSession = (e) => {
    e.preventDefault(); //Previene el comportamiento por defecto que trae consigo el evento

    //!Ordenamos los datos para enviarlos a la validación
    let verificarInputs = [
      { nombre: "email", value: formulario.email },
      { nombre: "password", value: formulario.password },
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

    //!Validacion para enviar los datos al servidor
    if (totalValidaciones.length >= 2) {
      console.log("Enviar al servidor"); 

      //ALERT TO NAVIGATE
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
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
        title: "Ingreso existoso",
      });

      //NAVIGATE ROUTE
      setTimeout(() => {
        Navigate("/inicio");
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
      <div className="inicioSesion flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <div className="flex flex-col overflow-y-auto md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <img
                src={Aunthentication}
                alt=""className="object-cover h-full w-full"
              />
            </div>
            <form onSubmit={handleLoginSession} className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="w-full">
                <h1 className="block mb-2 text-xl font-font1 text-blue-500">
                  Inicio de Sesión
                </h1>

                <label className="block mb-2">
                  <span className="text-gray-700 dark:text-gray-400">
                    Correo electrónico:
                  </span></label>
                  <input id="email" name="email"
                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-blue-400 focus:outline-none focus:shadow-outline-blue dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    placeholder="0000000@mail.edu.sv" value={formulario.email}
                    onChange={ManejarEventoDeInputs}
                  /> {alerta
                    .filter(
                      (input) =>
                        input.valorInput === "email" &&
                        input.estado === true
                    )
                    .map((message) => (
                      <div className="py-2">
                        <span className="text-red-500 mt-2">
                          {message.mensaje}
                        </span>
                      </div>
                    ))}

                <label className="block mb-2">
                  <span className="text-gray-700 dark:text-gray-400">
                    Contraseña:
                  </span></label>
                  <input id="password" name="password"
                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-blue-400 focus:outline-none focus:shadow-outline-blue dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    placeholder="**********"
                    type="password" value={formulario.password}
                    onChange={ManejarEventoDeInputs}
                  />{alerta
                    .filter(
                      (input) =>
                        input.valorInput === "password" &&
                        input.estado === true
                    )
                    .map((message) => (
                      <div className="py-2">
                        <span className="text-red-500 mt-2">
                          {message.mensaje}
                        </span>
                      </div>
                    ))}

                <button
                  className="block w-full px-4 py-2 mt-4 text-sm font-font2 leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg- hover:bg-blue-800 focus:outline-none focus:shadow-outline-"
                >
                  Inicia Sesión
                </button>

                <p className="mt-4">
                  <Link
                    className="block mb-2 hover:underline"
                    to={"/ForgotPass"}
                  >
                    Olvidaste tu contraseña?
                  </Link>
                </p>

                <p className="mt-1">
                  <Link className="block mb-2 hover:underline" to={"/Registro"}>
                    Regístrate
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InicioSesion;
