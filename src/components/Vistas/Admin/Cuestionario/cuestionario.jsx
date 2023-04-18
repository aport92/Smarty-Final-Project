import Sidbar from "../Dashboard/Aside";
import Navb from "../Dashboard/Nav";
import EncabezadoTabla from "../../Filtro/Filtro";
import TablaCuestionario from "./TablaCuestionario";
import {BotonAgregar} from "../Botones/BotonAgregar"
const Cuestionario = () => {
  return (
    <div class="flex">
      <Sidbar />
      <div class="w-full">
        <Navb />
        <div class="container mx-auto px-4 sm:px-8">
          <div class="py-8">
            <div>
              <h2 class="text-2xl font-semibold leading-tight">
                Administración de Cuestionario
              </h2>
            </div>
            <BotonAgregar tipo="agregarCuestionario"/>
            <EncabezadoTabla/>
            <TablaCuestionario/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cuestionario;
