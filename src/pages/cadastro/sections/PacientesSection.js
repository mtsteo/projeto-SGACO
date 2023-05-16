import { format } from "date-fns";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";

export const PacienteSection = () => {
    const pacientes = [{
      nome:'Mateus Eufrasio',
      cpf:'15804588745',
      endereco:'Tv. Virglho Aguiar',
      telefone:'91985478769',
      dataNasc:'03/02/1995'
    }]

  return (
    <Card>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>CPF</TableCell>
              <TableCell>Endereço</TableCell>
              <TableCell>Telefone</TableCell>
              <TableCell>Data de Nascimento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pacientes.map((paciente) => {
              

              return (
                <TableRow hover key="1">
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <Stack alignItems="center" direction="row" spacing={2}>
                      <Typography variant="subtitle2">
                        {paciente.nome}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{paciente.cpf}</TableCell>
                  <TableCell>
                    {paciente.endereco}
                  </TableCell>
                  <TableCell>{paciente.telefone}</TableCell>
                  <TableCell>{paciente.dataNasc}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};
