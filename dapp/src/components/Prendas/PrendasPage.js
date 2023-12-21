import React from 'react';
import PrendasList from './PrendasList';
import { Container, Typography, Paper } from '@mui/material';

const PrendasPage = () => (
  <Container maxWidth="md">
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Explora Nuestras Prendas
      </Typography>
      <PrendasList />
    </Paper>
  </Container>
);

export default PrendasPage;
