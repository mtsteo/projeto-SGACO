import {
  Box,
  Container,
  Card,
  TextField,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  InputLabel,
  MenuItem,
  Divider,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import Select from "@mui/material/Select";
import { useState, useCallback } from "react";
import { Datavagas } from "../../components/DataVagas";

export default function LancarVagas() {
  const [vaga, setVaga] = useState({
    especialista: "",
    data: "",
    turno: "",
    vagas: "",
  });

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      setVaga((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [vaga]
  );

  const vagasnum = [...Array(10).keys()];
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
              <Typography variant="h4">Lançamento de Vagas</Typography>
            </div>
            <div>
              <Grid container spacing={3} sx={{ justifyContent: "center" }}>
                <Grid xs={12} md={8} lg={16}>
                  <Card>
                    <CardContent sx={{ pt: 0 }}>
                      <Box sx={{ m: -1.5 }}>
                        <Grid container spacing={3}>
                          <Grid xs={12} md={2}>
                            <InputLabel id="demo-simple-select-label">
                              Selecione o Especialista
                            </InputLabel>
                            <Select
                              size="small"
                              fullWidth
                              labelId="demo-simple-select-label"
                              value={vaga.especialista}
                              onChange={handleChange}
                              name="especialista"
                            >
                              {Datavagas.map((espec) => {
                                return (
                                  <MenuItem value={espec.id}>
                                    {espec.nome}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </Grid>
                          <Grid xs={12} md={2}>
                            <InputLabel id="demo-simple-select-label">
                              Selecione a Data
                            </InputLabel>
                            <TextField
                              fullWidth
                              size="small"
                              name="data"
                              type="Date"
                              onChange={handleChange}
                              required
                            ></TextField>
                          </Grid>
                          <Grid xs={12} md={2}>
                            <InputLabel id="demo-simple-select-label">
                              Selecione o Turno
                            </InputLabel>
                            <Select
                              size="small"
                              fullWidth
                              autoWidth
                              labelId="demo-simple-select-label"
                              value={vaga.turno}
                              name="turno"
                              onChange={handleChange}
                            >
                              <MenuItem value={0}>Manhã</MenuItem>
                              <MenuItem value={1}>Tarde</MenuItem>
                            </Select>
                          </Grid>
                          <Grid xs={12} md={4}>
                            <InputLabel id="demo-simple-select-label">
                              Quantidade de Vagas
                            </InputLabel>
                            <Select
                              size="small"
                              labelId="demo-simple-select-label"
                              value={vaga.vagas}
                              name="vagas"
                              onChange={handleChange}
                            >
                              {vagasnum.map((a) => {
                                return <MenuItem value={a}>{a}</MenuItem>;
                              })}
                            </Select>
                          </Grid>
                          <Grid xs={12} md={2}>
                            <CardActions sx={{ justifyContent: "flex-end" }}>
                              <Button size="small" onClick={() => {}} variant="contained">
                                Adicionar lançamento
                              </Button>
                            </CardActions>
                          </Grid>
                        </Grid>
                      </Box>
                    </CardContent>
                    <Divider />
                  </Card>
                </Grid>
                <Grid xs={12} md={8} lg={16}>
                  <Typography variant="h4">Lançamentos</Typography>
                  <h2>teste</h2>
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
