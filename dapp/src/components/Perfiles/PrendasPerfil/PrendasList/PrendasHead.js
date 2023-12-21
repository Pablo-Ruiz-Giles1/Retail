import React from 'react';
import { TableHead, TableRow, TableCell } from '@mui/material';

const headerCellStyle = {
  fontFamily: 'Arial, sans-serif', // Cambia 'Arial, sans-serif' al tipo de letra que desees utilizar
  textAlign: 'center', // Centra el texto en las celdas
  fontWeight: 'bold', // Pone el texto en negrita
};

const PrendasHead = () => (
  <TableHead>
    <TableRow>
      <TableCell style={headerCellStyle}>Nombre</TableCell>
      <TableCell style={headerCellStyle}>Id de la prenda</TableCell>
      <TableCell style={headerCellStyle}>Más información</TableCell>
    </TableRow>
  </TableHead>
);

export default PrendasHead;
