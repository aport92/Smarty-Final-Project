import React from "react";
import EncabezadoTabal from "../../Filtro/Filtro";
import AdministrarMateria from "./TablaMateria";
import Sidbar from "../Dashboard/Aside";
import Navb from "../Dashboard/Nav";
import {BotonAgregar} from "../Botones/BotonAgregar"


export const Materia = () => {
    return (
        <div class="flex">
            <Sidbar/>
            <div class="w-full">
                <Navb/>
                <div class="container mx-auto px-4 sm:px-8">
                    <div class="py-8">
                        <div>
                            <h2 class="text-2xl font-semibold leading-tight">Administración de Materias</h2>
                        </div>
                        <BotonAgregar tipo="agregarMateria"/>
                        <EncabezadoTabal/>
                        <AdministrarMateria/>
                    </div>
                </div>
            </div>
        </div>

        
    )
}
export default Materia;