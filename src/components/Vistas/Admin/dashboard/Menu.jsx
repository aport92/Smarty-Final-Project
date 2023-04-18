import React from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineOfficeBuilding,
  HiOutlineAcademicCap,
  HiOutlineHome,
  HiOutlineBookOpen,
  HiOutlineBookmarkAlt,
  HiOutlineClipboardList,
  HiOutlineClipboardCheck,
  HiUsers,
  HiOutlineClipboardCopy,
  HiOutlineDocumentText,
} from "react-icons/hi";

export const Menu = () => {
  return (
    <div className="flex flex-wrap m-3">
      <Link to="/institucion" className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <div className="flex-grow text-center">
            <p className="text-gray-900 title-font font-medium">Institucion</p>
          </div>
          <span>
            <HiOutlineOfficeBuilding className="text-white icon icon-tabler icon-tabler-list w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4 p-1" />
          </span>
        </div>
      </Link>
      <Link to={"/alumno"} className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <div className="flex-grow text-center">
            <p className="text-gray-900 title-font font-medium">Alumnos</p>
          </div>
          <span>
            <HiOutlineAcademicCap className="text-white icon icon-tabler icon-tabler-list w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4 p-1" />
          </span>
        </div>
      </Link>
      <Link to={"/grado"} className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#1b69bf] border p-4 rounded-lg">
          <div className="flex-grow text-center">
            <p className="text-gray-900 title-font font-medium">Grado</p>
          </div>
          <span>
            <HiOutlineHome className="text-white icon icon-tabler icon-tabler-list w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4 p-1" />
          </span>
        </div>
      </Link>
      <Link to={"/materia"} className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#1b69bf]  border p-4 rounded-lg">
          <div className="flex-grow text-center">
            <p className="text-gray-900 title-font font-medium">Materias</p>
          </div>
          <span>
            <HiOutlineBookOpen className="text-white icon icon-tabler icon-tabler-list w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4 p-1" />
          </span>
        </div>
      </Link>
      <Link to={"/unidad"} className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#1b69bf] border p-4 rounded-lg">
          <div className="flex-grow text-center">
            <p className="text-gray-900 title-font font-medium">Unidades</p>
          </div>
          <span>
            <HiOutlineBookmarkAlt className="text-white icon icon-tabler icon-tabler-list w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4 p-1" />
          </span>
        </div>
      </Link>
      <Link to={"/cuestionario"} className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-[#1b69bf] border p-4 rounded-lg">
          <div className="flex-grow text-center">
            <p className="text-gray-900 title-font font-medium">Cuestionario</p>
          </div>
          <span>
            <HiOutlineClipboardList className="text-white icon icon-tabler icon-tabler-list w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4 p-1" />
          </span>
        </div>
      </Link>
      <Link to={"/preguntascto"} className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <div className="flex-grow text-center">
            <p className="text-gray-900 title-font font-medium">
              Preguntas Cuestionario
            </p>
          </div>
          <span>
            <HiOutlineClipboardCopy className="text-white icon icon-tabler icon-tabler-list w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4 p-1" />
          </span>
        </div>
      </Link>
      <Link to={"/encuesta"} className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <div className="flex-grow text-center">
            <p className="text-gray-900 title-font font-medium">Encuesta</p>
          </div>
          <span>
            <HiOutlineClipboardCheck className="text-white icon icon-tabler icon-tabler-list w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4 p-1" />
          </span>
        </div>
      </Link>
      <Link to={"/usuarios"} className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <div className="flex-grow text-center">
            <p className="text-gray-900 title-font font-medium">Usuarios</p>
          </div>
          <span>
            <HiUsers className="text-white icon icon-tabler icon-tabler-list w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4 p-1" />
          </span>
        </div>
      </Link>
      <Link to={"/reporte"} className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border border-gray-200 p-4 rounded-lg">
          <div className="flex-grow text-center">
            <p className="text-gray-900 title-font font-medium">Reportes</p>
          </div>
          <span>
            <HiOutlineDocumentText className="text-white icon icon-tabler icon-tabler-list w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4 p-1" />
          </span>
        </div>
      </Link>
    </div>
  );
};
export default Menu;
