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

export default function Cadastro() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cpf: "",
    Adress: "",
    DataNasc: "",
  });

  const handleChange = useCallback((event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container sx={{ width: "100%" }}>
          <Stack
            spacing={3}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <div>
              <Typography variant="h4">Cadastro de Pacientes</Typography>
            </div>
            <div>
              <Grid container spacing={3} sx={{ justifyContent: "center" }}>
                <Grid xs={12} md={8} lg={16}>
                  <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Card>
                      <CardHeader
                        subheader="Confirmar todos os dados antes de finalizar o cadastro do paciente"
                      />
                      <CardContent sx={{ pt: 0 }}>
                        <Box sx={{ m: -1.5 }}>
                          <Grid container spacing={3}>
                            <Grid xs={12} md={6}>
                              <TextField
                                fullWidth
                                label="Nome"
                                name="firstName"
                                onChange={handleChange}
                                required
                                value={values.firstName}
                              />
                            </Grid>
                            <Grid xs={12} md={6}>
                              <TextField
                                fullWidth
                                label="Sobrenome"
                                name="lastName"
                                onChange={handleChange}
                                required
                                value={values.lastName}
                              />
                            </Grid>
                            <Grid xs={12} md={6}>
                              <TextField
                                fullWidth
                                label="Email do paciente"
                                name="email"
                                onChange={handleChange}
                                value={values.email}
                              />
                            </Grid>
                            <Grid xs={12} md={6}>
                              <TextField
                                fullWidth
                                label="Número de telefone"
                                name="phone"
                                required
                                onChange={handleChange}
                                value={values.phone}
                              />
                            </Grid>
                            <Grid xs={12} md={6}>
                              <TextField
                                fullWidth
                                label="Endereço"
                                name="Adress"
                                onChange={handleChange}
                                required
                                value={values.country}
                              />
                            </Grid>
                            <Grid xs={12} md={6}>
                              <TextField
                                fullWidth
                                label="Digite o CPF do paciente"
                                name="cpf"
                                onChange={handleChange}
                                required
                                value={values.cpf}
                              ></TextField>
                            </Grid>
                            <Grid xs={12} md={6}>
                              <Typography>
                                Data de Nascimento 
                              </Typography>
                              <TextField
                                fullWidth
                                name="DataNasc"
                                onChange={handleChange}
                                type="Date"
                                required
                                value={values.DataNasc}
                              ></TextField>
                            </Grid>
                          </Grid>
                        </Box>
                      </CardContent>
                      <Divider />
                      <CardActions sx={{ justifyContent: "flex-end" }}>
                        <Button onClick={handleSubmit} variant="contained">Cadastrar Paciente</Button>
                      </CardActions>
                    </Card>
                  </form>
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
