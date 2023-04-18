import { React } from "react";
import { Navbar } from "../Navbar";
import Footer from "../Footer";
import Typing from "../Registro/Typing.gif";
import 

const Registro = () => {
  return (
    <>
      <Navbar />
      <section className="text-gray-400 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="ml-auto md:mr-4 mb-4 md:mb-0 rounded-md p-2">
            <img src={Typing} alt="Inicio Sesion" />
          </div>

          <div className="w-full mx-auto max-w-md">
            <form className="bg-white p-6 rounded-lg shadow-md" />
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
                  className="border-darkblue rounded-lg px-3 py-2 w-full font-font3"
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
                  className="border-darkblue rounded-lg px-3 py-2 w-full font-font3"
                  type="text"
                  id="apellido"
                  name="apellido"
                  placeholder="apellido"
                  required
                />
              </div>

              {/*<!--mail-->*/}
              <div>
                <label className="block font-font2 text-[#1b69bf]" for="email">
                  Correo electrónico:
                </label>
                <input
                  className="border-darkblue rounded-lg px-3 py-2 w-full font-font3"
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
                  className="border-darkblue rounded-lg px-3 py-2 w-full font-font3"
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
                  className="rounded-lg px-3 py-2 w-ful"
                  id="municipio"
                  name="municipio"
                  required
                ></select>
              </div>

              {/*<!--nie/tel-->*/}
              <div>
                <label class="block font-font2 text-[#1b69bf]" for="nie">
                  Nie:
                </label>
                <input
                  class="rounded-lg px-3 py-2 w-full"
                  type="text"
                  id="nie"
                  name="email"
                  placeholder="0000000"
                  required
                />
              </div>

              <div>
                <label className="block font-font2 text-[#1b69bf]" for="phone">
                  Teléfono:
                </label>
                <input
                  className="border-[#1b69bf] rounded-lg px-3 py-2 w-full"
                  id="phone"
                  type="text"
                  placeholder="0000-0000"
                  for="telefono"
                ></input>
              </div>

              {/*<!--nac/gen-->*/}
              <div>
                <label className="block" for="fecha-nacimiento">
                  Fecha de nacimiento:
                </label>
                <input
                  className="rounded-lg px-3 py-2 w-full"
                  type="date"
                  id="fecha-nacimiento"
                  name="fecha-nacimiento"
                  required
                ></input>
              </div>

              <label className="block" for="genero">
                Género:
              </label>
              <select
                className="border-darkblue rounded-lg px-3 py-2 w-full font-font3"
                id="genero"
                name="genero"
                required
              >
                <option value="" disabled selected>
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
              className="bg-[#1b69bf] hover:bg-[#328BD9] text-white font-bold py-2 px-8 rounded-md mb-4"
            >
              Enviar
            </button>
          </div>
        </div>
      </section>
      <form />
      <Footer />
    </>
  );
};

export default Registro;
