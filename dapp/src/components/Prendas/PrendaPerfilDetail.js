import React from 'react';
import { drizzleReactHooks } from '@drizzle/react-plugin';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@mui/material';

const { useDrizzle } = drizzleReactHooks;

const PrendaPerfilDetail = ({ addr }) => {
  const { useCacheCall } = useDrizzle();
  const datos = useCacheCall('Retail', 'informacionPersonal', addr);
  const cantidad = useCacheCall('Retail', 'obtenerIdsPrendasPorPersonalength', addr);
  const cantidadMostrar = cantidad ?? 0;
  const IPFS_BASE_URL = 'https://ipfs.io/ipfs/';

  return (
    <div style={{ display: 'flex' }}>
      {/* Columna de Información */}
      <div style={{ flex: 1, padding: '16px' }}>
        <header className="AppCompany">
          <h2>Información del creador</h2>
        </header>
        <ul>
          <li>
            <b>Nombre:</b> {datos?.nombre}
          </li>
          <li>
            <b>Lugar de trabajo:</b> {datos?.lugarTrabajo}
          </li>
          <li>
            <b>Cantidad de prendas:</b> {cantidadMostrar}
          </li>
        </ul>
        <div>
          <Link to={`/perfil/${addr}`} style={{ textDecoration: 'none' }}>
            <Button variant="outlined" color="primary">
              Ir al perfil
            </Button>
          </Link>
        </div>
      </div>

      {/* Columna de Foto */}
      <div style={{ flex: 1 }}>
        {datos?.url ? (
          <img src={IPFS_BASE_URL + datos.url} alt="Imagen IPFS" style={{ width: '100%', height: 'auto', width: '200px' }} />
        ) : (
          <div style={{ padding: '16px' }}>
            <p style={{ color: 'red' }}>Error: Foto no encontrada (Código de estado 400)</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrendaPerfilDetail;
