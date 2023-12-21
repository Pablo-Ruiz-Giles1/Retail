import React from 'react';
import PerfilList from './PerfilList';
import { Container, Typography, Paper } from '@mui/material';

const PerfilesPage = () => (
  <Container maxWidth="md">
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Explora Nuestros Perfiles
      </Typography>
      <PerfilList />
    </Paper>
  </Container>
);

export default PerfilesPage;
