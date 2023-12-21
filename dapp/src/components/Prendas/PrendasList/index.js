import React from 'react';
import { Paper, Typography, Table, TableContainer } from '@mui/material';

import PrendasHead from "./PrendasHead"
import PrendasBody from "./PrendasBody"

const PrendasList = () => (
    <section style={{ margin: '20px 0' }}>


     
    <Table>
            <PrendasHead/>
            <PrendasBody/>
            </Table>
     
   
     </section>
);
export default PrendasList;