import { Link } from "react-router-dom";

const RegistroA = () => {
  return (
    <>
      <body class="bg-aFuerte3 min-h-screen pt-10 md:pt-8 pb-6 px-2 md:px-0">
        <header class="max-w-lg mx-auto">
          <h1 class="text-white text-4xl font-bold text-center">Aprende +</h1>
          <h1 class="text-white text-center">Registro Administradores</h1>
        </header>

        <main class="bg-bCasi max-w-lg mx-auto p-8 md:p-12 my-4 rounded-3xl shadow-2xl">
          <form class="flex flex-col gap-1" method="" action="#">
            <div class="flex-auto">
              {/*Nombre */}
              <input
                type="text"
                placeholder="Nombres"
                class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
              required/>
            </div>
            <div class="flex-auto">
              {/*apellido */}
              <input
                type="text"
                placeholder="Apellidos"
                class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
              required/>
            </div>
            <div class="flex-auto">
              {/*correo */}
              <input
                type="email"
                placeholder="ejemplo@email.com"
                class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
              />
            </div>
            <div class="grid md:grid-cols-2 gap-1">
              <div class="w-full">
                <input
                  type="password"
                  placeholder="Contraseña"
                  class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                required/>
              </div>
              <div class="w-full">
                <input
                  type="password"
                  placeholder="Repetir Contraseña"
                  class="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                required/>
              </div>
            </div>

            <input
              class="bg-aFuerte2 hover:bg-aFuerte3 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              type="submit"
              value="Registrar"
            />
          </form>
        </main>

        <div class="max-w-lg mx-auto text-center mt-8 mb-3">
          <p class="text-white">
            ¿Ya tienes una cuenta?
            <Link to="/loginA" class="font-bold hover:underline">
              Ingresar.
            </Link>
          </p>
        </div>
      </body>
    </>
  );
};
export default RegistroA;
