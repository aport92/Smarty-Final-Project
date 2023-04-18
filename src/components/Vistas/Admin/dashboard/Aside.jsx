import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiMenu,
  HiOutlineOfficeBuilding,
  HiHome,
  HiOutlineHome,
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineClipboardList,
  HiOutlineClipboardCheck,
  HiUsers,
  HiOutlineClipboardCopy,
  HiOutlineDocumentText,
} from "react-icons/hi";
const Aside = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`z-10 bg-[#1b69bf] min-h-screen ${
        open ? "w-72" : "w-16"
      } duration-500 text-gray-100 px-4`}
    >
      <div className=" py-3 flex justify-between">
        <div
          className={`whitespace-pre duration-500 ${
            !open && "opacity-0 translate-x-28 overflow-hidden"
          }`}
        >
          <h1 className="">Learn +</h1>
        </div>
        <div className="">
          <span>
            <HiMenu className=" w-7 h-7 " onClick={() => setOpen(!open)} />
          </span>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-4 relative">
        <div className="mt-5">
          <Link
            to="/dashboard"
            className="flex items-center text-sm gap-3.5 font-medium p-1.5 hover:bg-gray-800 rounded"
          >
            <div>
              <span>
                <HiHome className="ml-0 w-5 h-5 icon icon-tabler icon-tabler-users" />
              </span>
            </div>
            <h2
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Inicio
            </h2>
          </Link>
        </div>
        <div className="mt-2">
          <Link
            to="/institucion"
            className="my-1 flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded"
          >
            <div>
              <span>
                <HiOutlineOfficeBuilding className="ml-0 w-5 h-5 icon icon-tabler icon-tabler-users" />
              </span>
            </div>
            <h2
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Institución
            </h2>
          </Link>
          <Link
            to="/alumno"
            className="my-1 flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded"
          >
            <div>
              <span>
                <HiOutlineAcademicCap className=" w-5 h-5 icon icon-tabler icon-tabler-users" />
              </span>
            </div>
            <h2
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Alumno
            </h2>
          </Link>
          <Link
            to="/grado"
            className="my-1 flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded"
          >
            <div>
              <span>
                <HiOutlineHome className="w-5 h-5 icon icon-tabler icon-tabler-users" />
              </span>
            </div>
            <h2
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Grado
            </h2>
          </Link>

          <Link
            to="/materia"
            className="my-1 flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded"
          >
            <div>
              <span>
                <HiOutlineBookOpen className="w-5 h-5 icon icon-tabler icon-tabler-users" />
              </span>
            </div>
            <h2
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Materias
            </h2>
          </Link>

          <Link
            to="/cuestionario"
            className="my-1 flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded"
            href=""
          >
            <div>
              <span>
                <HiOutlineClipboardList className="w-5 h-5 icon icon-tabler icon-tabler-users" />
              </span>
            </div>
            <h2
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Cuestionario
            </h2>
          </Link>
          <Link
            to="/preguntascto"
            className="my-1 flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded"
          >
            <div>
              <span>
                <HiOutlineClipboardCopy className="w-5 h-5 icon icon-tabler icon-tabler-users" />
              </span>
            </div>
            <h2
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Preguntas
            </h2>
          </Link>
          <Link
            to="/encuesta"
            className="my-1 flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded"
          >
            <div>
              <span>
                <HiOutlineClipboardCheck className="w-5 h-5 icon icon-tabler icon-tabler-users" />
              </span>
            </div>
            <h2
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Encuesta
            </h2>
          </Link>

          <Link
            to="/usuarios"
            className="my-1 flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded"
            href=""
          >
            <div>
              <span>
                <HiUsers className="w-5 h-5 icon icon-tabler icon-tabler-users" />
              </span>
            </div>
            <h2
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Usuarios
            </h2>
          </Link>
          <Link
            to="/reporte"
            className="my-1 flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded"
          >
            <div>
              <span>
                <HiOutlineDocumentText className="w-5 h-5 icon icon-tabler icon-tabler-users" />
              </span>
            </div>
            <h2
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Reporte
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Aside;
