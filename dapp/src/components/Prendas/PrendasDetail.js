import React, { useEffect, useState } from 'react';
import { drizzleReactHooks } from '@drizzle/react-plugin';
import { useParams, Link } from 'react-router-dom';
import PrendaPerfilDetail from './PrendaPerfilDetail';
import { Typography, Button, Grid, Card, CardContent } from '@mui/material';

const { useDrizzle, useDrizzleState } = drizzleReactHooks;

const IPFS_BASE_URL = 'https://ipfs.io/ipfs/';

const PrendasDetail = () => {
  const { useCacheCall } = useDrizzle();

  const { drizzle } = useDrizzle();
  const drizzleState = useDrizzleState((state) => state);

  let { addr } = useParams();
  const datos = useCacheCall('Retail', 'obtenerInformacionPrenda', addr);

  const [creadorDireccion, setCreadorDireccion] = useState(drizzleState.accounts[0]);

  useEffect(() => {
    const obtenerDireccionMetaMask = async () => {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setCreadorDireccion(accounts[0]);
      }
    };

    if (datos?.creador) {
      setCreadorDireccion(datos.creador);
    } else {
      obtenerDireccionMetaMask();
    }
  }, [datos?.creador]);

  return (
    <Grid container spacing={3} style={{ marginTop: '8px' }}>
      {/* Primer Card englobando los dos primeros Grids */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Información de la prenda
            </Typography>
            <ul>
              <li>
                <b>Nombre de la prenda:</b> {datos?.nombre}
              </li>
              <li>
                <b>Materiales de la prenda:</b> {datos?.material}
              </li>
              <li>
                <b>Localización del material:</b>{' '}
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(datos?.localizacion)}`} target="_blank" rel="noopener noreferrer">
                  {datos?.localizacion}
                </a>
              </li>
              <li>
                <b>Id de la prenda:</b> {addr}
              </li>
            </ul>
            <div>
              <Link to="/prendas">
                <Button variant="outlined" color="primary">
                  Volver
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* Segundo Grid para la Columna de Foto */}
      <Grid item xs={12} md={2}>
        {datos?.url ? (
          <img src={IPFS_BASE_URL + datos.url} alt="Imagen IPFS" style={{ width: '100%', height: 'auto' }} />
        ) : (
          <Typography variant="body1" color="error">
            Error: Foto no encontrada (Código de estado 400)
          </Typography>
        )}
      </Grid>

      {/* Tercer Grid para la Columna de PrendaPerfilDetail */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <PrendaPerfilDetail addr={creadorDireccion} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PrendasDetail;
