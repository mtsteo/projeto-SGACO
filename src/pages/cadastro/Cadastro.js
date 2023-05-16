import { useState, useCallback } from "react";
import {
  Box,
  Card,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Container,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import CadastroSection from "./sections/CadastroSection";
import { PacienteSection } from "./sections/PacientesSection";

export default function Cadastro() {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container sx={{ width: "100%" }}>
          <Stack spacing={3}>
            <div>
              <Typography variant="h4">Cadastro de Pacientes</Typography>
            </div>
            <div>
              <Grid container spacing={3} sx={{ justifyContent: "center" }}>
                <Grid xs={12} md={8} lg={16}>
                  <CadastroSection />
                </Grid>
                <Grid xs={12} md={8} lg={16}>
                  <Typography variant="h4">Pacientes Cadastrados</Typography>
                  <PacienteSection />
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
