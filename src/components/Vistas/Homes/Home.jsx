import { React } from "react";
import { Navbar } from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import imgHome from "../Homes/imgHome.gif";

const Home = () => {
  return (
    <div>
      <Navbar />
          <main>
            <section className="text-gray-600 body-font">
              <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img src={imgHome} alt="" class="object-cover object-center rounded"/>
                  </div>
                  <section className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="font-font1 sm:text-4xl text-3xl mb-4 font-medium text-mainblue"> ¡Aprender Siempre es genial!</h1>
                      <Link>
                        <span className="bg-blue-100 font-font2 text-blue-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>Amplía tu conocimiento
                      </Link>
                        <Link>
                          <span className="bg-blue-100 font-font2 text-blue-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>Mejora tu memoria
                        </Link>
                          <Link>
                              <span className="bg-blue-100 font-font2 text-blue-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                  </svg>
                              </span>Aumenta tu confianza
                          </Link>
                              <Link>
                                  <span className="bg-blue-100 font-font2 text-blue-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                      <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                  </span>Te mantiene relevante
                              </Link>
                                  <Link>
                                      <span className="bg-blue-100 font-font2 text-blue-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                          <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                      </span>Te brinda oportunidades
                                  </Link>

                                      <div className="mt-3  p-2 flex justify-center gap-x-6">
                                          <Link to="/" className="rounded-md bg-lblue1 px-10 py-2.5 text-xl font-font2 text-white shadow-sm hover:bg-mainblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Registrate</Link>
                                            <Link to="/" className="rounded-md bg-lblue1 px-6 py-2.5 text-xl font-font2 text-white shadow-sm hover:bg-mainblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Iniciar sesión</Link>
                                      </div>
                      </section>
                </div>
          </section>
        </main>
  <Footer />
  </div>
  );
};
export default Home;
