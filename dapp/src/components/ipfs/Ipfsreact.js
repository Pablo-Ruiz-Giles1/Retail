import { create } from 'ipfs-http-client';
import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import { drizzleReactHooks } from '@drizzle/react-plugin';
import { Button, Typography, TextField, Grid, Paper } from '@mui/material';

const { useDrizzle, useDrizzleState } = drizzleReactHooks;

const ipfs = create({ host: 'localhost', port: 5001, protocol: 'http' });

const Ipfsreact = () => {
  const { useCacheCall } = useDrizzle();
  const { drizzle } = useDrizzle();
  const [setLastStackID] = useState(undefined);

  const drizzleState = useDrizzleState((state) => state);

  const address = drizzleState.accounts[0];

  const [hash, setHash] = useState('');
  const [isHashAvailable, setIsHashAvailable] = useState(0);
  const [fileBuffer, setFileBuffer] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  const [nombre, setNombre] = useState('');
  const [lugarTrabajo, setLugarTrabajo] = useState('');

  const handleDrop = async (acceptedFiles) => {
    try {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onloadend = async () => {
        const buffer = Buffer.from(reader.result);
        setFileBuffer(buffer);
        setPreviewURL(URL.createObjectURL(file));
      };
    } catch (error) {
      console.error('Error reading the file:', error);
    }
  };

  const uploadToIPFS = async () => {
    try {
      const { cid } = await ipfs.add(fileBuffer);
      setHash(cid.toString());
    } catch (error) {
      console.error('Error uploading to IPFS:', error);
    }
  };

  useEffect(() => {
    if (hash !== '') {
      setIsHashAvailable(1);
    } else {
      setIsHashAvailable(0);
    }
  }, [hash]);

  useEffect(() => {
    if (isHashAvailable === 1) {
      console.log('Nombre:', nombre);
      console.log('Lugar de trabajo:', lugarTrabajo);
      console.log('CID:', hash);
      createNFT();
    }
  }, [isHashAvailable]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const nombreToSubmit = nombre.trim() === '' ? 'NFT' : nombre;
    const lugarTrabajoToSubmit = lugarTrabajo.trim() === '' ? 'Sin especificar' : lugarTrabajo;

    setNombre(nombreToSubmit);
    setLugarTrabajo(lugarTrabajoToSubmit);

    uploadToIPFS();
  };

  const createNFT = async () => {
    try {
      console.log('CID de createNFT:', hash);
      const stackId = drizzle.contracts.Retail.methods.almacenarInformacionPersonal.cacheSend(
        nombre,
        lugarTrabajo,
        hash
      );
      setHash('');
    } catch (error) {
      console.error('Error creating NFT:', error);
    }
  };

  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      alignItems="center"
      style={{
        margin: '10px',
        background: '#f0f0f0',
        padding: '10px',
      }}
    >
      <Paper elevation={3} style={{ padding: '10px', width: '80%' }}>
        <Typography variant="h5" gutterBottom align="center">
        Crear un nuevo perfil
        </Typography>
        <Dropzone onDrop={handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps({ className: 'dropzone' })}
              style={{
                backgroundColor: '#cccccc',
                border: '2px dashed white',
                borderRadius: '5px',
                padding: '5px',
                textAlign: 'center',
                color: 'white',
                cursor: 'pointer',
                marginBottom: '10px',
              }}
            >
              <input {...getInputProps()} />
              <p>Arrastre y suelte un archivo aquí, o haga clic para seleccionarlo</p>
              {previewURL && (
                <img
                  src={previewURL}
                  alt="Preview"
                  style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '5px' }}
                />
              )}
            </div>
          )}
        </Dropzone>

        <div style={{ width: '100%' }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              variant="outlined"
              margin="normal"
              fullWidth
            />
            <TextField
              label="Lugar de trabajo"
              type="text"
              value={lugarTrabajo}
              onChange={(e) => setLugarTrabajo(e.target.value)}
              variant="outlined"
              margin="normal"
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary" disabled={!fileBuffer} fullWidth>
              Guardar información
            </Button>
          </form>
        </div>
      </Paper>
    </Grid>
  );
};

export default Ipfsreact;
