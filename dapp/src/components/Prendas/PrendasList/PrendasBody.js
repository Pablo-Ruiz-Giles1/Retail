import { drizzleReactHooks } from '@drizzle/react-plugin'
import PrendasRow from "./PrendasRow";

const { useDrizzle } = drizzleReactHooks;
const PrendasBody = () => {
    const { useCacheCall } = useDrizzle();
    const getPrendasLength = useCacheCall("Retail", "getPrendasLength") || 0;
    let rows = [];
    for (let i = 0; i < getPrendasLength; i++) {
        rows.push(<PrendasRow key={"ab-" + i} PrendasIndex={i} />);
    }
    return <tbody>{rows}</tbody>;
};
export default PrendasBody;