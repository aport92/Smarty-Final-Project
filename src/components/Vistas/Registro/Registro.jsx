import { React } from "react";
import { Navbar } from "../Navbar";
import Footer from "../Footer";
import Typing from "../Registro/Typing.gif";
import "../Registro/registro.css";

const Registro = () => {
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
        title: "Ingreso existoso",
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
                Iniciar sesión
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
                    placeholder="apellido"
                    required
                  />
                </div>

                {/*<!--mail-->*/}
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
                    placeholder="Correo Electrónico"
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
                    name="email"
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
                    className="placeholder-border rounded-lg px-3 py-2 w-full"
                    type="date"
                    id="fecha-nacimiento"
                    name="fecha-nacimiento"
                    required
                  ></input>
                </div>

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
