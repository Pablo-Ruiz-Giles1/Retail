import React from 'react';
import { drizzleReactHooks } from '@drizzle/react-plugin';
import { useParams, Link } from 'react-router-dom';
import PrendasPerfilPage from './PrendasPerfil/PrendasPerfilPage';
import { Card, CardContent, Grid, Typography, Button } from '@mui/material';
const { useDrizzle } = drizzleReactHooks;

const IPFS_BASE_URL = 'https://ipfs.io/ipfs/';

const PerfilDetail = () => {
  const { useCacheCall } = useDrizzle();
  let { addr } = useParams();
  const datos = useCacheCall('Retail', 'informacionPersonal', addr);
  const cantidad = useCacheCall('Retail', 'obtenerIdsPrendasPorPersonalength', addr);
  const cantidadMostrar = cantidad ?? 0;

  // Verifica si todos los datos están disponibles antes de renderizar
  if (!datos) {
    return <div>Cargando...</div>;
  }

  return (
    <Grid container spacing={3} style={{ marginTop: '8px' }}>
      {/* Div with information */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Información del perfil
            </Typography>
            <ul>
              <li>
                <b>Nombre:</b> {datos.nombre || 'N/A'}
              </li>
              <li>
                <b>Lugar de trabajo:</b>{' '}
                {datos.lugarTrabajo ? (
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(datos.lugarTrabajo)}`} target="_blank" rel="noopener noreferrer">
                    {datos.lugarTrabajo}
                  </a>
                ) : (
                  'N/A'
                )}
              </li>
              <li>
                <b>Dirección:</b>{' '}
                <a href={`https://explorer-mumbai.maticvigil.com/address/${addr}`} target="_blank" rel="noopener noreferrer">
                  {addr}
                </a>
              </li>
              <li>
                <b>Cantidad de prendas:</b> {cantidadMostrar}
              </li>
            </ul>
            <Link to="/perfil">
              <Button variant="outlined" color="primary">
                Volver
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Grid>

      {/* Div with photo */}
      <Grid item xs={12} md={2}>
        <Card>
          <CardContent>
            {datos.url ? (
              <img src={IPFS_BASE_URL + datos.url} alt="Imagen IPFS" style={{ width: '100%', height: 'auto' }} />
            ) : (
              <Typography variant="body1" color="error">
                Error: Foto no encontrada (Código de estado 400)
              </Typography>
            )}
          </CardContent>
        </Card>
      </Grid>

      {/* Div with green background */}
      <Grid item xs={12} md={6}>
        {/* You can add content specific to the green background div here */}
        <PrendasPerfilPage PerfiladdressIndex={addr} nombre={datos.nombre} />
      </Grid>
    </Grid>
  );
};

export default PerfilDetail;
