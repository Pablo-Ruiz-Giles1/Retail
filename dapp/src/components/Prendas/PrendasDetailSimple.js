import React from 'react';
import { drizzleReactHooks } from '@drizzle/react-plugin';
import { useParams, Link } from 'react-router-dom';

import { Typography, Button, Grid, Card, CardContent } from '@mui/material';

const { useDrizzle } = drizzleReactHooks;

const IPFS_BASE_URL = 'https://ipfs.io/ipfs/';

const PrendasDetailSimple = () => {
  const { useCacheCall } = useDrizzle();
  let { addr } = useParams();
  const datos = useCacheCall('Retail', 'obtenerInformacionPrenda', addr);

  return (
    <Grid container spacing={3} style={{ marginTop: '8px' }}>
      {/* Primer Card englobando los dos Grids */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Información de la prenda
            </Typography>
            {/* Información de la prenda */}
            <ul>
              <li>
                <b>Nombre de la prenda:</b> {datos?.nombre}
              </li>
              <li>
                <b>Materiales de la prenda:</b> {datos?.material}
              </li>
              <li>
                <b>Localización del material:</b>{' '}
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(datos?.lugarTrabajo)}`} target="_blank" rel="noopener noreferrer">
                  {datos?.localizacion}
                </a>
              </li>
              <li>
                <b>Id de la prenda:</b> {addr}
              </li>
            </ul>
         {/* Botón de Volver */}
            <div>
              <Link to={`/perfil/${datos?.creador}`} style={{ textDecoration: 'none' }}>
                <Button variant="outlined" color="primary">
                  Volver al perfil
                </Button>
              </Link>
            </div>
          </CardContent>
 
        </Card>
      </Grid>

      {/* Segundo Grid para la Columna de Foto */}
      <Grid item xs={12} md={2}>
        <Card>
          <CardContent>
            {/* Foto de la prenda */}
            {datos?.url ? (
              <img src={IPFS_BASE_URL + datos.url} alt="Imagen IPFS" style={{ width: '100%', height: 'auto', width: '200px' }} />
            ) : (
              <Typography variant="body1" color="error">
                Error: Foto no encontrada (Código de estado 400)
              </Typography>
            )}

 
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PrendasDetailSimple;
