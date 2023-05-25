import React from "react";
import {
  Box,
  Container,
  Card,
  Unstable_Grid2 as Grid,
  CardActions,
  Button,
  TextField,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function MenuSelect() {
  const [values, setvalues] = React.useState({
    filtro: "",
    busca: "",
  });
  console.log(values)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setvalues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          py: 2,
        }}
      >
        <Grid container spacing={1}>
          <Grid xs={12} sm={6} lg={3}>
            <FormControl sx={{ width: "100%" }} size="small">
              <InputLabel id="demo-select-small-label">Filtro</InputLabel>
              <Select
                name="filtro"
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={values.filtro}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="0">Protocolo</MenuItem>
                <MenuItem value="1">Especialização</MenuItem>
                <MenuItem value="2">Dia</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <TextField
              value={values.busca}
              name="busca"
              id="outlined-basic"
              size="small"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Button variant="contained" size="small">
            Buscar
          </Button>
        </Grid>
      </Box>
    </>
  );
}
