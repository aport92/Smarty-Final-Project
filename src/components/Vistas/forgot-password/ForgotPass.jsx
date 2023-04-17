import {React, useState} from 'react';
import { Navbar } from '../Navbar';
import Footer from '../Footer';
import { Link, useNavigate } from 'react-router-dom';
import ForgotPassword from '../forgot-password/Forgot-pass.gif'
import Swal from 'sweetalert2';

const ForgotPass = () => {

  const Navigate = useNavigate();

  //Valores validos para el correo
  const isValidEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //!Estado inicial del formulario
  const datosLogin = {
    email: "",
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
    if (totalValidaciones.length >= 1) {
      console.log("Enviar al servidor"); 

      //ALERT TO NAVIGATE
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Revisa tu bandeja de entrada',
        showConfirmButton: false,
        timer: 2000
      })

      //NAVIGATE ROUTE
      setTimeout(() => {
        Navigate("/");
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

      }
    });
    //Retornamos el total de validaciones
    return errors;
  };

  console.log(formulario);

  return (
    <>
    <Navbar/>
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
          <img src={ForgotPassword} alt="" className="object-cover h-full w-full"/>
          </div>
      <form onSubmit={handleLoginSession} className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
        <div className="w-full">
          <h1 className="block mb-2 text-xl">Olvidé mi contraseña</h1>
          <label className="block mb-2">
            <span className="text-gray-700 dark:text-gray-400">Correo electrónico: </span></label>
            <input id="email" name="email" className="block w-full mt-1 text-sm font-font3 dark:border-gray-600 dark:bg-gray-700 focus:border-blue-400 focus:outline-none focus:shadow-outline-blue dark:text-gray-300 dark:focus:shadow-outline-gray form-input" placeholder="0000000@mail.edu.sv" value={formulario.email}
                    onChange={ManejarEventoDeInputs}/>{alerta
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

          <button className="block w-full px-4 py-2 mt-4 text-sm font-font2 leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg hover:bg-blue-800 focus:outline-none focus:shadow-outline-darkblue">Recuperar Contraseña</button>
        </div>
</form>
</div>
</div>
</div>
<Footer/>
</>
  );
}

export default ForgotPass;