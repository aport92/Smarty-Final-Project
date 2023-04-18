import Navb from "../Dashboard/Nav";
import Sidbar from "../Dashboard/Aside";
import FiltroAlumno from "../../Filtro/Filtro";
import { BotonAgregar } from "../Botones/BotonAgregar";
import TablaUnidad from "./TablaUnidad";
const Reporte = () =>{
    return( 
        <div class="flex">
        <Sidbar/>
        <div class="w-full">
            <Navb/>
            <div class="container mx-auto px-4 sm:px-8">
                <div class="py-8">
                    <div>
                        <h2 class="text-2xl font-semibold leading-tight">Unidades</h2>
                    </div>
                    <BotonAgregar tipo="agregarUnidad"/>
                    <FiltroAlumno/>
                    <TablaUnidad/>
                </div>
            </div>
        </div>

    </div>);
}
export default Reporte;