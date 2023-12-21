import React from 'react';
import PrendasList from './PrendasList';
import { Typography, Container, Paper } from '@mui/material';

const PrendasPerfilPage = ({ PerfiladdressIndex, nombre }) => (
  <Container maxWidth="md">
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Prendas de {nombre}
      </Typography>
      <PrendasList PerfiladdressIndex2={PerfiladdressIndex} />
    </Paper>
  </Container>
);

export default PrendasPerfilPage;
