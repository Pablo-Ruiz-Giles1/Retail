import {drizzleReactHooks} from '@drizzle/react-plugin'
import {Link} from "react-router-dom";
import { TableRow, TableCell, Button } from '@mui/material';
const {useDrizzle} = drizzleReactHooks;

const PrendasPerfilRow = ({PrendasIndex,PerfiladdressIndex}) => {
 const {useCacheCall} = useDrizzle();

 const { addr, datos } = useCacheCall(['Retail'], (call) => {
    const addr = call("Retail", "Prendas_array", PrendasIndex);
    const datos = addr && call("Retail", "informacionPrenda", addr);
    return { addr, datos };
  }, [PrendasIndex]);

  return (
    <TableRow key={`PR-${PrendasIndex}`}>
              <TableCell align="center">{datos?.nombre}</TableCell>
      <TableCell align="center">{datos?.idPrenda}</TableCell>
      <TableCell align="center">
        <Link to={`/prendas2/${addr}`} style={{ textDecoration: 'none' }}>
          <Button variant="outlined" color="primary">
            Detalles
          </Button>
        </Link>
      </TableCell>
    </TableRow>
  );
};
export default PrendasPerfilRow;