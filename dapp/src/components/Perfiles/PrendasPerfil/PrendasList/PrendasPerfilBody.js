import { drizzleReactHooks } from '@drizzle/react-plugin'
import PrendasPerfilRow from "./PrendasPerfilRow";

const { useDrizzle } = drizzleReactHooks;
const PrendasPerfilBody = ({PerfiladdressIndex}) => {
    const { useCacheCall } = useDrizzle();
    const getPrendasLength = useCacheCall("Retail", "obtenerIdsPrendasPorPersonalength",PerfiladdressIndex) || 0;
    let rows = [];
    for (let i = 0; i < getPrendasLength; i++) {
        rows.push(<PrendasPerfilRow key={"ab-" + i} PrendasIndex={i} PerfiladdressIndex={PerfiladdressIndex}/>);
    }
    return <tbody>{rows}</tbody>;
};
export default PrendasPerfilBody;