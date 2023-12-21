import { drizzleReactHooks } from '@drizzle/react-plugin'
import PerfilRow from "./PerfilRow";

const { useDrizzle } = drizzleReactHooks;
const PerfilBody = () => {
    const { useCacheCall } = useDrizzle();
    const getDatosPersonalesLength = useCacheCall("Retail", "getDatosPersonalesLength") || 0;
    let rows = [];
    for (let i = 0; i < getDatosPersonalesLength; i++) {
        rows.push(<PerfilRow key={"ab-" + i} PerilIndex={i} />);
    }
    return <tbody>{rows}</tbody>;
};
export default PerfilBody;