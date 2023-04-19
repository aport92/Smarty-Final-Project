import { Link } from "react-router-dom";
import { Navbar } from "../../Navbar";
import Footer from "../../Footer";
const LoginAdmin = () => {
  return (
    <>
      <Navbar />
      <body className="bg-aFuerte3 min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
        <header className="max-w-lg mx-auto">
          <h1 className="text-white text-4xl font-bold text-center">Smarty</h1>
          <h1 className="text-white text-center">Administración</h1>
        </header>
        <main className="bg-bCasi max-w-lg mx-auto p-8 md:p-12 my-10 rounded-3xl shadow-2xl">
          <section className="">
            <form className="flex flex-col gap-1" method="#" action="#">
              <div className="flex-auto">
                {/*Nombre */}
                <input
                  type="text"
                  placeholder="Nombres"
                  className="shadow appearance-none w-full rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                />
              </div>
              <div className="flex-auto">
                {/*contraseña */}
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="shadow appearance-none w-full rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none p-3"
                />
              </div>
              <Link
                to="/dashboard"
                className="bg-[] hover:bg-[#1b69bf] rounded shadow-lg hover:shadow-xl transition duration-200 text-center"
              >
                <input
                  className=" text-white font-bold py-2 "
                  type="submit"
                  value="Ingresar"
                />
              </Link>
              <div className="flex justify-end">
                <a
                  href="/Forgotpass"
                  className="text-sm text-aFuerte2 hover:text-aFuerte3 hover:underline mt-3"
                  data-te-toggle="modal"
                  data-te-target="#exampleModalCenteredScrollable"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  ¿Olvidaste su contraseña?
                </a>
              </div>
            </form>
          </section>
        </main>

        <div className="max-w-lg mx-auto text-center mt-12 mb-6">
          <p className="text-white">
            ¿No tienes cuenta?
            <Link to="/registroA" className="font-bold hover:underline">
              Crea una.
            </Link>
          </p>
        </div>

        <div
          data-te-modal-init
          className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
          id="exampleModalCenteredScrollable"
          tabindex="-1"
          aria-modal="true"
          role="dialog"
        >
          <div
            data-te-modal-dialog-ref
            className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
          >
            <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
              <div className="flex justify-center items-center rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 ">
                <h5
                  className="text-xl font-medium leading-normal text-neutral-800 text-center"
                  id="exampleModalCenteredScrollableLabel"
                >
                  Recuperar contraseña
                </h5>
              </div>
              <form action="">
                <div className="relative p-4">
                  <p>Ingrese su correo.</p>
                  <div className="">
                    <input
                      type="email"
                      placeholder="ejemplo@correo.com"
                      className="shadow appearance-none border rounded w-full py-3 px-3 my-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                    />
                  </div>
                </div>
                <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                  <button
                    type="button"
                    className="inline-block rounded bg-aFuerte4 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-aFuerte2 transition duration-150 ease-in-out hover:bg-aFuerte4 bg-opacity-75"
                    data-te-modal-dismiss
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Cerrar
                  </button>
                  <input
                    type="submit"
                    className="ml-1 inline-block rounded bg-aFuerte2 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out
                        hover:bg-aFuerte3"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    value="Enviar"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </body>
      <Footer />
    </>
  );
};
export default LoginAdmin;
