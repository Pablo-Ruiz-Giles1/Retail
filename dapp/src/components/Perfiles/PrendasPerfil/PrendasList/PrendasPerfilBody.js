import { drizzleReactHooks } from '@drizzle/react-plugin';
import PrendasPerfilRow from "./PrendasPerfilRow";

const { useDrizzle } = drizzleReactHooks;
const PrendasPerfilBody = ({ PerfiladdressIndex }) => {
    const { useCacheCall } = useDrizzle();
    const getPrendasLength = useCacheCall("Retail", "obtenerIdsPrendasPorPersonalength", PerfiladdressIndex) || 0;
    const datos = useCacheCall("Retail", "obtenerIdsPrendasPorPersona", PerfiladdressIndex);
    let rows = [];

    if (datos && datos.prendas && datos.length >= 2) {
        console.log("Array de Prendas:", datos.prendas);
        console.log("Valor en el índice 1:", datos[1]);
    }
    if(datos && datos[0] !== undefined )
        {
    
    for (let i = 0; i < getPrendasLength; i++) {
        rows.push(
            <PrendasPerfilRow
                key={`ab-${i}`}
                PrendasIndex={datos[i] - 1}
                PerfiladdressIndex={PerfiladdressIndex}
            />
        );
    }
}
    

    return (
        
            <tbody>{rows}</tbody>
        
    );
};

export default PrendasPerfilBody;
