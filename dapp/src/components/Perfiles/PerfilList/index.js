import React from 'react';
import { Paper, Typography, Table, TableContainer } from '@mui/material';
import PerfilHead from './PerfilHead';
import PerfilBody from './PerfilBody';

const PerfilList = () => (
  <section style={{ margin: '20px 0' }}>


     
        <Table>
          <PerfilHead />
          <PerfilBody />
        </Table>
     
   
  </section>
);

export default PerfilList;
