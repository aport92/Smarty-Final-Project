import React from "react";
import EncabezadoTabla from "../../Filtro/Filtro";
import Sidbar from "../Dashboard/Aside";
import Navb from "../Dashboard/Nav";
import TablaEncuesta from "./TablaEncuesta";
import {BotonAgregar} from "../Botones/BotonAgregar"

const Encuesta = () => {
  return (
    <div class="flex">
      <Sidbar />
      <div class="w-full">
        <Navb />
        <div class="container mx-auto px-4 sm:px-8">
          <div class="py-8">
            <div>
              <h2 class="text-2xl font-semibold leading-tight">
                Administración de Encuesta
              </h2>
            </div>
            <BotonAgregar tipo="agregarEncuesta"/>
            <EncabezadoTabla />
            <TablaEncuesta />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Encuesta;
