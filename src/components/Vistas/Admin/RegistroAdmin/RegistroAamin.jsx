import { Link } from "react-router-dom";

const RegistroAdmin = () => {
  return (
    <>
      <body className="bg-aFuerte3 min-h-screen pt-10 md:pt-8 pb-6 px-2 md:px-0">
        <header className="max-w-lg mx-auto">
          <h1 className="text-white text-4xl font-bold text-center">
            Aprende +
          </h1>
          <h1 className="text-white text-center">Registro Administradores</h1>
        </header>

        <main className="bg-bCasi max-w-lg mx-auto p-8 md:p-12 my-4 rounded-3xl shadow-2xl">
          <form className="flex flex-col gap-1" method="" action="#">
            <div className="flex-auto">
              {/*Nombre */}
              <input
                type="text"
                placeholder="Nombres"
                className="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                required
              />
            </div>
            <div className="flex-auto">
              {/*apellido */}
              <input
                type="text"
                placeholder="Apellidos"
                className="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                required
              />
            </div>
            <div className="flex-auto">
              {/*correo */}
              <input
                type="email"
                placeholder="ejemplo@email.com"
                className="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-1">
              <div className="w-full">
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  required
                />
              </div>
              <div className="w-full">
                <input
                  type="password"
                  placeholder="Repetir Contraseña"
                  className="shadow appearance-none w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                  required
                />
              </div>
            </div>

            <input
              className="bg-aFuerte2 hover:bg-aFuerte3 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              type="submit"
              value="Registrar"
            />
          </form>
        </main>

        <div className="max-w-lg mx-auto text-center mt-8 mb-3">
          <p className="text-white">
            ¿Ya tienes cuenta?
            <Link to="/loginAdmin" className="font-bold hover:underline">
              Ingresar
            </Link>
          </p>
        </div>
      </body>
    </>
  );
};
export default RegistroAdmin;
