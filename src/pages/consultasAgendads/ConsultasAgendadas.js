import {
  Box,
  Container,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import MenuSelect from "./sections/MenuSelect";
import { ConsultasResult } from "./sections/ConsultasResults";


export default function Cadastro() {
  return (
    <>
      <Box
        sx={{
          py: 8,
          width:"100%"
        }}
      >
        <Container sx={{ width: "100%" }}>
          <Stack spacing={3}>
            <div>
              <Typography variant="h4">Consultas Agendadas</Typography>
            </div>
            <div>
              <Grid container spacing={3}>
                <Grid xs={12} md={8} lg={16}>
                  <MenuSelect/>
                </Grid>
                <Grid xs={12} md={8} lg={16}>
                  <ConsultasResult/>
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
