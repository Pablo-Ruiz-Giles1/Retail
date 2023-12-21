import React from 'react';
import { drizzleReactHooks } from '@drizzle/react-plugin';
import { Link } from 'react-router-dom';
import { TableRow, TableCell, Button } from '@mui/material';
const { useDrizzle } = drizzleReactHooks;

const PerfilRow = ({ PerilIndex }) => {
  const { useCacheCall } = useDrizzle();

  const { addr, datos } = useCacheCall(['Retail'], (call) => {
    const addr = call("Retail", "DatosPersonales_array", PerilIndex);
    const datos = addr && call("Retail", "informacionPersonal", addr);

    return { addr, datos };
  }, [PerilIndex]);

  return (
    <TableRow key={`DP-${PerilIndex}`}>
      <TableCell align="center">{datos?.nombre}</TableCell>
      <TableCell align="center">{datos?.lugarTrabajo}</TableCell>
      <TableCell align="center">
        <Link to={`/perfil/${addr}`} style={{ textDecoration: 'none' }}>
          <Button variant="outlined" color="primary">
            Detalles
          </Button>
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default PerfilRow;
