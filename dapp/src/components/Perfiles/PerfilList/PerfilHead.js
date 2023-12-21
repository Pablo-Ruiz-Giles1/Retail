import React from 'react';
import { TableHead, TableRow, TableCell } from '@mui/material';

const headerCellStyle = {
  fontFamily: 'Arial, sans-serif', // Cambia 'Arial, sans-serif' al tipo de letra que desees utilizar
  textAlign: 'center', // Centra el texto en las celdas
  fontWeight: 'bold', // Pone el texto en negrita
};

const PerfilHead = () => (
  <TableHead>
    <TableRow>
      <TableCell style={headerCellStyle}>Nombre</TableCell>
      <TableCell style={headerCellStyle}>Lugar de Trabajo</TableCell>
      <TableCell style={headerCellStyle}>Visita el perfil</TableCell>
    </TableRow>
  </TableHead>
);

export default PerfilHead;
