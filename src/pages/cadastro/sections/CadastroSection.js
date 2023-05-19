import { useState, useCallback, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

import {
  Box,
  Card,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";

export const CadastroSection = () => {
  const { cadastrar } = useContext(AuthContext);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cpf: "",
    Adress: "",
    DataNasc: "",
  });

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      setValues((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [values]
  );

  const handleSubmit = () => {
    cadastrar(values);
  };

  return (
    <>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Card>
          <CardHeader subheader="Confirmar todos os dados antes de finalizar o cadastro do paciente" />
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
                    value={values.Adress}
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
                  <Typography>Data de Nascimento</Typography>
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
            <Button onClick={handleSubmit} variant="contained">
              Cadastrar Paciente
            </Button>
          </CardActions>
        </Card>
      </form>
    </>
  );
};
