import { useState, useCallback, Image, useEffect } from "react";
import {
  Box,
  Container,
  Stack,
  Card,
  Button,
  CardActions,
  CardContent,
  Divider,
  TextField,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material/";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  borderRadius: "14px",
  boxShadow: 24,
  p: 4,
};

export default function ModalFicha(props) {
  const [values, setValues] = useState({
    firstName: props.data.paciente.pNome,
    lastName: props.data.paciente.sNome,
    email: props.data.paciente.Email,
    phone: props.data.paciente.Telefone,
    cpf: props.data.paciente.CPF,
    Adress: props.data.paciente.Endereco,
    DataNasc: props.data.paciente.dataNasc,
  });

  const { updateUser, deletarUser } = useContext(AuthContext);

  const update = async () => {
    await updateUser(values);
  };

  const deleteU = async()=>{
    await deletarUser(values.cpf)
  }

  const [isEdit, setIsEdit] = useState(true);
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
  function reload() {
    window.location.reload();
  }

  return (
    <div>
      <Modal
        open={props.isOpen}
        onClose={props.isClose}
        onBackdropClick={reload}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          style={style}
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container sx={style}>
            <Stack spacing={3}>
              <div>
                <Typography variant="h4">Ficha do Paciente</Typography>
              </div>
              <div>
                <Grid container spacing={3}>
                  <Grid xs={12} md={6} lg={4}>
                    <Card
                      sx={{
                        width: "15rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/256/4825/4825096.png"
                        width={150}
                      ></img>
                    </Card>
                  </Grid>
                  <Grid xs={12} md={6} lg={8}>
                    <form autoComplete="off" noValidate>
                      <Card>
                        <CardContent sx={{ pt: 0 }}>
                          <Box sx={{ mt: "2%" }}>
                            <Grid container spacing={3}>
                              <Grid xs={12} md={6}>
                                <TextField
                                  disabled={isEdit}
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
                                  disabled={isEdit}
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
                                  disabled={isEdit}
                                  fullWidth
                                  label="Email do paciente"
                                  name="email"
                                  onChange={handleChange}
                                  value={values.email}
                                />
                              </Grid>
                              <Grid xs={12} md={6}>
                                <TextField
                                  disabled={isEdit}
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
                                  disabled={isEdit}
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
                                  disabled={isEdit}
                                  fullWidth
                                  label="Digite o CPF do paciente"
                                  name="cpf"
                                  onChange={handleChange}
                                  required
                                  value={values.cpf}
                                ></TextField>
                              </Grid>
                            </Grid>
                          </Box>
                        </CardContent>
                        <Divider />
                        <CardActions sx={{ justifyContent: "flex-end" }}>
                          {!isEdit ? (
                            <div>
                              <Button variant="contained" onClick={update}>
                                {" "}
                                Salvar Alterações
                              </Button>
                              <Button
                                onClick={() => deleteU()}
                                variant="contained"
                                color="warning"
                              >
                                Deletar
                              </Button>
                            </div>
                          ) : null}

                          <Button
                            onClick={() => setIsEdit(false)}
                            variant="contained"
                          >
                            Editar
                          </Button>
                        </CardActions>
                      </Card>
                    </form>
                  </Grid>
                </Grid>
              </div>
            </Stack>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
