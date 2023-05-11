import React from 'react'
import { Box, Container, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import {TotalConsultas} from  './sections/TotalConsultas.js'
import { ConsultasPendentes } from './sections/ConsultasPendentes.js';
import { ConsultasCanceladas } from './sections/ConsultasCanceladas.js';
import { ConsultasRealizadas } from './sections/ConsutasRealizadas.js'
import { GraficoConsultas } from './sections/GraficoConsultas.js';

const now = new Date().toUTCString().slice();

const Home = () => (
  <>
  <Typography 
        variant='h4'
        sx={{py:2,
          marginLeft:2
        }}
        >
          Visão Geral
        </Typography>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 2
      }}
    >
      
      
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <TotalConsultas/>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <ConsultasRealizadas/>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <ConsultasPendentes/>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <ConsultasCanceladas/>
          </Grid>
          <Grid
            xs={12}
            lg={8}
          >
            <GraficoConsultas/>
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <Typography>
              Gráfico Pizza
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);


export default Home;
