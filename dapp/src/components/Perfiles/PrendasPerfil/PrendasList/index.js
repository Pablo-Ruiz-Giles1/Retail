
import PrendasHead from "./PrendasHead"
import PrendasPerfilBody from "./PrendasPerfilBody"
import { Paper, Typography, Table, TableContainer } from '@mui/material';
//   
const PrendasList = ({PerfiladdressIndex2}) => (
    <section className="AppPrendas">

        
        <Table>
            <PrendasHead/>
            <PrendasPerfilBody PerfiladdressIndex={PerfiladdressIndex2}></PrendasPerfilBody>
         
                    </Table>
    </section>
);
export default PrendasList;