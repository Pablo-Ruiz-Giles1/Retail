import { drizzleReactHooks } from '@drizzle/react-plugin'
import { useParams, Link } from "react-router-dom";

const { useDrizzle } = drizzleReactHooks;
const PrendasDetail = () => {
    const { useCacheCall } = useDrizzle();
    let { addr } = useParams();
    const datos = useCacheCall("Retail", "informacionPrenda", addr);


//SOBRA EL COMPONENTE ENTERO

    return <>
        <header className="AppCompany">
            <h2>Información de la prenda</h2>
        </header>
        <ul>
        <li><b>Nombre de la prenda: </b>{datos?.nombre}</li>

          
<li><b>Materiales de la prenda</b>{datos?.material}</li>
<li><b>Localización del material</b>{datos?.localizacion}</li>
<li><b>Nombre del creador</b>{datos?.nombrePersona}</li>               
<li><b>Id de la prenda</b>{addr}</li>



        </ul>
        

        <div>
        <Link to="/prendas">Volver</Link>
        </div>

    </>
};
export default PrendasDetail;